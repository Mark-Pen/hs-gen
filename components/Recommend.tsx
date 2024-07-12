import star4 from '/public/star_4.png'
import star5 from '/public/star_5.png'

const RecommendList = [
  {
    avatar: 'data:image/jpeg;base64,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',
    star: star5.src,
    content: 'The AI Headshot Generator has revolutionized my workflow. Its incredibly user-friendly and the results are professional-quality. Highly recommend for anyone needing quick, free headshots!',
    name: 'Emily Thompson',
    work: 'Freelance Photographer'
  },
  {
    avatar: 'data:image/jpeg;base64,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',
    star: star5.src,
    content: 'As a marketing manager, I need consistent and high-quality headshots for our team. This AI tool has been a game-changer, providing us with free, polished images in minutes.',
    name: 'Alex Johnson',
    work: 'Marketing Manager'
  },
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7SO-hRjekCnY2_opk_aFKUvD7XSHlgr2NQ&s',
    star: star4.src,
    content: 'The AI Headshot Generator is a fantastic resource for designers like me. It saves so much time and the output is always impressive. A must-try for anyone in creative fields!',
    name: 'Sophia Lee',
    work: 'Graphic Designer'
  },
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcwSSS0bsSh4ljjPRUQcaNbflQIZAE9Z4sQ&s',
    star: star5.src,
    content: 've tried several headshot tools, but this AI generator stands out. Its free, easy to use, and the results are on par with professional photoshoots. Highly recommended!',
    name: 'Michael Brown',
    work: 'Entrepreneur'
  },
  {
    avatar: 'data:image/jpeg;base64,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',
    star: star5.src,
    content: 'The AI Headshot Generator has made updating our company directory a breeze. The images are sharp and professional, and the best part is its completely free!',
    name: 'Rachel Kim',
    work: 'HR Specialist'
  },
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Cci-pMMjdsbabUcgbPJI3cizNh2L6K1TBA&s',
    star: star5.src,
    content: 'As a tech blogger, Im always on the lookout for innovative tools. The AI Headshot Generator is a gem. Its free, efficient, and delivers great results. Definitely worth a try!',
    name: 'David Wilson',
    work: 'Tech Blogger'
  },
]

export default function Recommend() {

  return (
    <div className="w-full max-w-6xl mb-16 p-8 rounded-lg">
      <div className="mx-auto mt-8 hidden max-w-5xl grid-cols-1 gap-6 sm:mt-12 md:grid md:grid-cols-3">
        {
          RecommendList.map((item, inde) => {
            return <div className="flex items-center gap-4">
              <img className="size-14 shrink-0 grow-0 rounded-full h-20 w-20" src={item.avatar} alt="" />
              <div className="min-w-0 flex-1 space-y-1.5">
                <img className="h-3 w-auto" src={item.star} alt="" />
                <p className="text-xs font-medium italic leading-4 tracking-[-0.2px] text-paragraph">
                  {item.content}
                </p>
                <p className="text-xs font-bold leading-4 tracking-[-0.2px] text-paragraph">
                  {
                    item.name
                  }
                </p>
                <p className="text-xs font-bold leading-4 tracking-[-0.2px] text-paragraph">
                  {
                    item.work
                  }
                </p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
}
