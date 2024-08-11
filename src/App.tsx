import React from 'react'
import { Container, Main, Wrapper } from './components'
import { Assets } from './assets'

type ScreenImagesPropsType = {
  top: string
  bottom: string
}

export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth)
  const desktopImages: ScreenImagesPropsType = {
    top: Assets.iconPatternTopDesktop,
    bottom: Assets.iconPatternBottomDesktop
  }
  const mobileImages: ScreenImagesPropsType = {
    top: Assets.iconPatternTopMobile,
    bottom: Assets.iconPatternBottomMobile
  }
  const screenTypeImages: ScreenImagesPropsType = width > 640 ? desktopImages : mobileImages

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function reviewCardsContent() {
    type ReviewCardType = {
      title: string
      stars: number
      image: string
    }
    const reviewCards: ReviewCardType[] = [
      {
        title: 'Rated 5 Stars in Reviews',
        stars: 5,
        image: Assets.iconStar
      },
      {
        title: 'Rated 5 Stars in Report Guru',
        stars: 5,
        image: Assets.iconStar
      },
      {
        title: 'Rated 5 Stars in BestTech',
        stars: 5,
        image: Assets.iconStar
      }
    ]

    return (
      <Wrapper className='flex flex-col items-center flex-nowrap gap-[16px] w-full'>
        {
          reviewCards.map((card, index) => (
            <Wrapper key={index} className='flex flex-col md:flex-row flex-nowrap justify-center md:justify-start md:px-[32px] md:py-[20px] items-center w-full max-w-[445px] gap-[15px] md:gap-[32.45px] h-[78px] md:h-[56px] bg-[#F7F2F7] rounded-[8px] xl:first-of-type:self-start xl:last-of-type:self-end'>
              <Wrapper className='flex flex-nowrap justify-between items-center leading-[1] gap-[8.45px]'>
                {
                  [...Array(card.stars).keys()].map((_, index) => (
                    <img key={index} src={card.image} alt="" />
                  ))
                }
              </Wrapper>
              <span className='font-bold text-[17px] text-[#512051] leading-[1]'>{card.title}</span>
            </Wrapper>
          ))
        }
      </Wrapper>
    )
  }

  function userCommentsContent() {
    type UserCommentType = {
      name: string,
      verification: string,
      comment: string
      image: string
    }
    const userComments: UserCommentType[] = [
      {
        name: 'Colton Smith',
        verification: 'Verified Buyer',
        comment: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
        image: Assets.imageColton
      },
      {
        name: 'Irene Roberts',
        verification: 'Verified Buyer',
        comment: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
        image: Assets.imageIrene
      },
      {
        name: 'Anne Wallace',
        verification: 'Verified Buyer',
        comment: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
        image: Assets.imageAnne
      }
    ]

    return (
      <Wrapper className={`w-full flex flex-wrap xl:flex-nowrap md:min-h-[266px]  md:justify-between md:items-center gap-[16px]`}>
        {
          userComments.map((comment, index) => (
            <Wrapper key={index} className='px-[32px] pt-[40px] pb-[35px] w-full bg-[#512051] rounded-[8px] flex flex-col flex-nowrap justify-between gap-[23px] md:gap-[31px] md:first-of-type:self-start md:last-of-type:self-end xl:max-w-[350px] md:min-h-[auto] xl:min-h-[234px]'>
              <Wrapper className='flex flex-nowrap items-center gap-[23px]'>
                <img className='rounded-full w-[40px] aspect-square' src={comment.image} alt="" />
                <Wrapper className='flex flex-col flex-nowrap gap-[4px] items-start text-[17px]'>
                  <span className='font-bold text-white leading-[1]'>{comment.name}</span>
                  <span className='font-normal  text-[#EE69A4] leading-[1]'>{comment.verification}</span>
                </Wrapper>
              </Wrapper>
              <p className='text-left leading-[22px] tracking-[-0.3px] text-white text-[17px]'>
                {comment.comment}
              </p>
            </Wrapper>
          ))
        }
      </Wrapper>
    )
  }

  return (
    <Main className='relative font-league grid place-items-center min-w-full px-[24px] py-[82px] text-center'>
      <img className='absolute left-0 top-0' src={screenTypeImages.top} alt="" />

      <Container className='z-[1] flex flex-col flex-nowrap gap-[49px] xl:gap-[71px] md:px-[165px]'>

        <Wrapper className='flex flex-col items-center xl:text-left xl:flex-row flex-nowrap gap-[39px] xl:gap-[125px]'>
          <Wrapper className='flex flex-col flex-nowrap gap-[17px] xl:gap-[16px] xl:max-w-[445px] 2xl:max-w-max'>
            <h1 className='text-[#512051] text-[40px] xl:text-[56px] font-bold leading-[32px] xl:leading-[48px] tracking-[-1.43px] xl:tracking-[-2px] '>
              10,000+ of our users love our products.
            </h1>
            <p className='text-[#927B91] text-[19px] font-medium leading-[25px] tracking-[-0.63px]'>
              We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
            </p>
          </Wrapper>
          {reviewCardsContent()}
        </Wrapper>
        {userCommentsContent()}

      </Container>

      <img className='absolute right-0 bottom-0' src={screenTypeImages.bottom} alt="" />
    </Main>
  )
}
