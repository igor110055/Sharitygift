import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react"

import { useUser } from '@auth0/nextjs-auth0';

import { Spinner } from "reactstrap";

import MainBanner from "../components/custom/sections/mainbanner";
import CharityRaisers from "../components/custom/sections/charityraisers";

export default function Explorer(props) {
  const { user, error, isLoading } = useUser();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState(null);
  useEffect(async () => {
    if(user){
      console.log(user)
      setLoading(true)
      const res = await fetch("/api/user", {
        method: 'post',
        body: JSON.stringify(user)
      });
      const json = await res.json();
      await setData(json)
      setLoading(false)
    }
  }, [user]);

  useEffect(async () => {
    if(data.checkedItems)
      setKeys(Object.keys(data.checkedItems));
    console.log(props.charities)
  }, [data]);

  return (
    <div>
      <Head>
        <title>Sharity | Explore </title>
        <meta
          name="Sharity"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <div className="p-t-102">
        <MainBanner />
        {loading?
        <div className="spacer text-center">
          <Spinner>
            Loading...
          </Spinner></div>:""}
          <div id="donate-crypto">
            {!loading?(keys && keys.map((item) => {
              if(data.checkedItems[item] == true){
                return (<CharityRaisers key={item} title={item} charities={props.charities[item]} />)
              }
            })):""}
            {!loading?(!keys && Object.keys(props.charities).slice(0,3).map((item) => {
              return (<CharityRaisers key={item} title={item} charities={props.charities[item]} />)
            }
            )):""}
          </div>
        {!loading?
        <div className="align-center">
          <Link href="#">
            <a className="btn btn-lg m-t-30 btn-alternate p-l-40 p-r-40 font-14">
              Show more categories
            </a>
          </Link>
        </div>:""}
        <p className="p-t-20"></p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const categories = [
    "aapi-led",
    "adoption",
    "afghanistan",
    "animals",
    "athletics",
    "autism",
    "black-led",
    "buddhism",
    "cancer",
    "cats",
    "christianity",
    "climate",
    "conservation",
    "coronavirus",
    "culture",
    "dance",
    "disabilities",
    "disease",
    "dogs",
    "education",
    "environment",
    "filmandtv",
    "food-security",
    "freepress",
    "gender-equality",
    "health",
    "hinduism",
    "housing",
    "humans",
    "hurricane-laura",
    "immigrants",
    "indigenous-led",
    "indigenous-peoples",
    "islam",
    "judaism",
    "justice",
    "latine-led",
    "legal",
    "lgbt",
    "libraries",
    "mental-health",
    "middle-east",
    "museums",
    "music",
    "oceans",
    "poverty",
    "racial-justice",
    "refugees",
    "religion",
    "reproductive-justice",
    "research",
    "science",
    "seniors",
    "space",
    "theater",
    "transgender",
    "ukraine",
    "veterans",
    "visualart",
    "votingrights",
    "water",
    "wildfires",
    "wildlife",
    "women-led",
    "womens-health",
    "youth"
  ]
  let charities = {}
  // for ( let i = 0; i < categories.length; i ++ ){
  //   const charity = await fetch("https://partners.every.org/v0.2/browse/"+categories[i]+"?apiKey=72a0e0f6c64e2d13ee4108a39acfa99a");
  //   const json = await charity.json()
  //   charities[categories[i]] = json['nonprofits']
  // }
    charities = {
    "aapi-led": [
        {
            "description": "SIPA enriches and empowers generations of Pilipino Americans and others in Historic Filipinotown and throughout Los Angeles.. SIPA is a 501(c)3 nonprofit organization serving Historic Filipinotown and other neighborhoods throughout Greater Los Angeles County. SIPA produces programs for youth and families including case management and counseling, after school programs, senior programs, small business development, cultural enrichment, and affordable housing.",
            "ein": "952879339",
            "name": "Search To Involve Pilipino Americans",
            "profileUrl": "https://www.every.org/sipacares",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/m4oe7clznkvtilq7he78",
            "logoCloudinaryId": "profile_pics/m4oe7clznkvtilq7he78",
            "matchedTerms": []
        },
        {
            "description": "Our mission is to provide quality college mentorship for all. . About Us.\nFor Students. By Students.\n\nAs recent graduates, we've gone through the challenge of juggling AP classes, standardized testing, college applications, financial aid, and searching for scholarships - all within the same semester. It can be tough, especially if you don't have anyone to help you. That's where we come in.\n\n\nWe started Take on College in 2019 because we noticed the lack of mentorship resources available for those who would become first-generation college students. The average college counselor can cost upwards of $100 per meeting - and as college students who can't afford that, we want to help.\n\n \n\nThrough Take on College, we provide an accessible program for students to learn from others who have just gone through the same process. Each one of our mentors has experience in mentoring and college essay editing. Enjoy our services; learn about our take on essays, resumes, cover letters, and more!",
            "ein": "851528191",
            "name": "Take on College",
            "profileUrl": "https://www.every.org/take-on-college",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yieljmdaxb0c3dvtr4wl",
            "logoCloudinaryId": "profile_pics/yieljmdaxb0c3dvtr4wl",
            "matchedTerms": []
        },
        {
            "description": "Building collective power with AAPI women and girls to gain full agency over our lives.. NAPAWF is the only organization focused on building power with AAPI women and girls to influence critical decisions that affect our lives, our families and our communities. Using a reproductive justice framework, we elevate AAPI women and girls to impact policy and drive systemic change in the United States. \n\nNAPAWF was founded in 1996 to realize the vision of 100 AAPI women who recognized the need for an organization that would amplify AAPI women’s stories and experiences. Being seen and heard in the public narrative gives us the power to shape the policy and cultural change needed to gain agency over our lives, families, and communities.\n\nToday, we are mobilizing and building power in 14 cities across the United States to create social, political, and economic change for AAPI women and girls. We also show up in solidarity for other women of color who are experiencing injustice and harms of oppr",
            "ein": "364799986",
            "name": "National Asian Pacific American Womens Forum",
            "profileUrl": "https://www.every.org/napawf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ebu4qftesc3bxugywrhk",
            "logoCloudinaryId": "profile_pics/ebu4qftesc3bxugywrhk",
            "matchedTerms": []
        },
        {
            "description": "WIN Arts aims to preserve and promote Philippine heritage through the arts.. MISSION:\n1. To engage in projects and collaborate with other organizations to preserve and promote the Philippine heritage.\n2. Develop, train, enhance artistic talents.\n3. Mentor potential artists who can individually promote the objectives of the organization.\n4. Encourage participation and involvement in the various activities of the organization.",
            "ein": "463657578",
            "name": "Waraynon Initiative Network",
            "profileUrl": "https://www.every.org/winarts",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/mtn5lnlzmqrvxwza4jsm",
            "logoCloudinaryId": "profile_pics/mtn5lnlzmqrvxwza4jsm",
            "matchedTerms": []
        },
        {
            "description": "Advance civil and human rights for Asian Americans and to build and promote a fair and equitable society for all.. We fight for civil and human rights and work to empower Asian Americans to participate in our democracy. The mission of Asian Americans Advancing Justice | AAJC is to advance civil and human rights for Asian Americans and to build and promote a fair and equitable society for all.",
            "ein": "133619000",
            "name": "Asian Americans Advancing Justice - AAJC",
            "profileUrl": "https://www.every.org/aajc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/och7scywvxtcn6nhygdx",
            "logoCloudinaryId": "faja_profile/och7scywvxtcn6nhygdx",
            "matchedTerms": []
        },
        {
            "description": "SPIO is democratizing Pacific Islander access to higher education and professional opportunities through free digital resources.. Pacific Islanders remain underrepresented in higher education, professional fields, and in the media today. Often limited in opportunities in their home communities, Pacific Islanders need resources and support to pursue higher education, secure professional positions, and access economic opportunities. Now, with the COVID-19 pandemic and its disproportionate effect on Pacific Islanders and other communities of color, these resources are more essential than ever to foster a thriving, inclusive Pacific Islander community rooted in cultural heritage. \n\nSouth Pacific Islander Organization (SPIO) is a 100% grassroots nonprofit founded in December 2018 by four Indigenous and Pacific Islander Stanford alumni who believe in democratizing Pacific Islander access to higher education and economic opportunities, globally. They came together in response to the lack of",
            "ein": "833380220",
            "name": "South Pacific Islander Organization",
            "profileUrl": "https://www.every.org/southpacificislander",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/vifbzshyuvvts6169s0s",
            "logoCloudinaryId": "profile_pics/vifbzshyuvvts6169s0s",
            "matchedTerms": []
        },
        {
            "description": "Support local NGOs responding to the pandemic in India, through this fund managed by Give2Asia.. Give2Asia is partnering with trusted nonprofit organizations to support frontline health workers and institutions responding to the coronavirus pandemic.\n\nIn a crisis of this magnitude, local knowledge counts. Give2Asia is partnering with trusted nonprofit organizations to support frontline health workers and at-risk communities. Our funding priorities include: \n•\tEmergency medical supplies to frontline workers, including personal protective equipment (PPE), hand sanitizers, soap, and disinfectant sprays \n•\tNutritious meals, including cooked meals and dry rations \n•\tFinancial support to marginalized families\n\nGive2Asia is working with over 20 local NGO partners in India that are responding to the current crisis. They include: \n\nOxfam India\n\nOxfam India is working to support child education, empowering women & fighting against inequality in India. Their COVID-19 relief efforts include:\n\n•\tF",
            "name": "COVID-19 Relief Fund: India",
            "profileUrl": "https://www.every.org/covid.19.relief.india",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/mqtz0q7jckf7f5tpaadk",
            "logoCloudinaryId": "faja_profile/mqtz0q7jckf7f5tpaadk",
            "matchedTerms": []
        },
        {
            "description": "Support local NGOs responding to the pandemic in Nepal. Give2Asia is partnering with trusted nonprofit organizations to support frontline health workers and institutions responding to the coronavirus pandemic.\n\nGive2Asia’s disaster response program funds both immediate needs and long-term recovery. The recent lockdown has significantly affected many at-risk communities. Our role is to empower our local NGO partners to support these communities through this time of challenge. Currently, our funding priorities include: \n•\tFood and sanitation materials support to residents of shelter \n•\tLivelihood support \n•\tEmergency medical supplies and safety materials \n\nOur local NGO partners in Nepal include: \nKOSHISH Nepal \n•\tProvides psychosocial support, free consultation, daily meal and shelter to clients in the shelter \nSano Paila (Little Step) \n•\tManages the Feeding Nepal campaign, which provides daily meals to rickshaw pullers and their families, sanitation materials to support daily wage ear",
            "name": "COVID-19 Relief Fund: Nepal",
            "profileUrl": "https://www.every.org/covid.19.relief.nepal",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/mqtz0q7jckf7f5tpaadk",
            "logoCloudinaryId": "faja_profile/mqtz0q7jckf7f5tpaadk",
            "matchedTerms": []
        },
        {
            "description": "NAFCON is a national multi-issue alliance of Filipino organizations and individuals in the US serving to protect the rights and welfare of Filipinos.. NAFCON is a national alliance of Filipino organizations, institutions, and individuals that responds to the concerns of Filipinos in the US and in the Philippines by creating an action-oriented platform that brings people together through culture & heritage, education, health & wellness, and advocacy.",
            "ein": "454128737",
            "name": "National Alliance for Filipino Concerns NAFCON",
            "profileUrl": "https://www.every.org/nafconusa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ks5musddaxckuhn3pml8",
            "logoCloudinaryId": "faja_profile/ks5musddaxckuhn3pml8",
            "matchedTerms": []
        },
        {
            "description": "- Los Angeles is the nation’s largest Asian American legal and civil rights organization.  Building upon the legacy of the Asian Pacific American Legal Center. Advancing Justice - LA’s mission is to advocate for civil rights, provide legal services and education, and build coalitions to positively influence and impact Asian Americans and Pacific Islanders and to create a more equitable and harmonious society.",
            "ein": "953854152",
            "name": "Asian Americans Advancing Justice - Los Angeles",
            "profileUrl": "https://www.every.org/advancingjustice-la",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kfaxrn0o7gwh3h6jgvhp",
            "logoCloudinaryId": "faja_profile/kfaxrn0o7gwh3h6jgvhp",
            "matchedTerms": []
        }
    ],
    "adoption": [
        {
            "description": "Uplifting spirits across the globe by delivering inspiring handmade cards.. Cardz for Kidz is dedicated to uplifting the spirits of people of all ages across the globe by delivering inspiring handmade cards. We've been able to partner with independent artists, nonprofits, corporations, and schools to create over 300,000 cards that have been sent around the world. We partner with other global nonprofits (e.g. Ronald McDonald House Charities, Make-A-Wish, Amnesty International), as well as donating cards to local hospitals, nonprofits, and schools impacted by tragedy. Please join in if you're interested in making a difference.",
            "ein": "461594296",
            "name": "Cardz for Kidz",
            "profileUrl": "https://www.every.org/cardzforkidz",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/respdi6tjnmwiqvy1nrv",
            "logoCloudinaryId": "profile_pics/respdi6tjnmwiqvy1nrv",
            "matchedTerms": []
        },
        {
            "description": "Jordan Gospel Ministry Inc is a nonprofit organization in Sarasota, FL. Founded in 1975 and received its nonprofit status in 1979.. Over 24 thousand children in Florida Foster Care, 21 thousand at-risk youth in the Florida Department of Juvenile Justice System, and over 59,000 arrested/intake in 2018. The suicide rate for kids ages 10 to 14 nearly tripled in the last decade around the nation. Children who feel abandoned, unwanted, unloved, rejected, and alone. This organization brings compassion and love from their supporters. Our mission is to utilize our programs by speaking hope and encouragement through inspiring true-life stories of our own heart healing experiences. Our purpose is to help instill confidence, worthiness, better self-esteem, and creating positive memory events. These at-risk children already have enough bad memories. It's about setting their hearts free to become the person they were meant to be!",
            "ein": "591711380",
            "name": "Jordan Gospel Music Ministry Inc",
            "profileUrl": "https://www.every.org/jordan-gospel-music-ministry-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ebsfarbfdsbssfkbpsoa",
            "logoCloudinaryId": "profile_pics/ebsfarbfdsbssfkbpsoa",
            "matchedTerms": []
        },
        {
            "ein": "650998013",
            "name": "Kids In Crisis International, Inc",
            "profileUrl": "https://www.every.org/kids-in-crisis-international",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/iecamtpfbwgcmq3dxf4d",
            "logoCloudinaryId": "profile_pics/iecamtpfbwgcmq3dxf4d",
            "matchedTerms": []
        },
        {
            "description": "Transforming the lives of orphans, the blind, and those suffering from the effects of poverty in Ethiopia through sponsorship, job skills training, orphan care and adoption.   www.fieldsofpromise.org. Our mission as an organization is to promote God’s heart for the fatherless, bringing their plight to the awareness of the church and global community. We encourage the church as a whole to take action by praying, going, giving, sponsoring, and adopting. In countries where Fields of Promise has a humanitarian presence, this mission will expand to relieving and eliminating problems associated with poverty, blindness, special medical needs, and educational deficits. Visa mer",
            "ein": "571235074",
            "name": "Fields of Promise",
            "profileUrl": "https://www.every.org/fields-of-promise",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pprpgte0xy5suiqfztpf",
            "logoCloudinaryId": "faja_profile/pprpgte0xy5suiqfztpf",
            "matchedTerms": []
        },
        {
            "description": "For Every Child... A Place to Call Home.. The Foster & Adoptive Care Coalition creates permanency in foster children’s lives by recruiting and retaining foster and adoptive families in the Saint Louis Metropolitan area.",
            "ein": "431570225",
            "name": "Foster & Adoptive Care Coalition",
            "profileUrl": "https://www.every.org/foster-adopt",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/r2wfvilydwmnoqvhmcdi",
            "logoCloudinaryId": "faja_profile/r2wfvilydwmnoqvhmcdi",
            "matchedTerms": []
        },
        {
            "ein": "813143881",
            "name": "Foster Village",
            "profileUrl": "https://www.every.org/fostervillageaustin",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/skadyv7vpmkswjifqcsg",
            "logoCloudinaryId": "faja_profile/skadyv7vpmkswjifqcsg",
            "matchedTerms": []
        },
        {
            "description": "All Times Are Local amplifies foster youth voices in Chicago via cell phones & unlimited data during an era of necessary access.. Communication should be simple; for older youth in the Chicago foster care system, it isn't.\n\nThrough our Phones for Fosters program, All Times Are Local bridges the divide between those youth and their friends, family, and resources by providing them with a phone number that never changes, access to reliable cellular service, and peace of mind when it comes to their monthly cell phone bill.\n\nHelp us prevent the vicious cycle of the mixed communications and missed opportunities that lead to homelessness, unemployment, incarceration, unplanned pregnancies, and more.",
            "ein": "841840606",
            "name": "All Times Are Local Foundation",
            "profileUrl": "https://www.every.org/alltimesarelocal",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/fmzzqd00ntp8yp9yj9ca",
            "logoCloudinaryId": "profile_pics/fmzzqd00ntp8yp9yj9ca",
            "matchedTerms": []
        },
        {
            "description": "Provides duffle bags to social service workers to gift to children entering the Foster System. Hayden's Hope Totes is a 501(c)3 non-profit organization. Our aim is to provide duffle bags to the social service workers that meet and transport foster childre…n as they enter in the Foster System in the Los Angeles area. These bags bring a sense of safety, security and confidence to each child going through this process and offer them some stability and continuity by giving them a place to put their own clothes, toiletries and important personal belongings. Afficher la suite",
            "ein": "472274706",
            "name": "Helphht",
            "profileUrl": "https://www.every.org/helphht",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/xdv4aqtdrlyvutviw80s",
            "logoCloudinaryId": "faja_profile/xdv4aqtdrlyvutviw80s",
            "matchedTerms": []
        },
        {
            "description": "AOK strives to raise awareness about the experiences of kids within the foster care system in our region, to help recruit and retain foster and adoptive families, and to engage the community in supporting them.. Mission: To raise awareness about the experiences of kids within the foster care system in our region, to help recruit and retain foster and adoptive families, and to engage the community in supporting them.   Vision: A community actively invested in our most vulnerable young citizens, where children in foster care have their short- and long-term needs met by strong, capable, and supported families.",
            "ein": "352587544",
            "name": "All Our Kids - Fostering Community",
            "profileUrl": "https://www.every.org/fosteringaok",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/acgae489wx2seexztrz7",
            "logoCloudinaryId": "faja_profile/acgae489wx2seexztrz7",
            "matchedTerms": []
        },
        {
            "description": "So much more than foster care.. To cultivate nurturing and knowledgeable families to protect and meaningfully enhance the welfare and stability of vulnerable children and their families",
            "ein": "731696751",
            "name": "Families Uniting Families",
            "profileUrl": "https://www.every.org/families-uniting-families",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/i049a1ei0kxe5scxoffv",
            "logoCloudinaryId": "faja_profile/i049a1ei0kxe5scxoffv",
            "matchedTerms": []
        }
    ],
    "afghanistan": [
        {
            "description": "USA for UNHCR protects refugees and empowers them with hope and opportunity.. The Office of the United Nations High Commissioner for Refugees (UNHCR), also known as the UN Refugee Agency, is the world’s leading organization aiding and protecting people forced to flee their homes due to violence, conflict and persecution. UNHCR provides shelter, food, water, medical care and other lifesaving assistance to refugees around the world.\n\nThe dream of most refugees is to return home. When possible, UNHCR helps refugees return to their homeland. When refugees can’t go back home, UNHCR helps them rebuild their lives in another country. Since its formation by the United Nations General Assembly in 1950, UNHCR has helped an estimated 50 million refugees restart their lives and has twice received the Nobel Peace Prize.",
            "ein": "521662800",
            "name": "USA for UNHCR",
            "profileUrl": "https://www.every.org/unrefugees",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/vlqxgvl2mbvb2ekr9yfa",
            "logoCloudinaryId": "faja_profile/vlqxgvl2mbvb2ekr9yfa",
            "matchedTerms": []
        },
        {
            "description": "Interpreting Freedom Foundation, is a nationally registered 501(c)3, committed to supporting our Afghan Interpreters and Allies.. www.InterpretingFreedom.org Founded in 2018, The Interpreting Freedom Foundation, a National Nonprofit, a registered 501(c)3 organization, committed to supporting our Afghan Interpreters, allies, and families as they transition to their new life as community members of our United States of America.\n \nWe provide comprehensive support services for all US combat interpreters who were engaged in Operation Enduring Freedom. These military and special ops interpreters played a critical role in the battlefield alongside US Armed Forces.\n \nPlease visit our webpage at www.InterpretingFreedom.org. On there, you will see that we are in many ways very different from other nonprofits. We go out of our way to be highly transparent about the stewarding and spending of your generous donor dollars. On our page, you will see a counter which tracks many of the services we hav",
            "ein": "831204288",
            "name": "Interpreting Freedom Foundation",
            "profileUrl": "https://www.every.org/interpreting-freedom-foundation-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/sc6yudflr8akfjlq3c5n",
            "logoCloudinaryId": "profile_pics/sc6yudflr8akfjlq3c5n",
            "matchedTerms": []
        },
        {
            "description": "Provides legal advocacy for refugees and displaced people in need of a safe place to call home.. IRAP’s innovative model of mobilizing legal resources to advocate for refugees and displaced people saves lives, assures safe passage to destination countries, and shapes thought and practice in the United States and around the globe to ensure fair and humane treatment of these vulnerable individuals.\n\nIRAP’s approach is grounded in three distinct but interrelated strategies: \n\n1. IRAP has created a “virtual public interest law firm”—a firm that is not impeded by geographic boundaries and uses technological solutions to deliver free high-quality representation to people living in, and fleeing from, war, persecution, and political upheaval around the world. We have trained an army of volunteers—1,200 students from 30 law schools in the United States and Canada and pro bono attorneys from over 120 international law firms and multinational corporations—to assist thousands of refugees and disp",
            "ein": "822167556",
            "name": "International Refugee Assistance Project: IRAP",
            "profileUrl": "https://www.every.org/refugeerights",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/irap_ejmmb5",
            "logoCloudinaryId": "faja_profile/irap_ejmmb5",
            "matchedTerms": []
        },
        {
            "description": "Support aid and humanitarian efforts on the ground in Afghanistan and across the globe for Afghan refugees..",
            "name": "Afghanistan Humanitarian Aid",
            "profileUrl": "https://www.every.org/afghanistan.relief",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/vlxh21ypgzbgbqstxo3d",
            "logoCloudinaryId": "profile_pics/vlxh21ypgzbgbqstxo3d",
            "matchedTerms": []
        },
        {
            "description": "Founded in 2001, Women for Afghan Women (WAW) is the largest Afghan women’s rights organization, globally, with over 850 full-time staff operating centers, programs, and services aimed at empowering Afghan women in the United States and Afghanistan.. WAW was founded in April 2001 to advocate for women then living under Taliban rule in Afghanistan. Since its inception, WAW has become the largest organization for Afghan women and girls globally, and the largest women’s organization in Afghanistan. To date, WAW has served over 30,000 clients and trained more than 330,000 individuals on women’s rights. WAW provides life-saving and life-changing services, education, and advocacy for women and children across Afghanistan and NY who have endured human rights violations. WAW’s capacity has grown from being volunteer-run when it was founded to now employing over 750 staff members, the vast majority of whom are Afghan and female.",
            "ein": "020539734",
            "name": "Women for Afghan Women",
            "profileUrl": "https://www.every.org/women-for-afghan-women",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/iguedomblehoeshb4zlc",
            "logoCloudinaryId": "faja_profile/iguedomblehoeshb4zlc",
            "matchedTerms": []
        },
        {
            "description": "To save and support America's Afghan and Iraqi wartime allies.. No One Left Behind is a community organization dedicated to ensuring that the United States keeps its promise to care for those who jeopardize their safety for our country.",
            "ein": "471251659",
            "name": "No One Left Behind",
            "profileUrl": "https://www.every.org/nooneleft",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/glewmarsdxzs58idnj9t",
            "logoCloudinaryId": "faja_profile/glewmarsdxzs58idnj9t",
            "matchedTerms": []
        },
        {
            "description": "Providing relief, jobs, & community on the frontlines of conflict. To heal all that's tearing us apart. To end war.. We’re a coalition of peacemakers working together to unmake violence. We are first in with emergency aid on the frontlines of conflict and disaster, deeper than others are willing to go. We are last to leave, staying until we turn the corner from relief to development, investing in locals who create long-term impact.\nWe love anyway, even when we are scared. We show up, because presence can lead to love that can build \"The More Beautiful World Our Hearts Know Is Possible.\" Finally, we get out of the way, empowering others to solve their own problems.",
            "ein": "262450109",
            "name": "Preemptive Love Coalition",
            "profileUrl": "https://www.every.org/preemptivelove",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/rrzuheuskjmeoldvcu5v",
            "logoCloudinaryId": "profile_pics/rrzuheuskjmeoldvcu5v",
            "matchedTerms": []
        },
        {
            "description": "CAI is an international NGO promoting education & literacy, especially for girls, in remote areas of Pakistan, Afghanistan & Tajikistan.. Vision: To unlock the full potential of girls and women through education. When girls and women thrive, their families, communities, and nations prosper.  Educate a girl. Change the world.  Mission: To promote education and livelihood skills, especially for girls and women, in the remote regions of Afghanistan, Pakistan, and Tajikistan.",
            "ein": "510376237",
            "name": "Central Asia Institute",
            "profileUrl": "https://www.every.org/central-asia-institute",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/m7e9azwplnlfbdqwxhl3",
            "logoCloudinaryId": "faja_profile/m7e9azwplnlfbdqwxhl3",
            "matchedTerms": []
        },
        {
            "description": "Humanitarian organisation who has worked with millions of families in some of the poorest communities in Afghanistan since 1983.. Fiscally sponsored by Give2Asia. Every day in Afghanistan, men, women and children are driven from their homes and lives are destroyed because of conflict and poverty. It doesn’t have to be this way. Afghanaid is an international charity that works alongside Afghans in the most remote and marginalized regions of the country to build a peaceful and a thriving Afghanistan.\n \nOver forty years of conflict has seen lives and opportunities lost, infrastructure and livelihoods destroyed, and caused deep economic and ecological degradation. No country has suffered more or for so long.\n \nAfghanaid knows that having financial stability is one of the most effective ways to rebuild lives and support local people to work together harmoniously to reconstruct their communities. They work with men and women across the country, providing training in vital skills so that the",
            "name": "Afghanaid",
            "profileUrl": "https://www.every.org/afghanaid.afghanistan",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/rdkdywsdyxgmhgfro3cm",
            "logoCloudinaryId": "profile_pics/rdkdywsdyxgmhgfro3cm",
            "matchedTerms": []
        },
        {
            "description": "Refugee Education Center supports refugees in their journey to become fully participating members of the West Michigan community.. OUR HISTORY\n\nThe Refugee Education Center is a registered 501(c)(3) non-profit based in Grand Rapids, MI that exists to support agency support refugees in their journey to become fully participating members of the West Michigan community.. The education-centered organization was founded in 2006 by a passionate group of Somali Bantu refugees who, as an ethnic group in their native country, were persecuted and prohibited to receive formal education. Upon arrival to the United States, community leaders recognized the incredible new opportunity to receive education and participate in the community as equals. They organized and created what is now the Refugee Education Center with the vision of supporting refugee children in West Michigan as they began their new education in a foreign land. Since 2006, our programs and services have expanded to address addition",
            "ein": "061770896",
            "name": "The Refugee Education Center",
            "profileUrl": "https://www.every.org/refugeegr",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ajpxlkzq0ahlpzirlhz4",
            "logoCloudinaryId": "profile_pics/ajpxlkzq0ahlpzirlhz4",
            "matchedTerms": []
        }
    ],
    "animals": [
        {
            "description": "Lil BUB is a one of a kind space cat. Since landing on Earth, she's raised over $500,000 for homeless pets.. Lil BUB’s Big Fund exists to advocate for special needs companion animals and build a community that celebrates and fosters the human animal bond. With a focus on animals who are the most difficult to adopt, the most expensive to care for, and who are at a high risk of euthanasia. Lil BUB’s Big Fund provides grants to shelters nationwide and partners with shelters to create special needs foster program initiatives. We visit schools to promote kindness and inclusion. Through our work, we share BUB’s message of overcoming adversity and the knowledge that the things that make us different are worthy of being seen and appreciated.",
            "ein": "844229672",
            "name": "Lil BUB's Big Fund",
            "profileUrl": "https://www.every.org/lilbubsbigfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dsor2nxk97p87umlwhvt",
            "logoCloudinaryId": "profile_pics/dsor2nxk97p87umlwhvt",
            "matchedTerms": []
        },
        {
            "description": "Lil BUB is teaming up with Sycamore Land Trust, Power of Zero to help prevent bullying in schools, and Milo's Sanctuary for pets.. Lil BUB’s Better World Fundraiser raises money for four organizations very close to BUB’s heart by investing in our planet, our children, our pets, and our future.\n\nThe organizations we have chosen to support with this campaign are doing the work that BUB believes in: Sycamore Land Trust for land preservation, Power of Zero to prevent bullying in schools and online, Milo's Sanctuary for the care of homeless pets with special needs, and our own Lil BUB's Big FUND, whose mission is to bring these causes together.\n\nEvery individual donation will be matched up to $100, with a total campaign match of up to $50,000!",
            "name": "Lil BUB's Better World Fundraiser",
            "profileUrl": "https://www.every.org/bubsworld",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kzl3llfffdnhrb5bu8cx",
            "logoCloudinaryId": "profile_pics/kzl3llfffdnhrb5bu8cx",
            "matchedTerms": []
        },
        {
            "description": "International nonprofit ending the abuse of animals raised for food.. The mission of The Humane League, why we exist, is to end the abuse of animals raised for food. This sense of purpose drives every action in our unrelenting march forward for animals.",
            "ein": "043817491",
            "name": "The Humane League",
            "profileUrl": "https://www.every.org/thehumaneleague",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/s6cwebbnv283e86qwkfh",
            "logoCloudinaryId": "faja_profile/s6cwebbnv283e86qwkfh",
            "matchedTerms": []
        },
        {
            "description": "ACE is dedicated to finding and promoting the most effective ways to help animals.. Animal Charity Evaluators (ACE) is a 501(c)(3) nonprofit registered in the United States dedicated to finding and promoting the most effective ways to help animals. ACE aids compassionate donors, professionals, and volunteers in making informed decisions about how to help animals as effectively as possible. We strive to identify ways to alleviate suffering and improve the lives of animals on a wide scale, while continuously updating our recommendations based on new evidence. We oppose all systems of oppression and recognize that they are connected and mutually reinforcing.",
            "ein": "364684978",
            "name": "Animal Charity Evaluators",
            "profileUrl": "https://www.every.org/animalcharityevaluators",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/mzflr0p8z4ej7er7ytlk",
            "logoCloudinaryId": "faja_profile/mzflr0p8z4ej7er7ytlk",
            "matchedTerms": []
        },
        {
            "description": "Outreach and research in defense of animals.. Animal Ethics provides information and promote debate about issues in animal ethics, sentience, animal interests and speciesism.\n\nDetailed information on the data regarding the situation of nonhuman animals as well as on the arguments to defend animals is not always available, and we intend to provide it to all those who want to help them. In addition, we do outreach work ourselves aimed not at stopping particular ways in which animals are harmed (which other organizations are already addressing), but at achieving a shift in attitudes towards speciesism.\n\nOur work deals with the way nonhuman animals are considered in everyday life, as well as how they are considered in fields that affect human attitudes and activities that are relevant to animals. These include academia, scientific fields, and the law. We look at the way nonhuman animals are impacted by current human activities, and how they might be impacted by future planned or unplanned",
            "ein": "461062870",
            "name": "Animal Ethics",
            "profileUrl": "https://www.every.org/animal.ethics",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/asmzwtyq6wxob0caniyg",
            "logoCloudinaryId": "profile_pics/asmzwtyq6wxob0caniyg",
            "matchedTerms": []
        },
        {
            "description": "Exists to eliminate animal suffering-Hunger & Disease in Cow sanctuaries/Goshalas & to support rescued farm animal cohabitants.. Exists to eliminate animal suffering-Hunger & Disease in Cow sanctuaries/Goshalas & supporting rescued farm animal cohabitants living in these sanctuaries.",
            "ein": "861872047",
            "name": "Goshala-BJ & Animal Care",
            "profileUrl": "https://www.every.org/goshala-bj-animal-care",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/mia35nlsomywqkniw4zj",
            "logoCloudinaryId": "profile_pics/mia35nlsomywqkniw4zj",
            "matchedTerms": []
        },
        {
            "description": "We are a think tank dedicated to figuring out the best ways to make the world a better place.. Rethink Priorities is a research organization that conducts critical research to inform policymakers and major foundations about how to best help people and nonhuman animals in both the present and the long-term future.\n\nOur research spans everything from animal welfare to the threat of nuclear war. We explore neglected but promising areas to improve the world and try to further build the community of researchers working on understanding how to do this most effectively.",
            "ein": "843896318",
            "name": "Rethink Priorities",
            "profileUrl": "https://www.every.org/rethinkpriorities",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/i3iknd276i6cw1exfveu",
            "logoCloudinaryId": "profile_pics/i3iknd276i6cw1exfveu",
            "matchedTerms": []
        },
        {
            "description": "We want to make life better for wild animals.. We are dedicated to finding evidence-backed ways to improve the lives of animals in the wild.\n\nWe depend on individual donors to help us make life better for wild animals. To a small nonprofit working hard on a big problem, your support is more crucial now than ever!",
            "ein": "822281466",
            "name": "Wild Animal Initiative",
            "profileUrl": "https://www.every.org/wildanimalinitiative",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wzgsabl4bvjvfl6jezb1",
            "logoCloudinaryId": "profile_pics/wzgsabl4bvjvfl6jezb1",
            "matchedTerms": []
        },
        {
            "description": "Exists to end the greatest cause of suffering on the planet: the exploitation of animals for food.. Mercy For Animals exists to end the greatest cause of suffering on the planet: the exploitation of animals for food.",
            "ein": "542076145",
            "name": "Mercy For Animals",
            "profileUrl": "https://www.every.org/mercyforanimals",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/esxupaxwsjq5ifahgv00",
            "logoCloudinaryId": "faja_profile/esxupaxwsjq5ifahgv00",
            "matchedTerms": []
        }
    ],
    "athletics": [
        {
            "description": "Raising awareness of systemic racism and racial disparities in the United States through virtual fitness challenges. . beneFIT Fitness Challenges is a registered 501(c)(3) non-profit that raises awareness of systemic racism and racial disparities in the United States through fitness challenges. Many American citizens stand against racism, but do not know how to get involved. At beneFIT, challenge participants can promote social equality simply by moving their bodies. Also, many Americans are unaware of the deeply rooted issues that have perpetuated systems of control for people of color and other marginalized populations for centuries. beneFIT aims to educate others about social injustices by tying the amount of activity and the funds donated to statistics about social injustices that exist today.\n\nbeneFIT is focused on painting a picture of the broad, overarching ways in which systemic racism manifests in our modern society so includes challenges that highlight multiple aspects of ra",
            "ein": "863636179",
            "name": "beneFIT",
            "profileUrl": "https://www.every.org/benefitchallenges",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ls6f5rxpmig4vlwsrryt",
            "logoCloudinaryId": "profile_pics/ls6f5rxpmig4vlwsrryt",
            "matchedTerms": []
        },
        {
            "description": "Providing high quality athletic, academic and development programs to help youth reach their full potential..",
            "ein": "465745874",
            "name": "Foster Park Sports",
            "profileUrl": "https://www.every.org/foster-park-sports",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kvixh6odnb9h68gztxp7",
            "logoCloudinaryId": "profile_pics/kvixh6odnb9h68gztxp7",
            "matchedTerms": []
        },
        {
            "description": "Promoting the bicycle for everyday transportation.. To transform San Francisco’s streets and neighborhoods into safe, just, and livable places by promoting the bicycle for everyday transportation.",
            "ein": "205182730",
            "name": "San Francisco Bicycle Coalition",
            "profileUrl": "https://www.every.org/sfbike",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/xpgcb5w1ttxkcowciebk",
            "logoCloudinaryId": "faja_profile/xpgcb5w1ttxkcowciebk",
            "matchedTerms": []
        },
        {
            "description": "A holistic understanding of yoga to one and all !. Yoga Bharati is a non-profit, voluntary organization",
            "ein": "542104333",
            "name": "Yoga Bharati USA",
            "profileUrl": "https://www.every.org/yogabharati",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/opzkez8nlcjsu7ed2g85",
            "logoCloudinaryId": "faja_profile/opzkez8nlcjsu7ed2g85",
            "matchedTerms": []
        },
        {
            "description": "Changing the way youth experience the foster care system in America.. Together We Rise is a 501(c)3 non-profit organization comprised of motivated young adults and former foster youth. Our vision is to improve the lives of foster children in America, who often find themselves forgotten and neglected by the public.",
            "ein": "263043727",
            "name": "Together We Rise",
            "profileUrl": "https://www.every.org/together-we-rise",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/shyntrc1waa4ve5rcdby",
            "logoCloudinaryId": "faja_profile/shyntrc1waa4ve5rcdby",
            "matchedTerms": []
        },
        {
            "description": "Joyful anti-racist surf lessons for BIPOC . Color the Water began as a way to fight racism after the murder of George Floyd. We wanted to fight racism with joy, so we started to offer free surf lessons and media for BIPOC in the LA area. Now we are a diverse, inclusive, anti-racist safe space for hundreds of BIPOC surfers.",
            "ein": "853800480",
            "name": "Color The Water",
            "profileUrl": "https://www.every.org/color-the-water",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/lhkgz0nanlmv5cs1ong3",
            "logoCloudinaryId": "profile_pics/lhkgz0nanlmv5cs1ong3",
            "matchedTerms": []
        },
        {
            "description": "We inspire girls to be joyful, healthy, and confident using a fun, experience-based curriculum which creatively integrates running..",
            "ein": "710890558",
            "name": "Girls on the Run of the Bay Area",
            "profileUrl": "https://www.every.org/gotrbayarea",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/w037gkjhbpg4fa4nfc3i",
            "logoCloudinaryId": "faja_profile/w037gkjhbpg4fa4nfc3i",
            "matchedTerms": []
        },
        {
            "description": "Opening streets for Angelenos.. To encourage safe, vibrant public spaces, sustainable transportation and public health through a program of car-free street events.   Promover el espacio público seguro y animado, el transporte ecológico, y la salud pública por una programa de de acontecimientos de calles sin carros.",
            "ein": "273428380",
            "name": "CicLAvia",
            "profileUrl": "https://www.every.org/ciclavia",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/nukla1ozzirjfgun9u2z",
            "logoCloudinaryId": "faja_profile/nukla1ozzirjfgun9u2z",
            "matchedTerms": []
        },
        {
            "description": "TSYI Inc is focused on recreation, sports, leisure, or athletics. It is based in Stone Mtn, GA. Nonprofit status in 2015.. The Tommie Smith Youth Initiative is dedicated to nurturing the health, fitness, and educational development of youth, particularly marginalized children. Tommie believes that through the disciplined training required by track & field, athletics can serve as an effective vehicle for mentoring youth. Tommie Smith has traveled around the world providing technical assistance to communities engaged in uplifting young people, and he has motivated thousands of young people to embrace a healthy lifestyle.",
            "ein": "461353846",
            "name": "Tommie Smith Youth Initiative",
            "profileUrl": "https://www.every.org/tommie-smith-youth-initiative",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xpbezi6k08lt9mo5qdnf",
            "logoCloudinaryId": "profile_pics/xpbezi6k08lt9mo5qdnf",
            "matchedTerms": []
        },
        {
            "description": "SNG offers unique, year-round programs and classes for children and young adults with special needs and disabilities. . We are committed to strengthening the physical, mental, emotional, and social skills of our athletes and students through a variety of programs that promote a lifetime of achievements. SNG offers programs and classes in gymnastics, swimming, karate, cycling, fitness, cheer, life skills, dance, art, and music. Based in Texas, SNG reaches thousands of individuals annually throughout the United States and internationally.",
            "ein": "270697229",
            "name": "Special Needs Gymnastics (SNG)",
            "profileUrl": "https://www.every.org/ilovesng",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/wrf4hs8gnqzka6rgctb7",
            "logoCloudinaryId": "faja_profile/wrf4hs8gnqzka6rgctb7",
            "matchedTerms": []
        }
    ],
    "autism": [
        {
            "description": "Pioneers research, outreach & cooperative efforts with other organizations worldwide. Our mission is to support the health and well-being of people affected by autism through innovative, impactful research and education.\nCauses of ASD remain unclear but recent scientific advances challenge the traditional view of autism as an untreatable disease—as one that is “genetically hard-wired.” These developments support the position that Autism Research Institute (ARI) has always maintained: Autism Is Treatable. Established in 1967 by psychologist and renowned father of modern autism research Dr. Bernard Rimland, ARI continues to pioneer in research, outreach, and cooperative efforts with other organizations worldwide. ARI advocates for the rights of people with ASD, and operates without funding from special-interest groups.",
            "ein": "952548452",
            "name": "Autism Research Institute",
            "profileUrl": "https://www.every.org/autismresearch",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/q5evnz7g5vvoaos3mthy",
            "logoCloudinaryId": "profile_pics/q5evnz7g5vvoaos3mthy",
            "matchedTerms": []
        },
        {
            "description": "Committed to educating and assisting African American families with Autistic children. Autism affects children of every race, ethnic group, and socioeconomic status.. The Color of Autism Foundation is committed to raising public awareness about autism spectrum disorders and devoted to empowering families and lessening their isolation. We are dedicated to ensuring that all people with autism receive appropriate, effective services to maximize their growth potential and to enhance the general public's awareness of autism.",
            "ein": "264664321",
            "name": "The Color of Autism Foundation",
            "profileUrl": "https://www.every.org/thecolorofautism",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/uhruvhbzetm6fknezvev",
            "logoCloudinaryId": "faja_profile/uhruvhbzetm6fknezvev",
            "matchedTerms": []
        },
        {
            "description": "We empower & promote the health & independence of people with special challenges through the therapeutic power of horses.. Horses of Hope / Caballos de Esperanza Inc., is a therapeutic riding center, located in beautiful Isabela, Puerto Rico. We are both a 501c3 nonprofit and a Puerto Rico certified charity (EIN # 66-0907166; PR caso # 2019-1101.01-6.\n\nOur mission is to engage the therapeutic power of our horses to nurture the special abilities of people with disabilities, help heal those suffering from trauma, and empower our clients to improve the quality of their lives, their families' lives, and their community. We provide life-changing therapeutic riding, equine education, and equine-assisted activities and have programs suitable for children (4 years and up) to adults of all ages. \n\nOur therapeutic riding instructors are certified through the Professional Association of Therapeutic Horsemanship, International (PATH, Int'l). We follow their standards of safety, which are the high",
            "ein": "660907166",
            "name": "Horses Of Hope-Caballos De Esperanza Inc",
            "profileUrl": "https://www.every.org/horses-of-hope",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/hrwc1jizu3ntyfa5gqru",
            "logoCloudinaryId": "profile_pics/hrwc1jizu3ntyfa5gqru",
            "matchedTerms": []
        },
        {
            "description": "Answering the dreams of children ages 3-18 who are chronically ill, physically challenged and/or abused throughout US since 1976.. MISSION STATEMENT\nSunshine Foundation answers the dreams of children, ages three through eighteen, who have severe or profound physical/developmental/intellectual challenges or trauma from physical/sexual abuse, and whose families cannot fulfill their requests due to financial strain that the child's illness may cause. Sunshine Foundation answers dreams to children from all 50 states and Puerto Rico with life-long chronic conditions; ones that are turned away from the other national wish granting organizations that require a life-threatening or critical diagnosis.\n\nHISTORY\nIn the 1960’s and 70's, Philadelphia police officer, Bill Sample, was assigned on protective duty to St. Christopher’s Hospital for Children. He encountered critically ill and chronically ill children, and saw firsthand how these children’s families were burdened, not only by mounting me",
            "ein": "232044056",
            "name": "Sunshine Foundation",
            "profileUrl": "https://www.every.org/sunshinefoundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ryuwlopjul7fo88dy7n6",
            "logoCloudinaryId": "profile_pics/ryuwlopjul7fo88dy7n6",
            "matchedTerms": []
        },
        {
            "description": "We support families touched by autism and fund autism research - autismsciencefoundation.org. Our organization adheres to rigorous scientific standards and values. We believe that outstanding research is the greatest gift we can offer our families. Every research dollar needs to count.",
            "ein": "264522309",
            "name": "Autism Science Foundation",
            "profileUrl": "https://www.every.org/autism-science-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pwe94ri8uwgoim4bjbyu",
            "logoCloudinaryId": "faja_profile/pwe94ri8uwgoim4bjbyu",
            "matchedTerms": []
        },
        {
            "description": "Theatre starring people with intellectual disabilities and autism. Actors gain confidence, social skills, friends.. Mission: Through collaborative performance and lifelong learning opportunities, people with intellectual and developmental disabilities gain the skills and confidence to engage with the world.\n\nArtStream fuels students' imagination, creativity, and focus. We offer over 850 classes and workshops each year for 1,617 participants, six Theatre Companies totaling 90 participants and four Cabaret Companies totaling 30-40 participants, all of whom create and perform original theater works.\n\nWHY ARTSTREAM?\nPeople with Intellectual and Developmental Disabilities - including Autism - frequently face isolation or marginalization, and are excluded from activities and spaces where community, friendships, and connections are made. Creative opportunities are even fewer and farther between. In ArtStream’s drama and performing arts classes, workshops, and theatre companies, participants",
            "ein": "371516235",
            "name": "ArtStream, Inc.",
            "profileUrl": "https://www.every.org/art-stream",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/xc9a93dyflxqkonurmis",
            "logoCloudinaryId": "faja_profile/xc9a93dyflxqkonurmis",
            "matchedTerms": []
        },
        {
            "description": "Committed to supporting autistic individuals to achieve their maximum potential, while building connections for a happy life. Optimal Rhythms uses our unique neurologic approach to provide a therapeutic K-12 day school, ACCESS Academy; our A2A K-12 and adult virtual education programs; and an innovative Summer \"CAN-Do\" Camp for student with complex communication, motor, and sensory needs. We challenge communities to #rethinkautism by providing valuable training to equip parents and professionals to best support the sensory and communication needs of nonspeaking individuals.  Our Rethinking Autism Programs bring crucial training and resources to parents/caregivers, teachers, therapists, medical professionals and first responders.  We help those who care for nonspeaking children and adults to recognize their true potential, provide effective supports and accommodations, and afford them the human rights we all enjoy. Individuals who gain access to our programs experience acceptance, hope",
            "ein": "463704955",
            "name": "Optimal Rhythms / Access Academy",
            "profileUrl": "https://www.every.org/optimalaccess",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/cd0s4hpvrldgwrnlhxzz",
            "logoCloudinaryId": "profile_pics/cd0s4hpvrldgwrnlhxzz",
            "matchedTerms": []
        },
        {
            "description": "Americas Scholarship Konnection Inc is a national 501c3 focused on equality in education. It  received nonprofit status in 2016.. Americas Scholarship Konnection envisions a system which enables equal educational success and opportunity.\n\nWith the conversation in our country about inequality, here at “ASK” we are working to make things better.  We literally function to level the playing field for children starting at kindergarten to make sure that every family can send their child to the school of their choice, one student at a time. \nWe are passionate about this, and it reflects in everything we do. \n\nASK is moving the needle across the country with measurable results. We strive to make opportunities that facilitate social change, because we believe this is an incredibly worthy endeavor. \n\nASK serves underprivileged families, disabled students, students that have been displaced to foster care or any American family that wants to see their child succeed in a private school. \nWe facili",
            "ein": "811220819",
            "name": "Americas Scholarship Konnection Inc",
            "profileUrl": "https://www.every.org/americas-scholarship-konnection-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/pe84pbtdjazevm9uvdwt",
            "logoCloudinaryId": "profile_pics/pe84pbtdjazevm9uvdwt",
            "matchedTerms": []
        },
        {
            "description": "E N C Inc is a 501c3 nonprofit organization since 2019, based in Marsfield, WI focused on older adults and adults with autism.. Adults with autism need society to understand what autism is for each individual.  The education system, in much of the US, has gained a great deal of expertise in meeting individual needs and reliably creating a environment for individuals to be successful.  Unfortunately after high school there is a cliff rather than a bridge to more productive opportunities.\n\nOur older adults in America are very often isolated by circumstances of where they live and how their lives have changed.  Children have grown up and moved away.  The social activities that the children obligated them to attend are gone so many have no social contact for weeks.  Isolation leads to boredom, loneliness and depression.  Loneliness has been shown to be as hard on health as 15 cigarettes a day.  \n\nThe Pandemic has taught us how all of us NEED social engagement.   It is not a luxury it is a",
            "ein": "832031083",
            "name": "E N C Inc",
            "profileUrl": "https://www.every.org/e-n-c-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/h71mfgf67aye6jpsqai6",
            "logoCloudinaryId": "profile_pics/h71mfgf67aye6jpsqai6",
            "matchedTerms": []
        },
        {
            "description": "On a mission to provide social, vocational and residential opportunities for adults with developmental disabilities.. “Looking forward, we are gaining momentum with what we can offer. We know the needs will continue because this problem is not going away. We know mentally/physically our members are healthier when they are socialized, feel good about themselves, working and that impacts their entire family. That has always been our True North since our founding, and no matter the growth or needs that increase, that will remain our focus for the future.”\n\n— Cheri Weaver, Executive Director",
            "ein": "201141382",
            "name": "Wings Special Needs Adult Community",
            "profileUrl": "https://www.every.org/wings-special-needs-adult-community",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/mt33z2vywvhgmh4yd3bt",
            "logoCloudinaryId": "profile_pics/mt33z2vywvhgmh4yd3bt",
            "matchedTerms": []
        }
    ],
    "black-led": [
        {
            "description": "EJI is committed to ending mass incarceration in the US and challenging racial and economic injustice.. Founded in 1989 by Bryan Stevenson, a widely acclaimed public interest lawyer and bestselling author of Just Mercy, EJI is a private, 501(c)(3) nonprofit organization that provides legal representation to people who have been illegally convicted, unfairly sentenced, or abused in state jails and prisons. We challenge the death penalty and excessive punishment and we provide re-entry assistance to formerly incarcerated people.\n\nEJI works with communities that have been marginalized by poverty and discouraged by unequal treatment. We are committed to changing the narrative about race in America. EJI produces groundbreaking reports, an award-winning wall calendar, and short films that explore our nation’s history of racial injustice, and we recently launched an ambitious national effort to create new spaces, markers, and memorials that address the legacy of slavery, lynching, and racial",
            "ein": "631135091",
            "name": "Equal Justice Initiative",
            "profileUrl": "https://www.every.org/eji",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/eji_kdsj1q",
            "logoCloudinaryId": "faja_profile/eji_kdsj1q",
            "matchedTerms": []
        },
        {
            "description": "Hoop For All is a 501(c)3 nonprofit that uses sports to create health awareness and financially aid patients during treatment.. Our five health focuses are cancer, cardiovascular disease, diabetes, mental health, and HIV/aids. We create awareness by executing sporting events that provide resources on prevention, diagnosis, and treatment. Our events also serve as a platform to financially aid affected patients during the treatment and recovery process. In 2018, we launched the Hoop For All Ambassador Program to train and mentor students interested in careers within the sports, health, and entertainment industry.",
            "ein": "812658409",
            "name": "Hoop For All Foundation",
            "profileUrl": "https://www.every.org/hoopforall",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/b8ua3o4lag20cs6phnpa",
            "logoCloudinaryId": "profile_pics/b8ua3o4lag20cs6phnpa",
            "matchedTerms": []
        },
        {
            "description": "Empowering young women of color ages 7-17 to embrace the current tech marketplace as builders + creators.. Black Girls CODE is devoted to showing the world that black girls can code, and do so much more. By reaching out to the community through workshops and after school programs, Black Girls CODE introduces computer coding lessons to young girls from underrepresented communities in programming languages such as Scratch or Ruby on Rails. Black Girls CODE has set out to prove to the world that girls of every color have the skills to become the programmers of tomorrow. By promoting classes and programs we hope to grow the number of women of color working in technology and give underprivileged girls a chance to become the masters of their technological worlds. Black Girls CODE's ultimate goal is to provide African-American youth with the skills to occupy some of the 1.4 million computing job openings expected to be available in the U.S. by 2020, and to train 1 million girls by 2040.",
            "ein": "454930539",
            "name": "Black Girls CODE",
            "profileUrl": "https://www.every.org/blackgirlscode",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_cover/bgc_i9r95m",
            "logoCloudinaryId": "faja_cover/bgc_i9r95m",
            "matchedTerms": []
        },
        {
            "description": "A virtual non-profit organization & antiracist education brand that promotes justice for all.  . 540 provides an online hub for accessible education that promotes justice for all. We create a cultural shift in perspectives and practice through learning rooted in social justice and anti-racism.",
            "ein": "842870050",
            "name": "540WMain",
            "profileUrl": "https://www.every.org/540wmain",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zlp47evyyinbr4faz3jd",
            "logoCloudinaryId": "profile_pics/zlp47evyyinbr4faz3jd",
            "matchedTerms": []
        },
        {
            "description": "We develop public safety solutions for the District of Columbia that are evidence-driven, community-rooted, and racially just.. DC Justice Lab is a team of law and policy experts researching, organizing, and advocating for large-scale changes to the District’s criminal legal system. \n\nDC Justice Lab envisions a District that:\n- Treats every person as an essential part of our community and no longer subjugates, dehumanizes, or jettisons people who have broken the law.\n- Recognizes that it has historically underserved and overpoliced poor people and Black people, creating and subjugating an undercaste that is system-involved.\n- Takes dramatic measures to rectify and reverse the harm it inflicted.\n- Constantly reexamines its rules and practices to ensure they are calibrated to make us collectively safer, freer, and equal. \n- Ends its reliance on police, prosecutors, and prisons, in favor of solutions that maximize safety and freedom for all.\n- Ensures its criminal legal system cannot be",
            "ein": "843479025",
            "name": "DC Justice Lab",
            "profileUrl": "https://www.every.org/dcjusticelab",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ym8o1ybhgjudrdunez27",
            "logoCloudinaryId": "profile_pics/ym8o1ybhgjudrdunez27",
            "matchedTerms": []
        },
        {
            "description": "Indiana-based movement whose mission is to elevate citizens’ voices and foster inclusive, equitable political participation. Count US IN is an Indiana-based movement whose mission is to elevate citizens’ voices and foster inclusive, equitable political participation by encouraging diverse voter turnout, educating citizens on voting rights and protections, combating voter suppression, and cultivating partnerships to create political equity. We Empower and offer tools to increase voter turnout and political participation, especially of minorities and marginalized communities.",
            "ein": "850941154",
            "name": "Count US IN",
            "profileUrl": "https://www.every.org/countusindiana",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ojjonkaqz3cqmr5gyu4x",
            "logoCloudinaryId": "profile_pics/ojjonkaqz3cqmr5gyu4x",
            "matchedTerms": []
        },
        {
            "description": "America’s premier legal organization fighting for racial justice through litigation, advocacy, and public education.. The NAACP Legal Defense and Educational Fund, Inc. is America's premier legal organization fighting for racial justice. Through litigation, advocacy, and public education, LDF seeks structural changes to expand democracy, eliminate disparities, and achieve racial justice in a society that fulfills the promise of equality for all Americans. LDF also defends the gains and protections won over the past 70 years of civil rights struggle and works to improve the quality and diversity of judicial and executive appointments.",
            "ein": "131655255",
            "name": "NAACP Legal Defense Fund",
            "profileUrl": "https://www.every.org/naacp-ldf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kop6pinsnnu57x6mdz71",
            "logoCloudinaryId": "profile_pics/kop6pinsnnu57x6mdz71",
            "matchedTerms": []
        },
        {
            "description": "Trains and mentors black male youth in technology creation, entrepreneurship, and leadership skills.. The Hidden Genius Project trains and mentors black male youth in technology creation, entrepreneurship, and leadership skills to transform their lives and communities.",
            "ein": "460689949",
            "name": "The Hidden Genius Project",
            "profileUrl": "https://www.every.org/hiddengeniusproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/w7mrqwwgijaqpvfpcfks",
            "logoCloudinaryId": "faja_profile/w7mrqwwgijaqpvfpcfks",
            "matchedTerms": []
        },
        {
            "description": "The largest health movement for Black women.. GirlTrek, the largest public health nonprofit for African-American women and girls in the United States. With nearly 100,000 neighborhood walkers, GirlTrek encourages women to use walking as a practical first step to inspire healthy living, families, and communities. As women organize walking teams, they mobilize community members to support monthly advocacy efforts and lead a civil rights-inspired health movement.\n\nBeyond walking, GirlTrek’s active members support local and national policy to increase physical activity through walking, improve access to safe places to walk, protect and reclaim green spaces, and improve the walkability and built environments of 50 high-need communities across the United States.\n\nWith Partnership for a Healthier America, The Centers for Disease Control, Stanford Prevention Research Center, The American Council on Exercise, Safe Routes to School National Partnership, and The Sierra Club, GirlTrek has develop",
            "ein": "061811886",
            "name": "GirlTrek: Healthy Black Women and Girls",
            "profileUrl": "https://www.every.org/girltrek",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/m733uyhzdyvslyfsaqcs",
            "logoCloudinaryId": "profile_pics/m733uyhzdyvslyfsaqcs",
            "matchedTerms": []
        },
        {
            "description": "Fighting for racial justice through litigation, advocacy, and public education. Est. 1940.. The mission of the National Association for the Advancement of Colored People is to ensure the political, educational, social, and economic equality of rights of all persons and to eliminate racial hatred and racial discrimination.",
            "ein": "131084135",
            "name": "NAACP Empowerment Programs",
            "profileUrl": "https://www.every.org/naacp",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/di08iw2kxuvuej8rvqaw",
            "logoCloudinaryId": "faja_profile/di08iw2kxuvuej8rvqaw",
            "matchedTerms": []
        }
    ],
    "buddhism": [
        {
            "description": "To provide an environment for contact with Tibetan Buddhism, and to promote awareness about Tibetan and Himalayan culture.  . Chokhor Gepel Ling is a Tibetan Buddhist Center founded by Thupten Rinpoche following the inspiration and guidance of His Holiness, the 14th Dalai Lama.\n\nOur mission is to provide an environment for contact with Tibetan Buddhism \nand to promote awareness about Tibetan and Himalayan culture.  \n\nWhat our name means: Place of Flourishing of the Buddha's Teachings\n\nChokhor- \"dharma wheel\", symbol of the Buddha's teachings \nGepel- flourishing virtue\nLing- place",
            "ein": "711011711",
            "name": "Chokhor Gepel Ling",
            "profileUrl": "https://www.every.org/chokhor-gepel-ling",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/qzan98xpkz33awexiogv",
            "logoCloudinaryId": "profile_pics/qzan98xpkz33awexiogv",
            "matchedTerms": []
        },
        {
            "description": "Reducing global suffering and promoting long-term human flourishing through an in-depth understanding of emergent phenomena. Emergence Benefactors is an incorporated nonprofit 501(c)(3) tax-exempt charity organization supporting the science of emergence.\n\nEmergence: spiritual, mystical, magical, energetic, and related experiences and effects.\n\nWe support the practical incorporation of that scientific knowledge into medical, clinical, therapeutic, and public health practices at a global scale to promote better outcomes for people experiencing emergent phenomena.",
            "ein": "862052903",
            "name": "Emergence Benefactors",
            "profileUrl": "https://www.every.org/ebenefactors",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dm3ohzsk6nqdykl6o3xm",
            "logoCloudinaryId": "profile_pics/dm3ohzsk6nqdykl6o3xm",
            "matchedTerms": []
        },
        {
            "description": "IMS is a spiritual refuge for all who seek freedom of mind and heart. . IMS is a spiritual refuge for all who seek freedom of mind and heart. We offer meditation retreats and online programs rooted in the Early Buddhist teachings of ethics, concentration and wisdom. These practices help develop awareness and compassion in ourselves, giving rise to greater peace and happiness in the world.",
            "ein": "510152810",
            "name": "Insight Meditation Society",
            "profileUrl": "https://www.every.org/dharma",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zhwlu7tjkqaciwp3tn8q",
            "logoCloudinaryId": "faja_profile/zhwlu7tjkqaciwp3tn8q",
            "matchedTerms": []
        },
        {
            "description": "The Thich Nhat Hanh Foundation works to continue the mindful teachings and loving practice of Zen master Thich Nhat Hanh (Thay).. The Thich Nhat Hanh Foundation acts as a conduit between our mindful community (Sangha) and the continuation of Thay’s mindful teachings and loving practice. We work mindfully to continue the work of Thich Nhat Hanh, support our practice centers around the world, and engage in Sangha building in order to foster peace and transform suffering in all people, animals, plants and our planet.  The Thich Nhat Hanh Foundation is a division of the Unified Buddhist Church, Inc. (UBC). The Unified Buddhist Church, Inc. is a U.S. nonprofit, tax-exempt charitable organization founded by Zen Master Thich Nhat Hanh under Section 501(c)(3) of the Internal Revenue Code. Donations are tax-deductible as allowed by law.",
            "ein": "030356845",
            "name": "Thich Nhat Hanh Foundation",
            "profileUrl": "https://www.every.org/thich-nhat-hanh-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kiz14oxloxsdb2xawiaj",
            "logoCloudinaryId": "faja_profile/kiz14oxloxsdb2xawiaj",
            "matchedTerms": []
        },
        {
            "description": "We provide in-depth, highly relational mindfulness education for youth and the parents and professionals who support them.. Young people deserve our best attention and the greatest support we can offer, especially when it comes to teaching them the tools and resources they need to nurture their minds, spirit, and bodies.\n\nMindfulness is our passion. iBme formed from the foundation of a 30-year lineage of teen mindfulness which began with retreats offered in Barre, Massachusetts in 1989. It is from this foundation that Jessica Morey, co-founder and current lead teacher of iBme who attended her first retreat at age 14, was inspired to launch a non-profit dedicated to teaching mindfulness to young people. Since its founding in 2010, iBme has grown from a nonprofit based in Washington, DC to an international organization that holds retreats across the US, Canada, the United Kingdom, and online — all offered with no teen ever turned away for lack of funds. With its core mission of teen min",
            "ein": "273029390",
            "name": "Inward Bound Mindfulness Education (iBme)",
            "profileUrl": "https://www.every.org/ibme",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/fxpqwvrimy3n2wzfp8c3",
            "logoCloudinaryId": "profile_pics/fxpqwvrimy3n2wzfp8c3",
            "matchedTerms": []
        },
        {
            "description": "The Mount Adams Thien Buddhist Temple is a small country temple with both Northern & Southern Chan (Thien) traditions.. The Mount Adams Zen Buddhist Temple is a small country temple in the Thien tradition of Vietnam and the Chan tradition of China.\n\nOur mission is to work towards the cessation of suffering by providing Meditation and Dharma (the teachings) education and support for our community.",
            "ein": "300468937",
            "name": "Mount Adams Buddhist Temple",
            "profileUrl": "https://www.every.org/mount-adams-zen-buddhist-temple",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ihxttf46gow248lo0oi9",
            "logoCloudinaryId": "profile_pics/ihxttf46gow248lo0oi9",
            "matchedTerms": []
        },
        {
            "description": "Dharma Voices for Animals is the only international Buddhist animal advocacy organization in the world.. Dharma Voices for Animals (DVA) is a nonprofit organization committed both to practicing the teachings of the Buddha (the Dharma) and to speaking out when the actions of those in Dharma communities and the policies of Dharma centers lead to animal suffering. We want to be the voice of the animals who cannot speak our language. We speak out about the harm we cause other sentient beings when we eat them, use their body parts as clothing, or use products that are tested on them. While DVA recognizes the challenges of living in a complex, modern society, we wish to promote the choices that provide the greatest reduction of animal suffering.",
            "ein": "455372693",
            "name": "Dharma Voices For Animals",
            "profileUrl": "https://www.every.org/dva",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/pj9pcfe9dx6mjb9l8net",
            "logoCloudinaryId": "profile_pics/pj9pcfe9dx6mjb9l8net",
            "matchedTerms": []
        },
        {
            "description": "A modern take on ancient Buddhist wisdom..",
            "ein": "812755676",
            "name": "Secular Buddhism",
            "profileUrl": "https://www.every.org/getmindful",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/p2tzninaicpbn0wykzow",
            "logoCloudinaryId": "faja_profile/p2tzninaicpbn0wykzow",
            "matchedTerms": []
        },
        {
            "description": "Studio Zero develops programming and resources on the subjects of meditation, philosophy, theology and the contemplative life.. In the past ten years we have helped hundreds of people to find greater serenity in their lives through meditation practice.\n\nWe have sponsored over 100 days of residential retreat practice.\n\nA surprisingly large part of our impact has been among seniors, who have benefited from our gentle techniques.\n\nMany have found our services to be supportive of longterm recovery from addiction.\n\nOur non-sectarian approach to spiritual development has been beneficial to people both inside and outside of traditional religious communities.",
            "ein": "203922281",
            "name": "Studio Zero Inc",
            "profileUrl": "https://www.every.org/studio-zero",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/vz5w32en9dihocwovfqf",
            "logoCloudinaryId": "profile_pics/vz5w32en9dihocwovfqf",
            "matchedTerms": []
        },
        {
            "description": "Exchange program for visiting monastic scholars to help modernize education at Tibetan Buddhist institutions in India.. Since 2011, Kamalashila Initiative (KI) has offered its Visiting Scholars Program as a humble contribution to His Holiness, the 14th Dalai Lama's vision of modernizing education at Tibetan Buddhist institutions in India. Here, Buddhist scholars from KI partner institutions in India are invited to participate in a 10-week, intensive English as a Second Language program at the University of California, Irvine. \n\nWhile Visiting Scholars build their academic and linguistic capacity, they also engage in exciting cultural exchange activities in partnership with the local community. In doing so, KI leverages the wisdom of its Visiting Scholars, gained through a lifetime's dedication to Buddhist practice, to help increase the wellbeing of the local community through meditation and the cultivation of altruism.",
            "name": "Kamalashila Initiative",
            "profileUrl": "https://www.every.org/kamalashila-initiative",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/sjbsocbqsdprtez8jutv",
            "logoCloudinaryId": "profile_pics/sjbsocbqsdprtez8jutv",
            "matchedTerms": []
        }
    ],
    "cancer": [
        {
            "description": "Hoop For All is a 501(c)3 nonprofit that uses sports to create health awareness and financially aid patients during treatment.. Our five health focuses are cancer, cardiovascular disease, diabetes, mental health, and HIV/aids. We create awareness by executing sporting events that provide resources on prevention, diagnosis, and treatment. Our events also serve as a platform to financially aid affected patients during the treatment and recovery process. In 2018, we launched the Hoop For All Ambassador Program to train and mentor students interested in careers within the sports, health, and entertainment industry.",
            "ein": "812658409",
            "name": "Hoop For All Foundation",
            "profileUrl": "https://www.every.org/hoopforall",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/b8ua3o4lag20cs6phnpa",
            "logoCloudinaryId": "profile_pics/b8ua3o4lag20cs6phnpa",
            "matchedTerms": []
        },
        {
            "description": "For cancer information, call 1-800-227-2345 anytime, day or night, or visit www.cancer.org. The American Cancer Society is leading the fight for a world without cancer. \n\nWe’re finding cures and doing so much more. \n\nThe ACS supports patients with free lodging near hospitals, free rides to treatment, and our live 24/7 cancer helpline.  \n\nWe’re providing information, tools and services to help people cope with the challenges and questions that come with a cancer diagnosis.  \n\nWe’re making breakthroughs in research and urging lawmakers to improve access to care.\n\nWhen it comes to cancer, we are the only organization attacking from every angle.",
            "ein": "131788491",
            "name": "American Cancer Society",
            "profileUrl": "https://www.every.org/acs",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/cg6wfdetsllwwldawpxh",
            "logoCloudinaryId": "profile_pics/cg6wfdetsllwwldawpxh",
            "matchedTerms": []
        },
        {
            "description": "Finding cures. Saving children.. Families never receive a bill from St. Jude for treatment, travel, housing or food – because all a family should worry about is helping their child live. Treatments invented at St. Jude have helped push the overall childhood cancer survival rate from 20% to more than 80% since it opened more than 50 years ago. St. Jude is working to drive the overall survival rate for childhood cancer to 90%, and we won’t stop until no child dies from cancer. St. Jude freely shares the discoveries we make, and every child saved at St. Jude means doctors and scientists worldwide can use that knowledge to save thousands more children.",
            "ein": "620646012",
            "name": "St. Jude Children's Research Hospital",
            "profileUrl": "https://www.every.org/stjude",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/q3rr2wha9r7lwdwhpxn1",
            "logoCloudinaryId": "faja_profile/q3rr2wha9r7lwdwhpxn1",
            "matchedTerms": []
        },
        {
            "description": "Our mission is to improve the lives of children diagnosed with cancer in Armenia.. City of Smile, USA's mission is to improve the lives of children diagnosed with cancer in Armenia by raising awareness and funds to provide life-saving treatments as well as emotional, nutritional and psychological support for affected children and their families.",
            "ein": "833226265",
            "name": "City Of Smile - USA",
            "profileUrl": "https://www.every.org/cityofsmile",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ewiaamxje0lnh5iudwpb",
            "logoCloudinaryId": "profile_pics/ewiaamxje0lnh5iudwpb",
            "matchedTerms": []
        },
        {
            "description": "We empower patients of color with the knowledge and trust to pursue clinical trials that can save or extend their lives.\n.",
            "name": "Karen's Club",
            "profileUrl": "https://www.every.org/karensclub",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/rykiguqpbftxzqzk8dp2",
            "logoCloudinaryId": "profile_pics/rykiguqpbftxzqzk8dp2",
            "matchedTerms": []
        },
        {
            "description": "Since 1949, LLS has pioneered groundbreaking cancer research. Beating Cancer is in our Blood.. The Leukemia & Lymphoma Society is at the forefront of the fight to cure cancer. We are the largest nonprofit dedicated to creating a world without blood cancers. Since 1949, we’ve invested nearly $1.3 billion in groundbreaking research, pioneering many of today’s most innovative approaches.\n\nCancer is a heck of an opponent.\n\nIt's a bully. But we aren't afraid of a fight.\nIt's elusive. But our focus never fades.\nIt's deadly. But we are known cancer killers.\n\nSince 1949, we've pioneered groundbreaking research that leads us to believe we will find the cures for cancer in our blood.\n\nWe were born to defeat this opponent.\nWe are The Leukemia & Lymphoma Society.",
            "ein": "135644916",
            "name": "The Leukemia & Lymphoma Society",
            "profileUrl": "https://www.every.org/lls",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kyzk8hna8cld3jmuatcd",
            "logoCloudinaryId": "profile_pics/kyzk8hna8cld3jmuatcd",
            "matchedTerms": []
        },
        {
            "description": "The mission of Fred Hutchinson Cancer Research Center is the elimination of cancer and related diseases as causes of human suffering and death.. Our interdisciplinary teams of world-renowned scientists and humanitarians work together to prevent, diagnose and treat cancer, HIV/AIDS and other diseases.",
            "ein": "237156071",
            "name": "Fred Hutch",
            "profileUrl": "https://www.every.org/fredhutch",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/wm8gr5igyzsyrsnvlcnz",
            "logoCloudinaryId": "faja_profile/wm8gr5igyzsyrsnvlcnz",
            "matchedTerms": []
        },
        {
            "description": "Our vision is to create a world in which all patients with pancreatic cancer will thrive.. No one should have to face pancreatic cancer alone.\n\nOur mission is to take bold action to improve the lives of everyone impacted by pancreatic cancer by advancing scientific research, sharing knowledge and advocating for patients:\n\n• We fund transformative research — everything from early detection to innovative new treatment approaches.\n• We provide information about treatment options, diet and nutrition, support resources and more, and we can answer all your questions along the way.\n• We work with thousands of grassroots advocates to urge Congress to increase federal research funding for pancreatic cancer, and we get results.",
            "ein": "330841281",
            "name": "Pancreatic Cancer Action Network",
            "profileUrl": "https://www.every.org/pancan",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/v3izwh8abq4m9bnhjqx0",
            "logoCloudinaryId": "faja_profile/v3izwh8abq4m9bnhjqx0",
            "matchedTerms": []
        },
        {
            "description": "40% of Americans are exposed to secondhand smoke. American Nonsmokers Rights Foundation (ANRF) saves lives from secondhand smoke.. ANRF is a 501(c)(3) educational nonprofit organization, which creates comprehensive programs to prevent the harmful effects of secondhand smoke and smoking among youth and adults. The organization has more than 35 years experience promoting prevention and education about smoking, secondhand smoke, and exposing tobacco industry interference with public health policies. Our goals include educating the public about the health effects of secondhand smoke and the benefits of smokefree environments. Ultimately, our efforts are intended to create a smokefree generation in America that rejects tobacco use and is savvy to tobacco industry tactics. Our sister organization Americans for Nonsmokers' Rights (ANR) is a 501(c)(4) and is the leading lobbying organization dedicated to nonsmokers' rights, working to close the gaps in smokefree protections in thousands of co",
            "ein": "942922136",
            "name": "American Nonsmokers' Rights Foundation",
            "profileUrl": "https://www.every.org/no-smoke",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/cqefx8icwdqdjpb6bjon",
            "logoCloudinaryId": "profile_pics/cqefx8icwdqdjpb6bjon",
            "matchedTerms": []
        },
        {
            "description": "SCCA brings together the leading research teams and cancer specialists of Fred Hutch, Seattle Children's, and UW Medicine.. Seattle Cancer Care Alliance (SCCA) represents a union of patients and caregivers, physicians and researchers, care and cures in the pursuit of better, longer, richer lives for our patients.\n\nAbove all, we exist to move patients forward, past boundaries and toward hope, beyond fear and closer to discovery. SCCA is the intersection of compassion and hard science. Where a real difference can be made today and true progress happens tomorrow. This uniquely bold and inventive approach truly sets us apart.\n\nWe treat care differently. And because of that, we see patients differently too. Our care combines powerful science with devoted collaboration, where boundary-pushing discovery happens — care and science working together.\n\nIt is our fundamental belief that working in partnership with our patients is essential to who we are today and in the future.",
            "ein": "911935159",
            "name": "Seattle Cancer Care Alliance",
            "profileUrl": "https://www.every.org/seattlecca",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ckwerwn3dkq74ksj4fvo",
            "logoCloudinaryId": "profile_pics/ckwerwn3dkq74ksj4fvo",
            "matchedTerms": []
        }
    ],
    "cats": [
        {
            "description": "Lil BUB is a one of a kind space cat. Since landing on Earth, she's raised over $500,000 for homeless pets.. Lil BUB’s Big Fund exists to advocate for special needs companion animals and build a community that celebrates and fosters the human animal bond. With a focus on animals who are the most difficult to adopt, the most expensive to care for, and who are at a high risk of euthanasia. Lil BUB’s Big Fund provides grants to shelters nationwide and partners with shelters to create special needs foster program initiatives. We visit schools to promote kindness and inclusion. Through our work, we share BUB’s message of overcoming adversity and the knowledge that the things that make us different are worthy of being seen and appreciated.",
            "ein": "844229672",
            "name": "Lil BUB's Big Fund",
            "profileUrl": "https://www.every.org/lilbubsbigfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dsor2nxk97p87umlwhvt",
            "logoCloudinaryId": "profile_pics/dsor2nxk97p87umlwhvt",
            "matchedTerms": []
        },
        {
            "description": "We empower animal advocates with research, analysis & strategies that maximize their effectiveness to reduce animal suffering.. We conduct essential research, maintain an online research library, and directly support advocates and organizations in their work to save lives. The range of data we offer helps our movement understand how people think about and respond to advocacy, providing advocates with the best strategies to inspire change for animals.\n\nOur Original Studies are carefully selected, designed, and conducted to provide actionable and insightful data for the animal protection movement. Our research prioritization process helps us identify studies that have a high potential impact for animals, and our commitment to transparency and rigorous methodology ensures that our studies are of the highest quality. Our studies have been covered in hundreds of publications across animal advocacy circles as well as in mainstream media, and have been used by animal advocacy groups worldwid",
            "ein": "010686889",
            "name": "Faunalytics",
            "profileUrl": "https://www.every.org/faunalytics",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/e2wt3k3n1fr3vybxcewl",
            "logoCloudinaryId": "faja_profile/e2wt3k3n1fr3vybxcewl",
            "matchedTerms": []
        },
        {
            "description": "BLLAR is an all-volunteer organization, with a mission of rescuing stray, abandoned & abused animals from shelters and the streets. Big Little Life Rescue is an all-volunteer, non-profit 501 (c3) organization, with a mission of rescuing stray, abandoned, and abused animals. Our goal is to seek out the most desperate situations for these animals locally and internationally. \nWe aim to provide shelter, conduct TNVR (Trap/Neuter/Vaccinate/Release) programs, rehabilitation, medical treatment, foster care, and forever homes. We also believe in community education and increasing public awareness on the importance of excellent preventative health practice and population/disease control with sterilization and vaccination. \nOur group came together after years of volunteering in other organizations individually and a common life-long, deep love and respect for animals. Each of us see animals as beautiful, sentient beings, who are capable of unconditional love and acceptance. We believe that ani",
            "ein": "853870390",
            "name": "Big Little Life Animal Rescue International Inc",
            "profileUrl": "https://www.every.org/biglittlelife",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/koday0g8yx6vrxwu852j",
            "logoCloudinaryId": "profile_pics/koday0g8yx6vrxwu852j",
            "matchedTerms": []
        },
        {
            "description": "Dedicated to saving the lives of the tiniest felines.. Orphan Kitten Club is dedicated to saving the lives of the tiniest felines.\n\nEvery kitten season, thousands of motherless kittens are at risk of death on the streets and in animal shelters. Without a mother to care for them, kittens face impossible odds, and can’t survive without specialized care.\n\nOrphan Kitten Club is on a mission to end the killing of neonatal kittens–and to give every kitten a chance at a full and happy life. We are building a safer world for the tiniest felines by rescuing them in our state-of-the-art kitten nursery, ending the cycle of reproduction through sterilization, and providing the world’s first grant program targeted at saving neonatal kittens.\nMake a lifesaving difference today.",
            "ein": "813503227",
            "name": "Orphan Kitten Club",
            "profileUrl": "https://www.every.org/orphankittenclub",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/getd3etc0bbbewctfpmy",
            "logoCloudinaryId": "profile_pics/getd3etc0bbbewctfpmy",
            "matchedTerms": []
        },
        {
            "description": "Milo's Sanctuary & Special Needs Cat Rescue, Inc. where the oddballs are embraced and loved.. To rescue special needs cats and kittens and rehome cats that can be adopted to forever homes and prompt early spaying & neutering of ALL animals!",
            "ein": "201461577",
            "name": "Milo's Sanctuary, Inc.",
            "profileUrl": "https://www.every.org/milossanctuary",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/qlip2kgttdebsj3jlfpi",
            "logoCloudinaryId": "profile_pics/qlip2kgttdebsj3jlfpi",
            "matchedTerms": []
        },
        {
            "description": "Promotes the use of the No Kill Equation to help shelters save every healthy, treatable homeless pet.. No Kill Colorado is an 501c3 organization working to improve the Animal Shelter system in Colorado. Thousands of pets are killed each year in Colorado because of the lack of life saving programs that can be implemented without additional cost, and possibly adding revenue to the current funds provided to municipal shelters.\n\nMoney doesn't save lives - people do.  But money makes it a heck of a lot easier to reach people.\n\nPromoting adoption and fostering is a major program we campaign for throughout the year.  We successfully have helped organizations get hundreds of animals home from our Home for the Holdiays cmapign every year.\n\nWe put a bounty on pets  going to foster or a permanent home.  rganizations that particpate receive $50 from us for every pet 3 or more years old, or at any age with special needs.\n\nLearn more here: https://www.nokillcolorado.org/home-for-the-holidays-2021",
            "ein": "462180014",
            "name": "No Kill Colorado",
            "profileUrl": "https://www.every.org/nokillcolorado",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/c7jnrpqkogssxcvejoav",
            "logoCloudinaryId": "faja_profile/c7jnrpqkogssxcvejoav",
            "matchedTerms": []
        },
        {
            "description": "A nonprofit crowdfunding platform that works directly with pet owners and animal shelters to help save pets in medical crisis.. Waggle serves and connects people who care for the wellness of pets—from those in financial need to those who can financially help and everyone in between. 100% of funds go directly to the veterinary partner providing care.",
            "ein": "320518559",
            "name": "Waggle",
            "profileUrl": "https://www.every.org/waggle",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kspp8zzfhgdczam7svd7",
            "logoCloudinaryId": "faja_profile/kspp8zzfhgdczam7svd7",
            "matchedTerms": []
        },
        {
            "description": "Mississippi Spay and Neuter's goal is to end pet overpopulation in the state of Mississippi. We envision a world where there are no homeless dogs and cats suffering in the streets, but instead, a world where every dog and cat has a loving home.. Mississippi Spay & Neuter provides nearly 5,000 low-cost spay/neuter procedures annually at their Big Fix Clinic in Richland. No animal is turned away for financial reasons. They also maintain a statewide listing of low-cost services. Additionally, they provide low-cost wellness services to animals who have already been fixed.",
            "ein": "202938077",
            "name": "Mississippi Spay & Neuter -The Big Fix Clinic",
            "profileUrl": "https://www.every.org/msspan",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/itxqr7aoih9hs03agkrd",
            "logoCloudinaryId": "faja_profile/itxqr7aoih9hs03agkrd",
            "matchedTerms": []
        },
        {
            "description": "No-kill animal shelter and low-cost spay/neuter clinic.. The mission is to ensure the well-being of every cat through adoption, affordable spay/neuter services, community outreach and adherence to No Kill principles.   SAFE Haven's clinic provides low-cost services for stray, feral and owned cats in the Triangle. For $85, the cats are spayed/neutered, given rabies and distemper vaccine, and provided with a thorough medical examination.  All cats and kittens at SAFE Haven receive the following prior to adoption: Sterilization, a rabies vaccine, distemper vaccines, testing for Feline Leukemia/FIV, treatment for fleas, intestinal parasites and ear mites, a thorough examination by a veterinarian, and a microchip including lifetime registration.",
            "ein": "561916620",
            "name": "SAFE Haven for Cats",
            "profileUrl": "https://www.every.org/safehavenforcats",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/w3jlpz9mthqzhopugbcw",
            "logoCloudinaryId": "faja_profile/w3jlpz9mthqzhopugbcw",
            "matchedTerms": []
        },
        {
            "description": "Sanctuary Hostel is a 501c3 nonprofit dedicated to animal welfare. Let's build a world where all creatures live in harmony.. Sanctuary Hostel and Animal Rescue is a 501c3 nonprofit with a mission to educate people on animal welfare to reduce stray animals on the streets. We achieve our mission by combining an Animal Rescue with:\n*Eco-Hostel, to raise awareness of the problem and financially support the nonprofit\n*Community Garden, to have a shared space that can provide for the community\n*Education Program, to provide free classes on animal communication, training, and sustainability\n\nOur founder has purchased the plot of land and we have already received permits and preliminary architecture designs. Your donation will help us finalize the construction designs and set the date for when we can break ground to build the shelter, hostel, and garden.\n\nThe Problem:\nRoughly 70% of Mexico’s 18 million dogs are abandoned and become strays, making it the worst country for pet abandonment in La",
            "ein": "861943494",
            "name": "Sanctuary Hostel",
            "profileUrl": "https://www.every.org/sanctuary-hostel",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/euryhcj3dvcrjzhlqdue",
            "logoCloudinaryId": "profile_pics/euryhcj3dvcrjzhlqdue",
            "matchedTerms": []
        }
    ],
    "christianity": [
        {
            "description": "Giving children in the U.S. and around the world a healthy start in life, the opportunity to learn and protection from harm.. Save the Children believes every child deserves a future. Since our founding more than 100 years ago, we’ve changed the lives of more than 1 billion children. In the United States and around the world, we give children a healthy start in life, the opportunity to learn and protection from harm. We do whatever it takes for children – every day and in times of crisis – transforming their lives and the future we share.",
            "ein": "060726487",
            "name": "Save the Children",
            "profileUrl": "https://www.every.org/savethechildren",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xugvznpbojeysnwzgyrx",
            "logoCloudinaryId": "profile_pics/xugvznpbojeysnwzgyrx",
            "matchedTerms": []
        },
        {
            "description": "Sharing God’s love with people living on the streets of the mid-peninsula 💛 (every donation is being matched X2 right now). Sharing God's love with people living on the streets of the mid-peninsula 💛\n\nWe are a community-based, non-profit organization that serves the homeless and at-risk populations of the Mid-Peninsula. We establish environments and build relationships where community volunteers can provide food and clothing, as well as referrals for shelter, addiction recovery, and other personal support.\n\n_____\n\nStreet Life Ministries (or SLM) began in 2001 at the downtown Menlo Park train station. Today, due to the help of many people, it now serves over 35,000 meals a year, five nights a week, in Menlo Park, Palo Alto and Redwood City. For 20 years SLM gatherings have built a reputation as the one consistent place the homeless can count on. Whether it is a holiday, a cloudy or rainy day, SLM never varies from the set schedule, giving the homeless a stable option throughout the yea",
            "ein": "453602635",
            "name": "Street Life Ministries",
            "profileUrl": "https://www.every.org/streetlifeministries",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ovg1fwrlcpd9uma8umya",
            "logoCloudinaryId": "profile_pics/ovg1fwrlcpd9uma8umya",
            "matchedTerms": []
        },
        {
            "ein": "900132063",
            "name": "Pray California",
            "profileUrl": "https://www.every.org/pray-california",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/bvabkt9upi7y4zkdx600",
            "logoCloudinaryId": "profile_pics/bvabkt9upi7y4zkdx600",
            "matchedTerms": []
        },
        {
            "description": "A non-denominational evangelical Christian organization providing spiritual and physical aid to hurting people around the world.. Samaritan's Purse  is a nondenominational evangelical Christian organization providing spiritual and physical aid to hurting people around the world. Since 1970, Samaritan's Purse has helped meet needs of people who are victims of war, poverty, natural disasters, disease, and famine with the purpose of sharing God's love through His Son, Jesus Christ. The organization serves the Church worldwide to promote the Gospel of the Lord Jesus Christ.",
            "ein": "581437002",
            "name": "Samaritan's Purse",
            "profileUrl": "https://www.every.org/samaritans-purse",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/e9analbgllukyhrpktua",
            "logoCloudinaryId": "faja_profile/e9analbgllukyhrpktua",
            "matchedTerms": []
        },
        {
            "description": "Can Do Kids helps kids around the world experience God's love by empowering their communities to meet their most basic needs. .",
            "ein": "271302872",
            "name": "Can Do Kids International",
            "profileUrl": "https://www.every.org/candokids",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/okw02etpiqsoqwbxelnn",
            "logoCloudinaryId": "profile_pics/okw02etpiqsoqwbxelnn",
            "matchedTerms": []
        },
        {
            "description": "Creating animated videos that walk through the literary structure of the Bible book-by-book and theme-by-theme.. Our mission is to help people experience the Bible as a unified story that leads to Jesus. The Bible Project is a non-profit creating animated videos that walk through the literary structure of the Bible book-by-book and theme-by-theme.",
            "ein": "464277592",
            "name": "The Bible Project",
            "profileUrl": "https://www.every.org/jointhebibleproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/nle6asuvg0ol3cmtgcwb",
            "logoCloudinaryId": "faja_profile/nle6asuvg0ol3cmtgcwb",
            "matchedTerms": []
        },
        {
            "description": "We are responsible for fundraising on behalf of the Ridhwan School to support the unfolding of the Diamond Approach in the world.. Friends of Ridhwan is a student-run organization designated by the Ridhwan School’s Obsidian Synod as the body responsible for both short-term and future-oriented fundraising on behalf of the School.  It has been created to act cooperatively and to co-evolve with the School and its various manifestations.  Both the Ridhwan Foundation and Friends of Ridhwan serve under the guidance of the Obsidian Synod. \n\nEstablishing a separate legal entity for fund raising activities frees the Ridhwan Foundation to serve fully in its role to support teachers and students in the School, train and ordain teachers, and present programs to the public.  It creates a desired separation between the teaching and the activities of seeking and receiving charitable gifts.",
            "ein": "473365579",
            "name": "Friends of Ridhwan",
            "profileUrl": "https://www.every.org/friends-of-ridhwan",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/vravfhpx2hazcgofviu8",
            "logoCloudinaryId": "profile_pics/vravfhpx2hazcgofviu8",
            "matchedTerms": []
        },
        {
            "description": "Bountiful Children is serving malnourished children in 17 countries.  100% of your donation goes to help children in need.. Bountiful Children is helping malnourished children who aren't receiving proper nutrients.  Screenings are done every 6 months.  Children that have moderate or acute malnutrition begin receiving support from Bountiful.  They are given nutritional supplements and their families are given health lessons to help in their efforts to keep their children healthy.  \n\nThe first 1000 days are so vital to a child's physical and mental health.  A child who receives proper nutrition can go on to reach their full potential and lead productive lives.  For as little as $8/month, a child can receive proper nutrition.   100% of every dollar is used to help children in need without regard to race, religion, or ethnic origin.\n\nWe are helping approximately 10% of children in need.  Can you help us reach more children?",
            "ein": "953576538",
            "name": "The Bountiful Children's Foundation",
            "profileUrl": "https://www.every.org/bountifulchildren",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dtwcagc03zbg6rwyoyua",
            "logoCloudinaryId": "profile_pics/dtwcagc03zbg6rwyoyua",
            "matchedTerms": []
        },
        {
            "ein": "842367156",
            "name": "Erebuni Armenian School",
            "profileUrl": "https://www.every.org/erebuniarmenianschool",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/frxpwjmiihqaxo1nulrw",
            "logoCloudinaryId": "profile_pics/frxpwjmiihqaxo1nulrw",
            "matchedTerms": []
        },
        {
            "description": "Partnering with generous people and organizations to help families and others in need through surprise compassion \"Ethos Projects\". What is Ethos Project?\n\nWe are creating ways that we can positively influence and We are collaborating with churches, businesses, organizations, and other benevolent people in the area to change the \"Ethos\" of our community.  In years to come, we hope to produce faith-based multi-media events that inspire individuals, musicians, artists of all kinds, businesses, and other non-profits to do the same.\n\ninspire.create.give\n\nSee also... bit.ly/ethosdonate",
            "ein": "264177703",
            "name": "Ethos Ministries",
            "profileUrl": "https://www.every.org/ethosministries",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ivd6fhckrlqrkattm17y",
            "logoCloudinaryId": "profile_pics/ivd6fhckrlqrkattm17y",
            "matchedTerms": []
        }
    ],
    "climate": [
        {
            "description": "Supporting highly-impactful, evidence-based solutions to the triple challenge of climate change, air pollution and energy poverty.. ## The Founders Pledge Perspective\n\nClimate change is one part of a triple challenge surrounding energy production. Not only does most current energy production lead to damaging carbon emissions, the effects of which are devastating ecosystems and changing our planet beyond recognition, it also pollutes the air and leaves many of the world’s poor without sufficient energy. This adds up to an environmental and humanitarian crisis.\n\nThus, we face a triple challenge: we not only need to drive down carbon emissions to near zero by mid-century, and drastically reduce air pollution, but we need to do so while supporting work to reduce global poverty that will often be accompanied, or even driven, by increased energy consumption.\n\nWe aim to take a holistic approach that recognizes the global nature of this challenge, as well as the fact that, despite its urgency",
            "name": "Climate Change Fund",
            "profileUrl": "https://www.every.org/climate.change.fund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wmkvoumgfdwhnzo6l1wz",
            "logoCloudinaryId": "profile_pics/wmkvoumgfdwhnzo6l1wz",
            "matchedTerms": []
        },
        {
            "description": "Lil BUB is a one of a kind space cat. Since landing on Earth, she's raised over $500,000 for homeless pets.. Lil BUB’s Big Fund exists to advocate for special needs companion animals and build a community that celebrates and fosters the human animal bond. With a focus on animals who are the most difficult to adopt, the most expensive to care for, and who are at a high risk of euthanasia. Lil BUB’s Big Fund provides grants to shelters nationwide and partners with shelters to create special needs foster program initiatives. We visit schools to promote kindness and inclusion. Through our work, we share BUB’s message of overcoming adversity and the knowledge that the things that make us different are worthy of being seen and appreciated.",
            "ein": "844229672",
            "name": "Lil BUB's Big Fund",
            "profileUrl": "https://www.every.org/lilbubsbigfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dsor2nxk97p87umlwhvt",
            "logoCloudinaryId": "profile_pics/dsor2nxk97p87umlwhvt",
            "matchedTerms": []
        },
        {
            "description": "We're growing a greener future with millions of trees in the ground and planting projects underway worldwide. \n\n#TEAMTREES. Where are these millions of trees being planted? All over the world! Get the latest info on our current projects at teamtrees.org, or check out our social media for regular updates.",
            "name": "#teamtrees",
            "profileUrl": "https://www.every.org/teamtrees",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zqoc2gbtwxbrnrig0xs8",
            "logoCloudinaryId": "profile_pics/zqoc2gbtwxbrnrig0xs8",
            "matchedTerms": []
        },
        {
            "description": "TerraPraxis designs and implements strategies that leverage science, technology and energy innovation for a prosperous planet. We co-founded TerraPraxis to design and implement strategies that leverage science, technology and energy innovation for a prosperous planet. \n\nOur special focus is on enabling high-impact rapid transitions for neglected parts of the decarbonization challenge. \n\nWe work with an extensive global network to define, incubate and initiate scalable strategies that fulfil the twin missions of prosperity and decarbonization.",
            "name": "TerraPraxis",
            "profileUrl": "https://www.every.org/terrapraxis",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ozuhckx9egnja86ukvja",
            "logoCloudinaryId": "profile_pics/ozuhckx9egnja86ukvja",
            "matchedTerms": []
        },
        {
            "description": "The Fungi Foundation is a global organization that works for the Fungi, their habitats, and the people who depend on them.. Launched in 2012, the Fungi Foundation is the first NGO dedicated to the fungi kingdom. Since its inception, it has achieved numerous milestones while dedicating itself to exploring the fungi world in view of increasing knowledge of their diversity, educating about their applications, and recommending public policy for their conservation. As part of our ongoing 3F initiative, the foundation played a key role in enabling Chile to become the first country in the world to include protection of fungi in its environmental legislation. More recently, the foundation proudly announced the Fantastic Fungi Education Curriculum, the world's first mycological set of courses designed for schools.\n\nIn short, the Fungi Foundation envisions a healthy planet in which Fungi are recognized, protected, and embraced as the interconnectors of nature; a mission that would be impossible",
            "ein": "851478153",
            "name": "Fungi Foundation",
            "profileUrl": "https://www.every.org/ffungi",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wq14eif08jx3kka2ixau",
            "logoCloudinaryId": "profile_pics/wq14eif08jx3kka2ixau",
            "matchedTerms": []
        },
        {
            "description": "Catalyzing resilient solutions, scaled to meet the climate challenge.. CATF is a nonprofit organization dedicated to reducing atmospheric pollution through research, advocacy, and private sector collaboration.",
            "ein": "043512550",
            "name": "Clean Air Task Force",
            "profileUrl": "https://www.every.org/cleanaircatf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/uqm96xaxu1w7mvyoi4hp",
            "logoCloudinaryId": "faja_profile/uqm96xaxu1w7mvyoi4hp",
            "matchedTerms": []
        },
        {
            "description": "We are a think tank dedicated to figuring out the best ways to make the world a better place.. Rethink Priorities is a research organization that conducts critical research to inform policymakers and major foundations about how to best help people and nonhuman animals in both the present and the long-term future.\n\nOur research spans everything from animal welfare to the threat of nuclear war. We explore neglected but promising areas to improve the world and try to further build the community of researchers working on understanding how to do this most effectively.",
            "ein": "843896318",
            "name": "Rethink Priorities",
            "profileUrl": "https://www.every.org/rethinkpriorities",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/i3iknd276i6cw1exfveu",
            "logoCloudinaryId": "profile_pics/i3iknd276i6cw1exfveu",
            "matchedTerms": []
        },
        {
            "description": "We want to make life better for wild animals.. We are dedicated to finding evidence-backed ways to improve the lives of animals in the wild.\n\nWe depend on individual donors to help us make life better for wild animals. To a small nonprofit working hard on a big problem, your support is more crucial now than ever!",
            "ein": "822281466",
            "name": "Wild Animal Initiative",
            "profileUrl": "https://www.every.org/wildanimalinitiative",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wzgsabl4bvjvfl6jezb1",
            "logoCloudinaryId": "profile_pics/wzgsabl4bvjvfl6jezb1",
            "matchedTerms": []
        },
        {
            "description": "A new breed of climate-focused NGO working to build a world that removes more carbon than it emits.. Reducing emissions is not enough.\n\nWe envision a world where climate change has been halted and economic prosperity is driven by innovative farmers, foresters, and businesses pulling carbon from the sky.\n\nBy partnering with experts and change-makers across industries, we elevate three essential pillars of economic transformation: accelerated research, smart business practices, and effective policies.\n\nWith so many solutions at our fingertips and so little time, we’re committed to motivating change widely — and fast. We work alongside people of diverse perspectives and backgrounds to build broad momentum for carbon removal.",
            "ein": "812560407",
            "name": "Carbon180",
            "profileUrl": "https://www.every.org/carbon180",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yqmdokygvmt3p5st8d7i",
            "logoCloudinaryId": "profile_pics/yqmdokygvmt3p5st8d7i",
            "matchedTerms": []
        },
        {
            "description": "Ensuring access to safe water, sanitation, and hygiene since 2007. . We envision a better world, where all have access to living conditions that allow empowerment and development. Together, we aim to ensure sustainable access to safe water and sanitation for the most vulnerable communities through innovative partnerships, creativity and the power of art.",
            "ein": "263242787",
            "name": "One Drop Foundation",
            "profileUrl": "https://www.every.org/onedrop",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/adtf4n2mjlz7hjndot81",
            "logoCloudinaryId": "profile_pics/adtf4n2mjlz7hjndot81",
            "matchedTerms": []
        }
    ],
    "conservation": [
        {
            "description": "We're growing a greener future with millions of trees in the ground and planting projects underway worldwide. \n\n#TEAMTREES. Where are these millions of trees being planted? All over the world! Get the latest info on our current projects at teamtrees.org, or check out our social media for regular updates.",
            "name": "#teamtrees",
            "profileUrl": "https://www.every.org/teamtrees",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zqoc2gbtwxbrnrig0xs8",
            "logoCloudinaryId": "profile_pics/zqoc2gbtwxbrnrig0xs8",
            "matchedTerms": []
        },
        {
            "description": "TerraPraxis designs and implements strategies that leverage science, technology and energy innovation for a prosperous planet. We co-founded TerraPraxis to design and implement strategies that leverage science, technology and energy innovation for a prosperous planet. \n\nOur special focus is on enabling high-impact rapid transitions for neglected parts of the decarbonization challenge. \n\nWe work with an extensive global network to define, incubate and initiate scalable strategies that fulfil the twin missions of prosperity and decarbonization.",
            "name": "TerraPraxis",
            "profileUrl": "https://www.every.org/terrapraxis",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ozuhckx9egnja86ukvja",
            "logoCloudinaryId": "profile_pics/ozuhckx9egnja86ukvja",
            "matchedTerms": []
        },
        {
            "description": "The Fungi Foundation is a global organization that works for the Fungi, their habitats, and the people who depend on them.. Launched in 2012, the Fungi Foundation is the first NGO dedicated to the fungi kingdom. Since its inception, it has achieved numerous milestones while dedicating itself to exploring the fungi world in view of increasing knowledge of their diversity, educating about their applications, and recommending public policy for their conservation. As part of our ongoing 3F initiative, the foundation played a key role in enabling Chile to become the first country in the world to include protection of fungi in its environmental legislation. More recently, the foundation proudly announced the Fantastic Fungi Education Curriculum, the world's first mycological set of courses designed for schools.\n\nIn short, the Fungi Foundation envisions a healthy planet in which Fungi are recognized, protected, and embraced as the interconnectors of nature; a mission that would be impossible",
            "ein": "851478153",
            "name": "Fungi Foundation",
            "profileUrl": "https://www.every.org/ffungi",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wq14eif08jx3kka2ixau",
            "logoCloudinaryId": "profile_pics/wq14eif08jx3kka2ixau",
            "matchedTerms": []
        },
        {
            "description": "We want to make life better for wild animals.. We are dedicated to finding evidence-backed ways to improve the lives of animals in the wild.\n\nWe depend on individual donors to help us make life better for wild animals. To a small nonprofit working hard on a big problem, your support is more crucial now than ever!",
            "ein": "822281466",
            "name": "Wild Animal Initiative",
            "profileUrl": "https://www.every.org/wildanimalinitiative",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wzgsabl4bvjvfl6jezb1",
            "logoCloudinaryId": "profile_pics/wzgsabl4bvjvfl6jezb1",
            "matchedTerms": []
        },
        {
            "description": "Conserve nature and reduce the most pressing threats to the diversity of life on Earth.. WWF's mission is to conserve nature and reduce the most pressing threats to the diversity of life on Earth.  Our vision is to build a future where people live in harmony with nature.",
            "ein": "521693387",
            "name": "World Wildlife Fund",
            "profileUrl": "https://www.every.org/wwf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/wmw5wsfsjhump3ecbsb8",
            "logoCloudinaryId": "faja_profile/wmw5wsfsjhump3ecbsb8",
            "matchedTerms": []
        },
        {
            "description": "Pollinate minds and convey the importance of saving wild honey bees from extinction by integrating them into urban environments.. The mission to save honey bees from extinction–CEO Walter Schumacher’s professed goal–originated from a conversation in 2006. Walter, also known fondly as the “Bee-Czar”, was intrigued when a friend of his explained that the key to saving the world was to save the honey bee. From that point on, Walter took every step towards figuring out how to save bees from unwanted places without endangering their lives. \n\nIn late 2006, Walter created the Central Texas Bee Rescue and personally opened his own property to the bees of local citizens seeking an eco-friendly solution to their unwanted honey bee infestation or swarm issues. Since Colony Collapse Disorder (CCD) had not been diagnosed by that time, there were still many people baffled at why someone, such as Walter, would get in a bee suit in 110 index heat during the summer just to save some pesky wild bees. Y",
            "ein": "463744257",
            "name": "American Honey Bee Protection Agency",
            "profileUrl": "https://www.every.org/ahbpa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/hqnjng1svslz7bevfrx0",
            "logoCloudinaryId": "faja_profile/hqnjng1svslz7bevfrx0",
            "matchedTerms": []
        },
        {
            "description": "To protect and enhance our national parks for present and future generations.. NPCA is an independent, nonpartisan voice working to protect and strengthen America’s favorite places.",
            "ein": "530225165",
            "name": "National Parks Conservation Association",
            "profileUrl": "https://www.every.org/npca",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ojg4gwemaohlfdcy5shy",
            "logoCloudinaryId": "faja_profile/ojg4gwemaohlfdcy5shy",
            "matchedTerms": []
        },
        {
            "description": "Our mission is to catalyze a global solution to the climate crisis by making urgent action a necessity across every level of society.. The Earth is facing a climate crisis, driven by fossil fuels.\n\nAt Climate Reality, we’re here to make urgent action a necessity. In politics. In business. In every aspect of our lives. Everywhere.\n\nUrgent action to cut greenhouse gas emissions and speed the global shift to renewables. Urgent action to halt the Trump Administration’s radical fossil fuel agenda. Urgent action to make world leaders strengthen and honor their Paris Agreement commitments.\n\nLed by former US Vice President Al Gore and CEO and President Ken Berlin, we do it by empowering everyday people to become activists, equipped with the tools, training, and network to fight for solutions and drive change planet-wide.\n\nThe result is over 20,000 Climate Reality Leaders mobilizing communities in over 150 countries. Branches in 10 critical nations and regions around the Earth. 100 activists c",
            "ein": "870745629",
            "name": "Climate Reality",
            "profileUrl": "https://www.every.org/climaterealityproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/rq0lmxfgs8bbtpqw0xph",
            "logoCloudinaryId": "faja_profile/rq0lmxfgs8bbtpqw0xph",
            "matchedTerms": []
        },
        {
            "description": "Partnering with indigenous and other local communities to protect tropical forests and strengthen traditional culture.. We see a future where healthy tropical forests and thriving local communities exist in harmonious relationship with each other, contributing to the well-being of the planet. We believe that our collective future depends on protecting these forests. Our work is focused on stopping threats to the forest and its people, or on mitigating those threats.",
            "ein": "541915987",
            "name": "Amazon Conservation Team",
            "profileUrl": "https://www.every.org/amazonteam",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/lekslu35rdakyget8dro",
            "logoCloudinaryId": "faja_profile/lekslu35rdakyget8dro",
            "matchedTerms": []
        },
        {
            "description": "Leading the fight against global warming, making it easy and affordable for anyone to eliminate their carbon footprint. . We encourage everyone to continually strive to reduce their carbon footprint through sensible energy reductions combined with cost-effective carbon offsets to eliminate their overall carbon footprint.\n\nCarbonfund.org supports third-party validated and verified renewable energy, energy efficiency and reforestation projects globally that reduce carbon dioxide emissions and the threat of climate change.",
            "ein": "200231609",
            "name": "Carbonfund.org Foundation",
            "profileUrl": "https://www.every.org/carbonfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/txmnl00p0aaojtzsyhzb",
            "logoCloudinaryId": "faja_profile/txmnl00p0aaojtzsyhzb",
            "matchedTerms": []
        }
    ],
    "coronavirus": [
        {
            "description": "The largest hunger-relief organization in the US. We feed America's hungry through a nationwide network of member food banks.. From Seattle to New Rochelle, from Baton Rouge to San Francisco, food banks across the country are doing what they do best – feeding people in need within their communities. The Feeding America network is the largest hunger-relief organization in the United States including in disasters and national emergencies. Our mission is to feed America's hungry through a nationwide network of member food banks and engage our country in the fight to end hunger. You can help.",
            "ein": "363673599",
            "name": "Feeding America",
            "profileUrl": "https://www.every.org/feedingamerica",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/qeaepmtovdqvzx0nnmfa",
            "logoCloudinaryId": "faja_profile/qeaepmtovdqvzx0nnmfa",
            "matchedTerms": []
        },
        {
            "description": "We help people in crisis by providing emergency health services, and then promote self-reliance through training.. We are a global humanitarian organization dedicated to saving lives and relieving suffering. Established in 1984 by volunteer doctors and nurses, we are a nonprofit with no political or religious affiliation, and now have more than 7,500 staff members around the world, more than 97% of whom are local. Our mission is to improve the quality of life through health interventions and related activities that strengthen underserved communities worldwide. With the flexibility to respond rapidly to emergencies, we offer medical services and training to people at the highest risk, always working to strengthen local healthcare systems and promote self-reliance.",
            "ein": "953949646",
            "name": "International Medical Corps",
            "profileUrl": "https://www.every.org/international-medical-corps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zwxuhjjxmrayjwbfceg9",
            "logoCloudinaryId": "faja_profile/zwxuhjjxmrayjwbfceg9",
            "matchedTerms": []
        },
        {
            "description": "Medical aid where it's needed most — independent, neutral, impartial.. Médecins Sans Frontières/Doctors Without Borders (MSF) is a private international association founded in 1971. The association is made up mainly of doctors and health sector workers and is also open to other professions which might help in achieving its aims. Our mission is to provide lifesaving medical care to those most in need.\n\nAll MSF members agree to honor the following principles:\n\nMSF provides assistance to populations in distress, to victims of natural or man-made disasters, and to victims of armed conflict. They do so irrespective of gender, race, religion, creed, or political convictions.\n\nMSF observes neutrality and impartiality in the name of universal medical ethics and the right to humanitarian assistance. MSF claims full and unhindered freedom in the exercise of its functions.\n\nMembers undertake to respect their professional code of ethics and to maintain complete independence from all political, ec",
            "ein": "133433452",
            "name": "Doctors Without Borders (MSF)",
            "profileUrl": "https://www.every.org/doctors-without-borders",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yce3slcafmjda1xntzwj",
            "logoCloudinaryId": "profile_pics/yce3slcafmjda1xntzwj",
            "matchedTerms": []
        },
        {
            "description": "Helen Keller, our co-founder, envisioned a world without barriers to human potential. We are continuing her work.\n. Helen Keller, our co-founder, envisioned a world without barriers to human potential. Guided by her fierce optimism, we have been working on the front lines of health and well-being for more than 100 years. We deliver life-changing health care to vulnerable families in places where the need is great, but access is limited. Our proven, science-based programs empower people to create opportunities in their own lives.",
            "ein": "135562162",
            "name": "Helen Keller International",
            "profileUrl": "https://www.every.org/hki",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wxtloedq3wueneayoaex",
            "logoCloudinaryId": "profile_pics/wxtloedq3wueneayoaex",
            "matchedTerms": []
        },
        {
            "description": "A hot plate of food when it’s needed most. For people fighting or fleeing disasters, we are here. . Ten years ago, my wife Patricia and I had a big dream to start World Central Kitchen. We envisioned an organization that would create smart solutions to hunger and poverty, and for many years we saw an amazing impact through our clean cookstoves initiative, culinary training programs, and social enterprise ventures that empower communities and strengthen economies. But we had no idea we would one day be answering the call in Puerto Rico and around the world – “Food First Responders” serving millions of meals each year. In the process, we learned that a small NGO can change the world through the power of food.\n\nLast year, WCK activated in response to dozens of disasters — some of them natural, and some man-made. From serving children in the shelters on our border with Mexico to making deliveries by lamplight to those keeping watch over beaches in Indonesia, our fight to feed the hungry h",
            "ein": "273521132",
            "name": "World Central Kitchen",
            "profileUrl": "https://www.every.org/worldcentralkitchen",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ty9azacoven3riyd6z9l",
            "logoCloudinaryId": "faja_profile/ty9azacoven3riyd6z9l",
            "matchedTerms": []
        },
        {
            "description": "The world's-first funding vehicle to collectively grow our resources to support the long-term flourishing of humanity. \n. This Project focuses on how we can collectively grow our resources to support the long-term flourishing of humanity. It addresses a crucial gap: as a society, we spend much too little on safeguarding and benefiting future generations. In fact, we spend more money on ice cream each year than we do on preventing our own extinction. However, people in the future - who do not have a voice in their future survival or environment - matter. Lots of them may yet come into existence and we have the ability to positively affect their lives now, if only by making sure we avoid major catastrophes that could destroy our common future.\n\nHoused within the Project is the Patient Philanthropy Fund, a philanthropic co-funding vehicle which invests to give and ensures capital is at the ready when extraordinary opportunities to safeguard and improve the long-term future arise.\n\nThe Fu",
            "name": "Founders Pledge Patient Philanthropy Fund",
            "profileUrl": "https://www.every.org/patient-philanthropy-fund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zevurkfrs733iarywsqp",
            "logoCloudinaryId": "profile_pics/zevurkfrs733iarywsqp",
            "matchedTerms": []
        },
        {
            "description": "We are providing daily schedules for students ages 2-18 and remote learning resources to support students, parents, and teachers.. For every student,\nevery classroom.\nReal results.\nWe’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.\n\nPersonalized learning -  Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.\nTrusted content - Created by experts, Khan Academy’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, AP®, SAT®, and more. It’s all free for learners and teachers.\nTools to empower teachers - With Khan Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.",
            "ein": "261544963",
            "name": "Khan Academy",
            "profileUrl": "https://www.every.org/khan-academy",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/k03uzk9k9yj2ancqoelm",
            "logoCloudinaryId": "faja_profile/k03uzk9k9yj2ancqoelm",
            "matchedTerms": []
        },
        {
            "description": "SIPA enriches and empowers generations of Pilipino Americans and others in Historic Filipinotown and throughout Los Angeles.. SIPA is a 501(c)3 nonprofit organization serving Historic Filipinotown and other neighborhoods throughout Greater Los Angeles County. SIPA produces programs for youth and families including case management and counseling, after school programs, senior programs, small business development, cultural enrichment, and affordable housing.",
            "ein": "952879339",
            "name": "Search To Involve Pilipino Americans",
            "profileUrl": "https://www.every.org/sipacares",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/m4oe7clznkvtilq7he78",
            "logoCloudinaryId": "profile_pics/m4oe7clznkvtilq7he78",
            "matchedTerms": []
        },
        {
            "description": "Improve the health and lives of people affected by poverty or emergencies without regard to politics, religion, or ability to pay.. In the U.S., Direct Relief is delivering protective masks – along with exam gloves and isolation gowns – to health care organizations in areas with confirmed COVID-19 cases.\nIn China, Direct Relief has delivered via FedEx more than 30,000 pounds of protective gear — nearly 800,000 N95 and surgical masks, more than 400,000 gloves, and numerous coveralls, face shields, and shoe covers — to frontline health workers.\nDirect Relief is also staging personal protective equipment with regional response agencies across the world, including in the Caribbean and South America through the Pan American Health Organization.",
            "ein": "951831116",
            "name": "Direct Relief",
            "profileUrl": "https://www.every.org/direct-relief",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/yv2axjqvh2pojbralytc",
            "logoCloudinaryId": "faja_profile/yv2axjqvh2pojbralytc",
            "matchedTerms": []
        },
        {
            "description": "Create the change you wish to see in the world.. Our goal is to transform giving into a joyful and fulfilling experience for all donors. We do this by enabling charitable organizations to connect each donor’s gift to the actual end beneficiary in an authentic and transparent manner.\n\nSeeYourImpact is currently fundraising for multiple NGOs in India providing emergency supplies for COVID relief in rural India.",
            "ein": "263429980",
            "name": "SeeYourImpact",
            "profileUrl": "https://www.every.org/seeyourimpact",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/jctaoktycw8tk3zzhq2d",
            "logoCloudinaryId": "faja_profile/jctaoktycw8tk3zzhq2d",
            "matchedTerms": []
        }
    ],
    "culture": [
        {
            "description": "San Diego Architectural Foundation raises awareness about the value of excellence in our built environment.. Founded in 1978, the San Diego Architectural Foundation (SDAF) is a nonprofit organization dedicated to the education and promotion of outstanding architecture, landscape, interior, and urban design to improve the quality of life for all San Diegans. We do this by curating exceptional events throughout the year that are open to both the design industry and the public at large. We explore how the issues impact our growing region, like the design of our homes, workplaces, schools and communities, as well as our health and well-being. Our goal is to inspire all San Diegans to discover the value of thoughtful design in the natural and built environment and the effect it has on the quality of our lives.",
            "ein": "953513927",
            "name": "SDAF",
            "profileUrl": "https://www.every.org/sdarchitecture",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wcwwpo9psppfinm6kwcn",
            "logoCloudinaryId": "profile_pics/wcwwpo9psppfinm6kwcn",
            "matchedTerms": []
        },
        {
            "description": "A virtual non-profit organization & antiracist education brand that promotes justice for all.  . 540 provides an online hub for accessible education that promotes justice for all. We create a cultural shift in perspectives and practice through learning rooted in social justice and anti-racism.",
            "ein": "842870050",
            "name": "540WMain",
            "profileUrl": "https://www.every.org/540wmain",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zlp47evyyinbr4faz3jd",
            "logoCloudinaryId": "profile_pics/zlp47evyyinbr4faz3jd",
            "matchedTerms": []
        },
        {
            "description": "Bringing music across the planet to those who need it most. Can music change the world? We believe it can.. Keys of Change is a charity formed by individuals who deeply believe that playing music can make this world a better place. Keys of Change aims to advance the lives of children and young people around the world through musical education and access to live classical music performances. The charity was set up in early 2011 by the international concert pianist Panos Karan, who works with three other trustees, all involved in music and/or education, and a growing number of committed volunteers in many countries.  ​ Over the past six years, Keys of Change has brought classical music, often for the first time, to deprived or suffering audiences, in remote areas of the Amazon basin, Uganda, Sierra Leone, Kolkata and the tsunami-ravaged Fukushima area in Japan, as well as in Greece, Russia and London. Our music has brought alive emotions - fascination, happiness, tears of sadness – and",
            "ein": "820614802",
            "name": "Keys of Change",
            "profileUrl": "https://www.every.org/keysofchange",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pwvnaudte58ob3p1vb61",
            "logoCloudinaryId": "faja_profile/pwvnaudte58ob3p1vb61",
            "matchedTerms": []
        },
        {
            "description": "Music library dedicated to collecting, preserving and providing information about popular music from around the world.. The ARChive of Contemporary Music is a not-for-profit music library dedicated to collecting, preserving and providing information about popular music from around the world.    Now in its twenty-seventh year of operation, ARC is the largest and most important popular music colfourth lection in the world – with over two million sound recordings and approximately three million  photographs, books, press kits, videos, memorabilia and related ephemera.   Our simple goal is to guarantee that the world’s musical heritage is preserved for future generations to study and enjoy.     We believe that all forms of popular music, jazz, be-bop, bluegrass, country, rock, rap, blues, enka, reggae, calypso, zydeco, and countless other forms are significant cultural expressions.  All musics entertain as well as reveal a people and their values to the rest of the world.",
            "ein": "133347764",
            "name": "ARChive of Contemporary Music",
            "profileUrl": "https://www.every.org/arcmusic",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zdvmu94i8lcodwkrvl83",
            "logoCloudinaryId": "faja_profile/zdvmu94i8lcodwkrvl83",
            "matchedTerms": []
        },
        {
            "description": "Breakout Foundation helps communities thrive by providing unrestricted funding to local changemakers.. Changemakers can't champion change alone. We know those closest to the problems are also closest to the solutions. Breakout is a social-impact experiential agency with a supporting 501c3 foundation committed to driving change.\n\nWe're here to amplify and empower the people, places, and stories that deserve the hype through unrestricted grants (while removing the red tape of traditional giving). Local changemakers deserve a platform they trust and a network of leaders to learn with and lean on.",
            "ein": "811983565",
            "name": "Breakout Foundation",
            "profileUrl": "https://www.every.org/breakout",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/g2zaamihsdylzdbhgdz5",
            "logoCloudinaryId": "profile_pics/g2zaamihsdylzdbhgdz5",
            "matchedTerms": []
        },
        {
            "description": "SIPA enriches and empowers generations of Pilipino Americans and others in Historic Filipinotown and throughout Los Angeles.. SIPA is a 501(c)3 nonprofit organization serving Historic Filipinotown and other neighborhoods throughout Greater Los Angeles County. SIPA produces programs for youth and families including case management and counseling, after school programs, senior programs, small business development, cultural enrichment, and affordable housing.",
            "ein": "952879339",
            "name": "Search To Involve Pilipino Americans",
            "profileUrl": "https://www.every.org/sipacares",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/m4oe7clznkvtilq7he78",
            "logoCloudinaryId": "profile_pics/m4oe7clznkvtilq7he78",
            "matchedTerms": []
        },
        {
            "description": "On a mission to create a more informed public. Every day, NPR connects with millions of Americans.. Independent, nonprofit media organization that was founded on a mission to create a more informed public. Connection people on the air, online, and in person to explore the news, ideas, and what it means to be human.",
            "ein": "520907625",
            "name": "National Public Radio",
            "profileUrl": "https://www.every.org/npr",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/80562759_10158743762541756_1490914449886806016_o_ra9tca",
            "logoCloudinaryId": "faja_profile/80562759_10158743762541756_1490914449886806016_o_ra9tca",
            "matchedTerms": []
        },
        {
            "description": "PBS's mission is to inform, to inspire, and to educate.. PBS and more than 350 local stations offer every American opportunities to experience new places, explore new ideas and discover new worlds.",
            "ein": "520899215",
            "name": "Public Broadcasting Service",
            "profileUrl": "https://www.every.org/pbs",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pbslogo_nwlyt2",
            "logoCloudinaryId": "faja_profile/pbslogo_nwlyt2",
            "matchedTerms": []
        },
        {
            "description": "Newsroom focused on investigative journalism in the public interest.. ProPublica is an independent, non-profit newsroom that produces investigative journalism in the public interest. Our work focuses exclusively on truly important stories, stories with “moral force.” We do this by producing journalism that shines a light on exploitation of the weak by the strong and on the failures of those with power to vindicate the trust placed in them.  Investigative journalism is at risk. Many news organizations have increasingly come to see it as a luxury. Today’s investigative reporters lack resources: Time and budget constraints are curbing the ability of journalists not specifically designated “investigative” to do this kind of reporting in addition to their regular beats. New models are, therefore, necessary to carry forward some of the great work of journalism in the public interest that is such an integral part of self-government, and thus an important bulwark of our democracy.",
            "ein": "142007220",
            "name": "ProPublica",
            "profileUrl": "https://www.every.org/pro-publica",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kqrafcjgdppb30ebwyde",
            "logoCloudinaryId": "faja_profile/kqrafcjgdppb30ebwyde",
            "matchedTerms": []
        },
        {
            "description": "To foster a more peaceful society Terrawatu works in Tanzania creating self-sustainable projects rooted in indigenous communities . Who We Are\n\nCelebrating 20 years this year, Terrawatu is an NGO based in Tanzania that works with local communities to create sustainable development projects, and educates about the importance of environmental conservation, reforestation and the cultivation of plants for both medicinal and nutritional purposes. Our success lies in our ability to unite time-tested ancient wisdom with up-to-date science so that the needs of communities are met appropriately and efficiently.\n\nThe founders of Terrawatu – Dr. Tanya Pergola, an American sociologist and Lekoko Ole Sululu, a Tanzanian Maasai elder – share a love for Tanzania’s land, rich cultures, and its people. Saddened by the ‘brain drain’ and desire of so many young Tanzanians to leave their country in search of perceived ‘greener pastures’ the founders set about to do what they could to educate and improve",
            "ein": "260212786",
            "name": "Terrawatu",
            "profileUrl": "https://www.every.org/terrawatu",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kektm5hrb2fnkifwpwoi",
            "logoCloudinaryId": "profile_pics/kektm5hrb2fnkifwpwoi",
            "matchedTerms": []
        }
    ],
    "dance": [
        {
            "description": "ACMS offers opportunities to learn the joys of music for all ages and skill levels. . The Armstrong Community Music School was founded on the principle that a high-quality music education should be available to everyone, regardless of circumstances. At ACMS you might see a small child attending an Early Childhood Music class while across the hall a grandparent goes to her first ever violin lesson. For 20 years, ACMS has provided Central Texans of all ages and skill levels the opportunity to express themselves through joyful music-making.\n\nIn conjunction with the excellent music instruction provided in-house, ACMS partners with local organizations to offer free programming for a wide variety of populations. Collectively these programs are known as the Harmony Initiative. Each program in the Harmony Initiative is designed by faculty and staff to meet the intellectual and situational needs of the communities they serve, positively impacting the lives of underserved populations with the",
            "ein": "454295757",
            "name": "Armstrong Community Music School",
            "profileUrl": "https://www.every.org/acmsaustin",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wmip3vwkvdwpyaxwr45p",
            "logoCloudinaryId": "profile_pics/wmip3vwkvdwpyaxwr45p",
            "matchedTerms": []
        },
        {
            "description": "(PMB) is a nonprofit ballet company founded in 1987. Each year PMB performs an original fairy tale ballet, hosts Dance Plano (formerly Plano Dance Festival), and participates in community performances and outreach initiatives.. The mission of Plano Metropolitan Ballet (PMB) is to provide the local community with a variety of affordable, original dance productions of the highest quality.  Our Goals  • Stimulate an interest in the art of dance in citizens of all ages throughout North Texas  • Showcase the talents of community members of all ages through the original choreography of trained professionals and performances by local artists  • Provide a supportive yet challenging atmosphere in which the students are able to enhance their existing dance abilities  • Through the discipline and structure of a traditional ballet environment develop a sense of responsibility for the actions of oneself and the impact of those actions on others",
            "ein": "300260999",
            "name": "Plano Metropolitan Ballet",
            "profileUrl": "https://www.every.org/planometballet",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/naewbeuejwncb2f7rsxy",
            "logoCloudinaryId": "faja_profile/naewbeuejwncb2f7rsxy",
            "matchedTerms": []
        },
        {
            "description": "\"We are a troupe of individuals who, through the power of music and dance, cultivate self worth, dignity and respect for all people.\". Culture Shock Los Angeles is a non-profit, 501(c)(3) Hip Hop dance organization dedicated to Dance Education, Community Outreach,  Professional Entertainment and the preservation of the Hip Hop culture.  Email Address: cultureshockla@yahoo.com",
            "ein": "261198327",
            "name": "Culture Shock Los Angeles",
            "profileUrl": "https://www.every.org/cultureshockla",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/bn69lfaahvx2h2fxanuu",
            "logoCloudinaryId": "faja_profile/bn69lfaahvx2h2fxanuu",
            "matchedTerms": []
        },
        {
            "description": "We utilize the arts as a platform for community engagement and the development of social and multicultural awareness.. Barrio Alegria is a community engagement organization that utilizes the arts to create transformations in individuals to help them transform their communities.\nThis means that we utilize the arts to build, empower, and strengthen communities through individuals. We dance, we act, and we paint, but most importantly we care about the stories of those that are helping create safe spaces for vulnerable community members.\n\nWeaved into our programs are storytelling systems that measure our results.",
            "ein": "831617182",
            "name": "Barrio Alegria",
            "profileUrl": "https://www.every.org/barrio-alegria",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/thsufetnhm7xhmnygspp",
            "logoCloudinaryId": "profile_pics/thsufetnhm7xhmnygspp",
            "matchedTerms": []
        },
        {
            "ein": "352593477",
            "name": "Animals 4 Healing",
            "profileUrl": "https://www.every.org/animals-4-healing",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/bnhmhdhdo58j2wbeygf0",
            "logoCloudinaryId": "profile_pics/bnhmhdhdo58j2wbeygf0",
            "matchedTerms": []
        },
        {
            "description": "SMAPA provides comprehensive, inclusive, developmental training in dance and related theater arts for children, teens, and adults.. Based in Montclair, NJ since 1997,  SMAPA is a Black-led nonprofit arts organization that offers dance classes in Ballet, Hip Hop, Modern, Jazz, Tap, Salsa, and Afro-Haitian for preschoolers, kids, teens, and adults. Through outreach programs in underserved public schools in Paterson, Newark, and East Orange, NJ, and scholarship programs in their studio, SMAPA brings dance to students who might otherwise lack access to training in the performing arts.",
            "ein": "223484652",
            "name": "Sharron Millers Academy for The Performing Arts",
            "profileUrl": "https://www.every.org/smapa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/l575lvho3arbqjj7nil9",
            "logoCloudinaryId": "profile_pics/l575lvho3arbqjj7nil9",
            "matchedTerms": []
        },
        {
            "description": "Theatre starring people with intellectual disabilities and autism. Actors gain confidence, social skills, friends.. Mission: Through collaborative performance and lifelong learning opportunities, people with intellectual and developmental disabilities gain the skills and confidence to engage with the world.\n\nArtStream fuels students' imagination, creativity, and focus. We offer over 850 classes and workshops each year for 1,617 participants, six Theatre Companies totaling 90 participants and four Cabaret Companies totaling 30-40 participants, all of whom create and perform original theater works.\n\nWHY ARTSTREAM?\nPeople with Intellectual and Developmental Disabilities - including Autism - frequently face isolation or marginalization, and are excluded from activities and spaces where community, friendships, and connections are made. Creative opportunities are even fewer and farther between. In ArtStream’s drama and performing arts classes, workshops, and theatre companies, participants",
            "ein": "371516235",
            "name": "ArtStream, Inc.",
            "profileUrl": "https://www.every.org/art-stream",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/xc9a93dyflxqkonurmis",
            "logoCloudinaryId": "faja_profile/xc9a93dyflxqkonurmis",
            "matchedTerms": []
        },
        {
            "description": "Teaching teens to relentlessly fight for positive social change through practical application of the performing arts since 1999.. A BRIEF HISTORY & MISSION\nDeveloping Artists (DA) teaches undervalued teens to relentlessly fight for positive social change through practical application of the performing arts.  We help diverse students to proclaim themselves as artists and activists, to find their place and their connection in their community, and to bring about positive social change through participation in the arts. \n\nDA offers rigorous theater education to underserved high school students (aged 13-19) in the New York City metropolitan area and produces REBEL VERSES Youth Arts Festival. Our goal is to provide young people with professional performing arts training that will equip them with valuable artistic and life skills, and the confidence to take action in their lives. \nDA was founded in 1999 with a simple act of protest against youth discrimination. Following Artistic Director Ji",
            "ein": "202798203",
            "name": "Developing Artists Theater Company",
            "profileUrl": "https://www.every.org/developingartists",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ghdeoij4exczvld9i7rf",
            "logoCloudinaryId": "faja_profile/ghdeoij4exczvld9i7rf",
            "matchedTerms": []
        },
        {
            "description": "ECDC is the only professional, non-profit, contemporary dance company in New Haven. . Elm City Dance Collective (ECDC) began in 2008 as a conversation between four dance artists in the New Haven area. Kellie Ann Lynch, Lindsey Bauer, Jennifer Brubacher and Millie VandenBroek envisioned an organization that would offer classes in a variety of movement forms, as well as choreographic and performance opportunities for local dance artists. In addition, the founders discussed a shared commitment to building community and connection through art. They chose the name Elm City Dance Collective to honor the significance of community and place, as New Haven was dubbed the “Elm City” after a number of majestic elm trees were planted there during a public tree planting program.",
            "ein": "264490963",
            "name": "Elm City Dance Collective Inc",
            "profileUrl": "https://www.every.org/elm-city-dance-collective-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zcq3xxbpwpfusbzl7eej",
            "logoCloudinaryId": "profile_pics/zcq3xxbpwpfusbzl7eej",
            "matchedTerms": []
        },
        {
            "description": "If Innovation Foundation is a nonprofit organization focused on the production of artists working in film and new media.\n\n\n\n.",
            "ein": "475128821",
            "name": "If Innovation Foundation",
            "profileUrl": "https://www.every.org/if-innovation-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/fc4c4p1q1wcbrwg5h9qu",
            "logoCloudinaryId": "profile_pics/fc4c4p1q1wcbrwg5h9qu",
            "matchedTerms": []
        }
    ],
    "disabilities": [
        {
            "description": "Fistula Foundation focuses exclusively on delivering fistula repair surgery because of its enormous impact.. With each surgery we provide, we know that we can help change one woman’s world forever. And we know that the ripple effect of her restored health—on both her family and community—is profound.",
            "ein": "770547201",
            "name": "Fistula Foundation",
            "profileUrl": "https://www.every.org/fistula-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_cover/ff_wxsztl",
            "logoCloudinaryId": "faja_cover/ff_wxsztl",
            "matchedTerms": []
        },
        {
            "description": "Uplifting spirits across the globe by delivering inspiring handmade cards.. Cardz for Kidz is dedicated to uplifting the spirits of people of all ages across the globe by delivering inspiring handmade cards. We've been able to partner with independent artists, nonprofits, corporations, and schools to create over 300,000 cards that have been sent around the world. We partner with other global nonprofits (e.g. Ronald McDonald House Charities, Make-A-Wish, Amnesty International), as well as donating cards to local hospitals, nonprofits, and schools impacted by tragedy. Please join in if you're interested in making a difference.",
            "ein": "461594296",
            "name": "Cardz for Kidz",
            "profileUrl": "https://www.every.org/cardzforkidz",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/respdi6tjnmwiqvy1nrv",
            "logoCloudinaryId": "profile_pics/respdi6tjnmwiqvy1nrv",
            "matchedTerms": []
        },
        {
            "description": "The Dyslexia Reading Center Of Central Pennsylvania, based in Pine Grove Mills, focuses on helping those with dyslexia. .",
            "ein": "473337746",
            "name": "Dyslexia Reading Center Of Central Pennsylvania",
            "profileUrl": "https://www.every.org/drccpa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ptvszogyakhftnl8l5k4",
            "logoCloudinaryId": "profile_pics/ptvszogyakhftnl8l5k4",
            "matchedTerms": []
        },
        {
            "description": "We strive to empower individuals and end stigmas regarding addiction, HIV, HCV and mental illness.. We provide comprehensive services to assist people in achieving their highest level of personal empowerment.\n\nOur programs include:\n- Syringe Services\n- Prevention, Care & Navigation Services\n- Vaccinations",
            "ein": "815416993",
            "name": "One Voice Recovery",
            "profileUrl": "https://www.every.org/onevoicerecovery",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/31034005_2026011600986119_1369706411082578150_o_eayzsp",
            "logoCloudinaryId": "31034005_2026011600986119_1369706411082578150_o_eayzsp",
            "matchedTerms": []
        },
        {
            "description": "Through sport, Special Olympics is building communities of acceptance and inclusion for all people. . Special Olympics provides year-round sports training and athletic competition in a variety of Olympic-type sports for children and adults with intellectual disabilities, giving them continuing opportunities to develop physical fitness, demonstrate courage, experience joy and participate in a sharing of gifts, skills and friendship with their families, other Special Olympics athletes and the community.",
            "ein": "520889518",
            "name": "Special Olympics",
            "profileUrl": "https://www.every.org/special-olympics",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/jj5cfrow8sywxqi9rzo2",
            "logoCloudinaryId": "faja_profile/jj5cfrow8sywxqi9rzo2",
            "matchedTerms": []
        },
        {
            "description": "Habitat for Humanity NWMA is a nonprofit org serving Cobb, Douglas, & Paulding GA, giving a hand up through decent shelter.. In 1985, Chrys and John Street met Millard Fuller, who challenged them to start an affiliate of Habitat for Humanity in Cobb County, GA. They distributed brochures to local churches and gathered 12 people to form a Board of Directors. On April 1, 1986, Cobb County Habitat for Humanity was officially incorporated as an affiliate of Habitat for Humanity International. In 2008, the organization expanded to include Douglas and Paulding counties and the name changed to Habitat for Humanity of Northwest Metro Atlanta. Since 1986, over 500 homes have been built, rehabilitated, or repaired as part of our pursuit to provide decent, affordable housing in Cobb, Douglas, and Paulding counties. \n\nWe are driven by the vision that everyone deserves a decent place to live, and our mission states that: \"Seeking to put God’s love into action, Habitat for Humanity brings people to",
            "ein": "581686320",
            "name": "Habitat For Humanity of Northwest Metro Atlanta",
            "profileUrl": "https://www.every.org/habitatnwma",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yegjikoq1hwv6cgs9xss",
            "logoCloudinaryId": "profile_pics/yegjikoq1hwv6cgs9xss",
            "matchedTerms": []
        },
        {
            "description": "Building specially adapted custom homes for severely injured Veterans nationwide.. To build and donate specially adapted custom homes nationwide for severely injured post – 9/11 Veterans, to enable them to rebuild their lives.",
            "ein": "542143612",
            "name": "Homes For Our Troops",
            "profileUrl": "https://www.every.org/hfotusa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/veanicuiiipubonsr4ci",
            "logoCloudinaryId": "faja_profile/veanicuiiipubonsr4ci",
            "matchedTerms": []
        },
        {
            "description": "Pull Up Park Jam is a nonprofit community fitness organization. It received nonprofit status in 2015.. The World's Longest-Running Calisthenics Competition\n\nTHE WORD CALISTHENICS DERIVES FROM THE GREEK TERMS KALOS, MEANING BEAUTY, AND STENOS, MEANING STRENGTH.  CALISTHENICS IS A FORM OF EXERCISE IN WHICH PEOPLE USE ONLY THE WEIGHT OF THEIR BODY AS RESISTANCE.  BECAUSE OF ITS SIMPLICITY CALISTHENICS IS ACCESSIBLE TO A WIDER RANGE OF PEOPLE WHO DO NOT HAVE ACCESS TO A GYM.  ADDITIONALLY, WITH NO ADDED WEIGHTS, CALISTHENICS IS A SAFER LIFE-LONG ACTIVITY FOR PEOPLE FROM AGE 1 TO AGE 100.\n\nO U R  H I S T O R Y:  T H I S  I S  W H E R E  I T  B E G A N \n\nTHERE IS NO ORGANIZATION THAT HAS CULTIVATED THE CALISTHENICS COMMUNITY LONGER THAN THE PULL UP PARK JAM.  FOUNDED IN BROOKLYN, NEW YORK CITY IN 1998 BY RAY FUNN AND KEITH FIELDS, THE EVENT OPERATED AS A NON-PROFIT UNDER THE DIRECTION OF RODNEY \"REDD\" HARRISON.  THE PULL UP PARK JAM GREW TO BE THE LARGEST CALISTHENICS COMPETITION IN THE WOR",
            "ein": "300745794",
            "name": "CHICAGO PULL UP PARK JAM",
            "profileUrl": "https://www.every.org/pull-up-park-jam-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/mpy6ut3nkpclkuepjvc8",
            "logoCloudinaryId": "profile_pics/mpy6ut3nkpclkuepjvc8",
            "matchedTerms": []
        },
        {
            "description": "Theatre starring people with intellectual disabilities and autism. Actors gain confidence, social skills, friends.. Mission: Through collaborative performance and lifelong learning opportunities, people with intellectual and developmental disabilities gain the skills and confidence to engage with the world.\n\nArtStream fuels students' imagination, creativity, and focus. We offer over 850 classes and workshops each year for 1,617 participants, six Theatre Companies totaling 90 participants and four Cabaret Companies totaling 30-40 participants, all of whom create and perform original theater works.\n\nWHY ARTSTREAM?\nPeople with Intellectual and Developmental Disabilities - including Autism - frequently face isolation or marginalization, and are excluded from activities and spaces where community, friendships, and connections are made. Creative opportunities are even fewer and farther between. In ArtStream’s drama and performing arts classes, workshops, and theatre companies, participants",
            "ein": "371516235",
            "name": "ArtStream, Inc.",
            "profileUrl": "https://www.every.org/art-stream",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/xc9a93dyflxqkonurmis",
            "logoCloudinaryId": "faja_profile/xc9a93dyflxqkonurmis",
            "matchedTerms": []
        },
        {
            "description": "Committed to supporting autistic individuals to achieve their maximum potential, while building connections for a happy life. Optimal Rhythms uses our unique neurologic approach to provide a therapeutic K-12 day school, ACCESS Academy; our A2A K-12 and adult virtual education programs; and an innovative Summer \"CAN-Do\" Camp for student with complex communication, motor, and sensory needs. We challenge communities to #rethinkautism by providing valuable training to equip parents and professionals to best support the sensory and communication needs of nonspeaking individuals.  Our Rethinking Autism Programs bring crucial training and resources to parents/caregivers, teachers, therapists, medical professionals and first responders.  We help those who care for nonspeaking children and adults to recognize their true potential, provide effective supports and accommodations, and afford them the human rights we all enjoy. Individuals who gain access to our programs experience acceptance, hope",
            "ein": "463704955",
            "name": "Optimal Rhythms / Access Academy",
            "profileUrl": "https://www.every.org/optimalaccess",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/cd0s4hpvrldgwrnlhxzz",
            "logoCloudinaryId": "profile_pics/cd0s4hpvrldgwrnlhxzz",
            "matchedTerms": []
        }
    ],
    "disease": [
        {
            "description": "One of GiveWell's top charities for the past several years, AMF provides anti-malarial bednets to people in need. . From Givewell: \nWhat do they do? AMF (againstmalaria.com) provides funding for long-lasting insecticide-treated net (LLIN) distributions (for protection against malaria) in developing countries. (More)\n\nDoes it work? There is strong evidence that distributing LLINs reduces child mortality and malaria cases. AMF conducts post-distribution surveys of completed distributions to determine whether LLINs have reached their intended destinations and how long they remain in good condition. AMF's post-distribution surveys have generally found positive results but have some methodological limitations. (More)\n\nWhat do you get for your dollar? We estimate that the cost to purchase and distribute an AMF-funded net is $4.95, or $4.65 excluding in-kind contributions from governments. The numbers of deaths averted and other benefits of distributing LLINs are a function of a number of di",
            "ein": "203069841",
            "name": "The Against Malaria Foundation",
            "profileUrl": "https://www.every.org/againstmalaria",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pmy1aagavepx24qbrdz3",
            "logoCloudinaryId": "faja_profile/pmy1aagavepx24qbrdz3",
            "matchedTerms": []
        },
        {
            "description": "Prevention, control and treatment of malaria and other communicable diseases  among vulnerable populations.. Our mission is to improve lives in Africa and Asia through sustainable, evidence-based programs  that combat targeted diseases and promote child and maternal health. \n\nWe will accomplish this together with partners and all levels of government, by:\n\ndesigning and implementing cutting edge research, surveillance and monitoring and evaluation;\nselectively scaling up and delivering sustainable evidence-based health programmes;\nproviding technical assistance and consulting services that shape and strengthen national and international health policies, strategies and systems and build local capacity;\nseeking to ensure that our experience, thought leadership, practical findings and research results are effectively communicated and contribute to the coordinated improvement of access to and quality of healthcare. \nOur areas of expertise include: \ndisease prevention, diagnosis and treatm",
            "ein": "980627052",
            "name": "Malaria Consortium",
            "profileUrl": "https://www.every.org/malaria-consortium",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/1397449_10151946054631875_574997683_o_vzuqce",
            "logoCloudinaryId": "faja_profile/1397449_10151946054631875_574997683_o_vzuqce",
            "matchedTerms": []
        },
        {
            "description": "We help people in crisis by providing emergency health services, and then promote self-reliance through training.. We are a global humanitarian organization dedicated to saving lives and relieving suffering. Established in 1984 by volunteer doctors and nurses, we are a nonprofit with no political or religious affiliation, and now have more than 7,500 staff members around the world, more than 97% of whom are local. Our mission is to improve the quality of life through health interventions and related activities that strengthen underserved communities worldwide. With the flexibility to respond rapidly to emergencies, we offer medical services and training to people at the highest risk, always working to strengthen local healthcare systems and promote self-reliance.",
            "ein": "953949646",
            "name": "International Medical Corps",
            "profileUrl": "https://www.every.org/international-medical-corps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zwxuhjjxmrayjwbfceg9",
            "logoCloudinaryId": "faja_profile/zwxuhjjxmrayjwbfceg9",
            "matchedTerms": []
        },
        {
            "description": "We use cash transfers to increase immunization rates in Nigeria.. Childhood vaccines prevent an estimated 2 to 3 million deaths every year. They are recognized as one of the most cost-effective child health interventions in low-income countries. Yet, an estimated 19.4 million infants around the world did not receive routine vaccinations in 2018. In Nigeria, 40% of under-five deaths are from vaccine-preventable diseases – low immunisation rates are a significant contributor to its high under-five mortality rate (120 deaths per 1,000 live births). North West Nigeria, where the program operates, is the region with the lowest vaccination coverage in Nigeria.\n\nSee RCT findings here: https://www.newincentives.org/evidence",
            "ein": "452368993",
            "name": "New Incentives",
            "profileUrl": "https://www.every.org/newincentives",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/newnvy0rlvxdz3yx300o",
            "logoCloudinaryId": "profile_pics/newnvy0rlvxdz3yx300o",
            "matchedTerms": []
        },
        {
            "description": "Helen Keller, our co-founder, envisioned a world without barriers to human potential. We are continuing her work.\n. Helen Keller, our co-founder, envisioned a world without barriers to human potential. Guided by her fierce optimism, we have been working on the front lines of health and well-being for more than 100 years. We deliver life-changing health care to vulnerable families in places where the need is great, but access is limited. Our proven, science-based programs empower people to create opportunities in their own lives.",
            "ein": "135562162",
            "name": "Helen Keller International",
            "profileUrl": "https://www.every.org/hki",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wxtloedq3wueneayoaex",
            "logoCloudinaryId": "profile_pics/wxtloedq3wueneayoaex",
            "matchedTerms": []
        },
        {
            "description": "The world's-first funding vehicle to collectively grow our resources to support the long-term flourishing of humanity. \n. This Project focuses on how we can collectively grow our resources to support the long-term flourishing of humanity. It addresses a crucial gap: as a society, we spend much too little on safeguarding and benefiting future generations. In fact, we spend more money on ice cream each year than we do on preventing our own extinction. However, people in the future - who do not have a voice in their future survival or environment - matter. Lots of them may yet come into existence and we have the ability to positively affect their lives now, if only by making sure we avoid major catastrophes that could destroy our common future.\n\nHoused within the Project is the Patient Philanthropy Fund, a philanthropic co-funding vehicle which invests to give and ensures capital is at the ready when extraordinary opportunities to safeguard and improve the long-term future arise.\n\nThe Fu",
            "name": "Founders Pledge Patient Philanthropy Fund",
            "profileUrl": "https://www.every.org/patient-philanthropy-fund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zevurkfrs733iarywsqp",
            "logoCloudinaryId": "profile_pics/zevurkfrs733iarywsqp",
            "matchedTerms": []
        },
        {
            "description": "Controlling and eliminating neglected tropical diseases (NTDs).. Our Mission: To control and eliminate the most prevalent neglected diseases among the world's poorest and most vulnerable people by 2020.",
            "ein": "273941186",
            "name": "The END Fund",
            "profileUrl": "https://www.every.org/end",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/mbyh1ceu5w7p169kxbdz",
            "logoCloudinaryId": "faja_profile/mbyh1ceu5w7p169kxbdz",
            "matchedTerms": []
        },
        {
            "description": "This is about bringing permanent changes to healthcare safety and quality! . Mission Statement- \nNational Nurses March, we value peaceful lifting of our nurse\nvoices united on a national level in an effort to be heard that\nwill promote change nationally for nurses for fair realistic\nwages; including no caps, safe staffing, no violence against\nhealthcare workers, and changing the culture of the biases and\ndiscriminations in the nursing profession.",
            "name": "National Nurses March",
            "profileUrl": "https://www.every.org/nationalnursesmarch",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/bol2h2734m2zroxbzbes",
            "logoCloudinaryId": "profile_pics/bol2h2734m2zroxbzbes",
            "matchedTerms": []
        },
        {
            "description": "Support So They Can to ensure that no girl is left behind. To receive a tax receipt for NZ or AU, please donate via sotheycan.org. Every child deserves access to education. It is a basic human right. Yet in Sub-Saharan Africa, over one fifth of primary school aged children are not in school. That’s just not right. \n\nSo They Can is an international NGO on a mission to change this. They work with vulnerable communities and their governments in Kenya and Tanzania to educate and empower children, so they can break the poverty cycle, realise their own potential and meet their own needs. \n\nOver a 7-10 year development cycle, So They Can works closely with a community to understand their needs and implement projects that will best support them. Throughout the cycle, they develop relationships and ensure transfer of knowledge and management skills to these communities to ensure sustainability of the programs. This enables them to eventually shift to a governance role so we can expand our focu",
            "ein": "471079440",
            "name": "So They Can",
            "profileUrl": "https://www.every.org/so-they-can",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ooqkj5vh19i058jrbmzg",
            "logoCloudinaryId": "profile_pics/ooqkj5vh19i058jrbmzg",
            "matchedTerms": []
        },
        {
            "description": "Protecting sight and fighting for disability rights. Sightsavers works in more than 30 countries worldwide, focusing on Africa and Asia.\nWe work with local, regional, national and international partners and governments. With their help, we distribute treatments to prevent disease, carry out eye operations, advocate for disability rights and improve health services to create sustainable development projects. \n\nOur vision is of a world where avoidable blindness is eliminated, and people with disabilities have the same rights as everyone else. We can only get there thanks to the generosity of our supporters, so we aim to be as transparent as possible so you can be sure your money is being used wisely.",
            "ein": "474657747",
            "name": "Sightsavers",
            "profileUrl": "https://www.every.org/sightsavers",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/lsv0wkjto09abcz1u8fk",
            "logoCloudinaryId": "profile_pics/lsv0wkjto09abcz1u8fk",
            "matchedTerms": []
        }
    ],
    "dogs": [
        {
            "description": "Lil BUB is a one of a kind space cat. Since landing on Earth, she's raised over $500,000 for homeless pets.. Lil BUB’s Big Fund exists to advocate for special needs companion animals and build a community that celebrates and fosters the human animal bond. With a focus on animals who are the most difficult to adopt, the most expensive to care for, and who are at a high risk of euthanasia. Lil BUB’s Big Fund provides grants to shelters nationwide and partners with shelters to create special needs foster program initiatives. We visit schools to promote kindness and inclusion. Through our work, we share BUB’s message of overcoming adversity and the knowledge that the things that make us different are worthy of being seen and appreciated.",
            "ein": "844229672",
            "name": "Lil BUB's Big Fund",
            "profileUrl": "https://www.every.org/lilbubsbigfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dsor2nxk97p87umlwhvt",
            "logoCloudinaryId": "profile_pics/dsor2nxk97p87umlwhvt",
            "matchedTerms": []
        },
        {
            "description": "We empower animal advocates with research, analysis & strategies that maximize their effectiveness to reduce animal suffering.. We conduct essential research, maintain an online research library, and directly support advocates and organizations in their work to save lives. The range of data we offer helps our movement understand how people think about and respond to advocacy, providing advocates with the best strategies to inspire change for animals.\n\nOur Original Studies are carefully selected, designed, and conducted to provide actionable and insightful data for the animal protection movement. Our research prioritization process helps us identify studies that have a high potential impact for animals, and our commitment to transparency and rigorous methodology ensures that our studies are of the highest quality. Our studies have been covered in hundreds of publications across animal advocacy circles as well as in mainstream media, and have been used by animal advocacy groups worldwid",
            "ein": "010686889",
            "name": "Faunalytics",
            "profileUrl": "https://www.every.org/faunalytics",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/e2wt3k3n1fr3vybxcewl",
            "logoCloudinaryId": "faja_profile/e2wt3k3n1fr3vybxcewl",
            "matchedTerms": []
        },
        {
            "description": "From rescue to recovery to adoption, the ASPCA is there for animals every step of the way. . From rescue to recovery to adoption, the ASPCA is there for animals every step of the way. We pride ourselves in not just saving lives, but in changing them for the better—and none of it would be possible without the support of people like you. When you donate to the ASPCA today, you can help us continue to fight for animals on all fronts. Please make a gift right now.",
            "ein": "131623829",
            "name": "ASPCA",
            "profileUrl": "https://www.every.org/aspca",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/lxpdv8l7foiog5tqsuy2",
            "logoCloudinaryId": "faja_profile/lxpdv8l7foiog5tqsuy2",
            "matchedTerms": []
        },
        {
            "description": "Placing senior dogs in loving, home settings for the duration of their lives.. Our mission is: To provide a loving home, good food, high quality vet care, compassion and comfort to senior dogs for the remainder of their lives.  To build a ForeverFoster Home network to enable us to place more senior dogs in loving, home settings for the duration of their lives. To provide education on the joys and challenges of caring for aging dogs.",
            "ein": "455084188",
            "name": "Old Friends Senior Dog Sanctuary",
            "profileUrl": "https://www.every.org/ofsds",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yklhari6ifd5ndwcm86a",
            "logoCloudinaryId": "profile_pics/yklhari6ifd5ndwcm86a",
            "matchedTerms": []
        },
        {
            "description": "Saving dogs from a life of despair, every single day.. The mission of Dogs Deserve Better, Inc., is to provide a better life for abused, neglected and abandoned canines; especially those which are chained or penned …without human companionship. We strive to accomplish this through advocating for humane legislation; promoting spay and neuter; educating communities on animal welfare; and rescuing and rehabilitating distressed canines. Afficher la suite",
            "ein": "030480223",
            "name": "Dogs Deserve Better",
            "profileUrl": "https://www.every.org/dogs-deserve-better",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/nl3qaq2q1i5sq5pfev4y",
            "logoCloudinaryId": "faja_profile/nl3qaq2q1i5sq5pfev4y",
            "matchedTerms": []
        },
        {
            "description": "BLLAR is an all-volunteer organization, with a mission of rescuing stray, abandoned & abused animals from shelters and the streets. Big Little Life Rescue is an all-volunteer, non-profit 501 (c3) organization, with a mission of rescuing stray, abandoned, and abused animals. Our goal is to seek out the most desperate situations for these animals locally and internationally. \nWe aim to provide shelter, conduct TNVR (Trap/Neuter/Vaccinate/Release) programs, rehabilitation, medical treatment, foster care, and forever homes. We also believe in community education and increasing public awareness on the importance of excellent preventative health practice and population/disease control with sterilization and vaccination. \nOur group came together after years of volunteering in other organizations individually and a common life-long, deep love and respect for animals. Each of us see animals as beautiful, sentient beings, who are capable of unconditional love and acceptance. We believe that ani",
            "ein": "853870390",
            "name": "Big Little Life Animal Rescue International Inc",
            "profileUrl": "https://www.every.org/biglittlelife",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/koday0g8yx6vrxwu852j",
            "logoCloudinaryId": "profile_pics/koday0g8yx6vrxwu852j",
            "matchedTerms": []
        },
        {
            "description": "Providing service dogs and training for veterans, most of our dogs are from shelters..  Working Dogs For Vets Mission is to provide service dogs and training to veterans in need, empowering them as they return to civilian life with a new found independence, while simultaneously reducing the overcrowding in animal shelters. Working Dogs For Vets & NO VETERAN LEFT BEHIND goal is to help every VETERAN  in need of a  Service dog.",
            "ein": "472426504",
            "name": "Working dogs for vets",
            "profileUrl": "https://www.every.org/workingdogsforvets",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/l7q40yjm6m6gx8uljfu8",
            "logoCloudinaryId": "faja_profile/l7q40yjm6m6gx8uljfu8",
            "matchedTerms": []
        },
        {
            "description": "Promotes the use of the No Kill Equation to help shelters save every healthy, treatable homeless pet.. No Kill Colorado is an 501c3 organization working to improve the Animal Shelter system in Colorado. Thousands of pets are killed each year in Colorado because of the lack of life saving programs that can be implemented without additional cost, and possibly adding revenue to the current funds provided to municipal shelters.\n\nMoney doesn't save lives - people do.  But money makes it a heck of a lot easier to reach people.\n\nPromoting adoption and fostering is a major program we campaign for throughout the year.  We successfully have helped organizations get hundreds of animals home from our Home for the Holdiays cmapign every year.\n\nWe put a bounty on pets  going to foster or a permanent home.  rganizations that particpate receive $50 from us for every pet 3 or more years old, or at any age with special needs.\n\nLearn more here: https://www.nokillcolorado.org/home-for-the-holidays-2021",
            "ein": "462180014",
            "name": "No Kill Colorado",
            "profileUrl": "https://www.every.org/nokillcolorado",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/c7jnrpqkogssxcvejoav",
            "logoCloudinaryId": "faja_profile/c7jnrpqkogssxcvejoav",
            "matchedTerms": []
        },
        {
            "description": "A nonprofit crowdfunding platform that works directly with pet owners and animal shelters to help save pets in medical crisis.. Waggle serves and connects people who care for the wellness of pets—from those in financial need to those who can financially help and everyone in between. 100% of funds go directly to the veterinary partner providing care.",
            "ein": "320518559",
            "name": "Waggle",
            "profileUrl": "https://www.every.org/waggle",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kspp8zzfhgdczam7svd7",
            "logoCloudinaryId": "faja_profile/kspp8zzfhgdczam7svd7",
            "matchedTerms": []
        },
        {
            "description": "To improve the welfare of animals in Asia, resulting in better lives for both the animal and human communities.. Soi Dog Foundation (Soi Dog) was established in 2003 in Phuket, Thailand, to help the street dogs and cats who had no-one else to care for them. Over 70,000 strays roamed the island, with the numbers growing alarmingly due to a lack of spay and neuter programmes to control the population. Soi Dog was created to provide a humane and sustainable solution to managing the stray population and to address their medical needs. Funding then, as it does now, came entirely from individuals who shared, and continue to share, the vision of our founders.",
            "ein": "271600444",
            "name": "Soi Dog Foundation",
            "profileUrl": "https://www.every.org/soi-dog",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/bg03fmmd2q9khqtorg9q",
            "logoCloudinaryId": "profile_pics/bg03fmmd2q9khqtorg9q",
            "matchedTerms": []
        }
    ],
    "education": [
        {
            "description": "The Multidisciplinary Association for Psychedelic Studies supports psychedelic and cannabis research, education and policy reform.. Founded in 1986, the Multidisciplinary Association for Psychedelic Studies (MAPS) is a visionary 501(c)(3) non-profit organization ushering the safe and ethical use of psychedelics as tools for healing and growth on individual, familial, societal, and planetary levels.\n\nMAPS’ top priority is ethically introducing global access to MDMA-assisted therapy as a treatment for posttraumatic stress disorder (PTSD) through regulatory approvals and training certification for therapy providers, as well as public education, policy reform, and building community support networks.\n\nHow Your Donation Will Help\n\nWhile the MDMA drug development program is the main priority of MAPS, the organization's programs include research into other psychedelic compounds and provide critical resources for researchers around the world interested in studying psychedelics. These resource",
            "ein": "592751953",
            "name": "MAPS",
            "profileUrl": "https://www.every.org/maps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/o7qkdrwh9jsjwv3inrph",
            "logoCloudinaryId": "profile_pics/o7qkdrwh9jsjwv3inrph",
            "matchedTerms": []
        },
        {
            "description": "Lil BUB is a one of a kind space cat. Since landing on Earth, she's raised over $500,000 for homeless pets.. Lil BUB’s Big Fund exists to advocate for special needs companion animals and build a community that celebrates and fosters the human animal bond. With a focus on animals who are the most difficult to adopt, the most expensive to care for, and who are at a high risk of euthanasia. Lil BUB’s Big Fund provides grants to shelters nationwide and partners with shelters to create special needs foster program initiatives. We visit schools to promote kindness and inclusion. Through our work, we share BUB’s message of overcoming adversity and the knowledge that the things that make us different are worthy of being seen and appreciated.",
            "ein": "844229672",
            "name": "Lil BUB's Big Fund",
            "profileUrl": "https://www.every.org/lilbubsbigfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dsor2nxk97p87umlwhvt",
            "logoCloudinaryId": "profile_pics/dsor2nxk97p87umlwhvt",
            "matchedTerms": []
        },
        {
            "description": "Giving children in the U.S. and around the world a healthy start in life, the opportunity to learn and protection from harm.. Save the Children believes every child deserves a future. Since our founding more than 100 years ago, we’ve changed the lives of more than 1 billion children. In the United States and around the world, we give children a healthy start in life, the opportunity to learn and protection from harm. We do whatever it takes for children – every day and in times of crisis – transforming their lives and the future we share.",
            "ein": "060726487",
            "name": "Save the Children",
            "profileUrl": "https://www.every.org/savethechildren",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xugvznpbojeysnwzgyrx",
            "logoCloudinaryId": "profile_pics/xugvznpbojeysnwzgyrx",
            "matchedTerms": []
        },
        {
            "description": "The Fungi Foundation is a global organization that works for the Fungi, their habitats, and the people who depend on them.. Launched in 2012, the Fungi Foundation is the first NGO dedicated to the fungi kingdom. Since its inception, it has achieved numerous milestones while dedicating itself to exploring the fungi world in view of increasing knowledge of their diversity, educating about their applications, and recommending public policy for their conservation. As part of our ongoing 3F initiative, the foundation played a key role in enabling Chile to become the first country in the world to include protection of fungi in its environmental legislation. More recently, the foundation proudly announced the Fantastic Fungi Education Curriculum, the world's first mycological set of courses designed for schools.\n\nIn short, the Fungi Foundation envisions a healthy planet in which Fungi are recognized, protected, and embraced as the interconnectors of nature; a mission that would be impossible",
            "ein": "851478153",
            "name": "Fungi Foundation",
            "profileUrl": "https://www.every.org/ffungi",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wq14eif08jx3kka2ixau",
            "logoCloudinaryId": "profile_pics/wq14eif08jx3kka2ixau",
            "matchedTerms": []
        },
        {
            "description": "Sharing God’s love with people living on the streets of the mid-peninsula 💛 (every donation is being matched X2 right now). Sharing God's love with people living on the streets of the mid-peninsula 💛\n\nWe are a community-based, non-profit organization that serves the homeless and at-risk populations of the Mid-Peninsula. We establish environments and build relationships where community volunteers can provide food and clothing, as well as referrals for shelter, addiction recovery, and other personal support.\n\n_____\n\nStreet Life Ministries (or SLM) began in 2001 at the downtown Menlo Park train station. Today, due to the help of many people, it now serves over 35,000 meals a year, five nights a week, in Menlo Park, Palo Alto and Redwood City. For 20 years SLM gatherings have built a reputation as the one consistent place the homeless can count on. Whether it is a holiday, a cloudy or rainy day, SLM never varies from the set schedule, giving the homeless a stable option throughout the yea",
            "ein": "453602635",
            "name": "Street Life Ministries",
            "profileUrl": "https://www.every.org/streetlifeministries",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ovg1fwrlcpd9uma8umya",
            "logoCloudinaryId": "profile_pics/ovg1fwrlcpd9uma8umya",
            "matchedTerms": []
        },
        {
            "description": "The Centre for Effective Altruism helps to grow and support the effective altruism community.. Effective altruism is about using evidence and reason to figure out how to benefit others as much as possible, and taking action on that basis.",
            "ein": "471988398",
            "name": "Centre for Effective Altruism USA",
            "profileUrl": "https://www.every.org/effectivealtruism",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ppcj7viaq9t8mkx9cav4",
            "logoCloudinaryId": "profile_pics/ppcj7viaq9t8mkx9cav4",
            "matchedTerms": []
        },
        {
            "description": "Empowering young women of color ages 7-17 to embrace the current tech marketplace as builders + creators.. Black Girls CODE is devoted to showing the world that black girls can code, and do so much more. By reaching out to the community through workshops and after school programs, Black Girls CODE introduces computer coding lessons to young girls from underrepresented communities in programming languages such as Scratch or Ruby on Rails. Black Girls CODE has set out to prove to the world that girls of every color have the skills to become the programmers of tomorrow. By promoting classes and programs we hope to grow the number of women of color working in technology and give underprivileged girls a chance to become the masters of their technological worlds. Black Girls CODE's ultimate goal is to provide African-American youth with the skills to occupy some of the 1.4 million computing job openings expected to be available in the U.S. by 2020, and to train 1 million girls by 2040.",
            "ein": "454930539",
            "name": "Black Girls CODE",
            "profileUrl": "https://www.every.org/blackgirlscode",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_cover/bgc_i9r95m",
            "logoCloudinaryId": "faja_cover/bgc_i9r95m",
            "matchedTerms": []
        },
        {
            "description": "A free, collaborative, multilingual Internet encyclopedia.. The mission of the Wikimedia Foundation is to empower and engage people around the world to collect and develop educational content under a free license or in the public domain, and to disseminate it effectively and globally.  In collaboration with a network of chapters, the Foundation provides the essential infrastructure and an organizational framework for the support and development of multilingual wiki projects and other endeavors which serve this mission. The Foundation will make and keep useful information from its projects available on the Internet free of charge, in perpetuity.",
            "ein": "200049703",
            "name": "Wikipedia",
            "profileUrl": "https://www.every.org/wikipedia",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/mfyks8bndfkpbdoswgea",
            "logoCloudinaryId": "profile_pics/mfyks8bndfkpbdoswgea",
            "matchedTerms": []
        },
        {
            "description": "A virtual non-profit organization & antiracist education brand that promotes justice for all.  . 540 provides an online hub for accessible education that promotes justice for all. We create a cultural shift in perspectives and practice through learning rooted in social justice and anti-racism.",
            "ein": "842870050",
            "name": "540WMain",
            "profileUrl": "https://www.every.org/540wmain",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zlp47evyyinbr4faz3jd",
            "logoCloudinaryId": "profile_pics/zlp47evyyinbr4faz3jd",
            "matchedTerms": []
        },
        {
            "description": "Water + Education + Business/Income + Safe Shelter = Building Self Reliant Communities, One Family, One Village at a time . . .. Our latest business initiative in Kenya is Beehives. We have started two apiaries with 25 hives each in two separate villages. The beehives are a long term investment that we expect to pay big dividends in self reliance for these communities. A purchase of 25 Beehives is about a $4000 investment. We received a generous donation from a donor who wishes to remain anonymous. Would you like to be part of the next 25 hives to start another village on the road to self reliance? Make a donation and designate Beehives in your comments. \n\nThe home for Meleon and her children has been completed and on March 27, 2021 her home was blessed by the local minister. Meleon is very grateful for this blessing of a new home made possible for her and her children through your generous donations. Thank You!\n\n\nGabriel, Caroline and Emmanuel, 3 of our students live with their widow",
            "ein": "844844337",
            "name": "No End To Love Inc.",
            "profileUrl": "https://www.every.org/noendtolove",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/hikg4efvagohajiwodth",
            "logoCloudinaryId": "profile_pics/hikg4efvagohajiwodth",
            "matchedTerms": []
        }
    ],
    "environment": [
        {
            "description": "Supporting highly-impactful, evidence-based solutions to the triple challenge of climate change, air pollution and energy poverty.. ## The Founders Pledge Perspective\n\nClimate change is one part of a triple challenge surrounding energy production. Not only does most current energy production lead to damaging carbon emissions, the effects of which are devastating ecosystems and changing our planet beyond recognition, it also pollutes the air and leaves many of the world’s poor without sufficient energy. This adds up to an environmental and humanitarian crisis.\n\nThus, we face a triple challenge: we not only need to drive down carbon emissions to near zero by mid-century, and drastically reduce air pollution, but we need to do so while supporting work to reduce global poverty that will often be accompanied, or even driven, by increased energy consumption.\n\nWe aim to take a holistic approach that recognizes the global nature of this challenge, as well as the fact that, despite its urgency",
            "name": "Climate Change Fund",
            "profileUrl": "https://www.every.org/climate.change.fund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wmkvoumgfdwhnzo6l1wz",
            "logoCloudinaryId": "profile_pics/wmkvoumgfdwhnzo6l1wz",
            "matchedTerms": []
        },
        {
            "description": "Lil BUB is a one of a kind space cat. Since landing on Earth, she's raised over $500,000 for homeless pets.. Lil BUB’s Big Fund exists to advocate for special needs companion animals and build a community that celebrates and fosters the human animal bond. With a focus on animals who are the most difficult to adopt, the most expensive to care for, and who are at a high risk of euthanasia. Lil BUB’s Big Fund provides grants to shelters nationwide and partners with shelters to create special needs foster program initiatives. We visit schools to promote kindness and inclusion. Through our work, we share BUB’s message of overcoming adversity and the knowledge that the things that make us different are worthy of being seen and appreciated.",
            "ein": "844229672",
            "name": "Lil BUB's Big Fund",
            "profileUrl": "https://www.every.org/lilbubsbigfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dsor2nxk97p87umlwhvt",
            "logoCloudinaryId": "profile_pics/dsor2nxk97p87umlwhvt",
            "matchedTerms": []
        },
        {
            "description": "Lil BUB is teaming up with Sycamore Land Trust, Power of Zero to help prevent bullying in schools, and Milo's Sanctuary for pets.. Lil BUB’s Better World Fundraiser raises money for four organizations very close to BUB’s heart by investing in our planet, our children, our pets, and our future.\n\nThe organizations we have chosen to support with this campaign are doing the work that BUB believes in: Sycamore Land Trust for land preservation, Power of Zero to prevent bullying in schools and online, Milo's Sanctuary for the care of homeless pets with special needs, and our own Lil BUB's Big FUND, whose mission is to bring these causes together.\n\nEvery individual donation will be matched up to $100, with a total campaign match of up to $50,000!",
            "name": "Lil BUB's Better World Fundraiser",
            "profileUrl": "https://www.every.org/bubsworld",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kzl3llfffdnhrb5bu8cx",
            "logoCloudinaryId": "profile_pics/kzl3llfffdnhrb5bu8cx",
            "matchedTerms": []
        },
        {
            "description": "We're growing a greener future with millions of trees in the ground and planting projects underway worldwide. \n\n#TEAMTREES. Where are these millions of trees being planted? All over the world! Get the latest info on our current projects at teamtrees.org, or check out our social media for regular updates.",
            "name": "#teamtrees",
            "profileUrl": "https://www.every.org/teamtrees",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zqoc2gbtwxbrnrig0xs8",
            "logoCloudinaryId": "profile_pics/zqoc2gbtwxbrnrig0xs8",
            "matchedTerms": []
        },
        {
            "description": "TerraPraxis designs and implements strategies that leverage science, technology and energy innovation for a prosperous planet. We co-founded TerraPraxis to design and implement strategies that leverage science, technology and energy innovation for a prosperous planet. \n\nOur special focus is on enabling high-impact rapid transitions for neglected parts of the decarbonization challenge. \n\nWe work with an extensive global network to define, incubate and initiate scalable strategies that fulfil the twin missions of prosperity and decarbonization.",
            "name": "TerraPraxis",
            "profileUrl": "https://www.every.org/terrapraxis",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ozuhckx9egnja86ukvja",
            "logoCloudinaryId": "profile_pics/ozuhckx9egnja86ukvja",
            "matchedTerms": []
        },
        {
            "description": "The Fungi Foundation is a global organization that works for the Fungi, their habitats, and the people who depend on them.. Launched in 2012, the Fungi Foundation is the first NGO dedicated to the fungi kingdom. Since its inception, it has achieved numerous milestones while dedicating itself to exploring the fungi world in view of increasing knowledge of their diversity, educating about their applications, and recommending public policy for their conservation. As part of our ongoing 3F initiative, the foundation played a key role in enabling Chile to become the first country in the world to include protection of fungi in its environmental legislation. More recently, the foundation proudly announced the Fantastic Fungi Education Curriculum, the world's first mycological set of courses designed for schools.\n\nIn short, the Fungi Foundation envisions a healthy planet in which Fungi are recognized, protected, and embraced as the interconnectors of nature; a mission that would be impossible",
            "ein": "851478153",
            "name": "Fungi Foundation",
            "profileUrl": "https://www.every.org/ffungi",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wq14eif08jx3kka2ixau",
            "logoCloudinaryId": "profile_pics/wq14eif08jx3kka2ixau",
            "matchedTerms": []
        },
        {
            "description": "Catalyzing resilient solutions, scaled to meet the climate challenge.. CATF is a nonprofit organization dedicated to reducing atmospheric pollution through research, advocacy, and private sector collaboration.",
            "ein": "043512550",
            "name": "Clean Air Task Force",
            "profileUrl": "https://www.every.org/cleanaircatf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/uqm96xaxu1w7mvyoi4hp",
            "logoCloudinaryId": "faja_profile/uqm96xaxu1w7mvyoi4hp",
            "matchedTerms": []
        },
        {
            "description": "We are a think tank dedicated to figuring out the best ways to make the world a better place.. Rethink Priorities is a research organization that conducts critical research to inform policymakers and major foundations about how to best help people and nonhuman animals in both the present and the long-term future.\n\nOur research spans everything from animal welfare to the threat of nuclear war. We explore neglected but promising areas to improve the world and try to further build the community of researchers working on understanding how to do this most effectively.",
            "ein": "843896318",
            "name": "Rethink Priorities",
            "profileUrl": "https://www.every.org/rethinkpriorities",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/i3iknd276i6cw1exfveu",
            "logoCloudinaryId": "profile_pics/i3iknd276i6cw1exfveu",
            "matchedTerms": []
        },
        {
            "description": "We want to make life better for wild animals.. We are dedicated to finding evidence-backed ways to improve the lives of animals in the wild.\n\nWe depend on individual donors to help us make life better for wild animals. To a small nonprofit working hard on a big problem, your support is more crucial now than ever!",
            "ein": "822281466",
            "name": "Wild Animal Initiative",
            "profileUrl": "https://www.every.org/wildanimalinitiative",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wzgsabl4bvjvfl6jezb1",
            "logoCloudinaryId": "profile_pics/wzgsabl4bvjvfl6jezb1",
            "matchedTerms": []
        },
        {
            "description": "Together, we create science-based solutions for a healthy ocean and the wildlife and communities that depend on it.. You love the ocean as much as we do, and we can’t protect it without you.\n\nA healthy ocean means more than beautiful coasts and vibrant ocean wildlife. If the ocean isn’t healthy, neither are we. Because the food we eat, the water we drink and the air we’re breathing this very second comes from our ocean.\n\nOur work is focused on solving some of the greatest threats facing our ocean today. From the Arctic to the Gulf of Mexico, we bring people, science and policy together, to champion innovative solutions and fight for a sustainable ocean.\n\nThat’s why for over forty years we’ve worked to protect vital ecosystems, defend critical legislation, enforce accountability of leaders and legislators and rally the world’s largest effort to remove trash from our beaches. Because a healthy ocean means a healthy planet.",
            "ein": "237245152",
            "name": "Ocean Conservancy",
            "profileUrl": "https://www.every.org/ocean-conservancy",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/pp60avgm8rvzgwkbifel",
            "logoCloudinaryId": "profile_pics/pp60avgm8rvzgwkbifel",
            "matchedTerms": []
        }
    ],
    "filmandtv": [
        {
            "description": "PBS's mission is to inform, to inspire, and to educate.. PBS and more than 350 local stations offer every American opportunities to experience new places, explore new ideas and discover new worlds.",
            "ein": "520899215",
            "name": "Public Broadcasting Service",
            "profileUrl": "https://www.every.org/pbs",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pbslogo_nwlyt2",
            "logoCloudinaryId": "faja_profile/pbslogo_nwlyt2",
            "matchedTerms": []
        },
        {
            "description": "We focus on knowledge, access, community, and equity for Black women in Media and Entertainment.. At Sister Circle Media we are committed to advancing Black women in Media and Entertainment. We make the K.A.C.E (Knowledge, Access, Community, and Equity) for Black women by providing valuable resources and hosting networking events, mentor programs, speaker series and more.",
            "ein": "844282650",
            "name": "Sister Circle Media",
            "profileUrl": "https://www.every.org/sistercirclemedia",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/gygpq6jeautbbdhx9dwo",
            "logoCloudinaryId": "profile_pics/gygpq6jeautbbdhx9dwo",
            "matchedTerms": []
        },
        {
            "description": "The International Beethoven Project celebrates Beethoven's music, life & legacy for the benefit of all. IBP has been NFP ca 2009. . ​​The mission of the International Beethoven Project is threefold: \n\n1) to celebrate Beethoven's music and humanist legacy\n\n2) to make classical music more engaging, exciting and meaningful for all people\n\n3) to serve as an educational resource \n\nBy showcasing Beethoven as the revolutionary musician he was, we believe we can inspire new generations of listeners, performers and arts administrators to appreciate and engage with this art form. To do this, IBP has used many different approaches, from producing numerous events to making films, recordings and educational media.\n\nLaunching the \"International Beethoven Day\" initiative in 2021, IBP seeks to engage even more people across the world in carrying Beethoven's legacy of humanism and music forward.\n\nUpcoming projects include a sweeping multi-media traversal of Beethoven's epic 32 piano sonatas that will",
            "ein": "273205988",
            "name": "International Beethoven Project",
            "profileUrl": "https://www.every.org/internationalbeethovenproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/baxcmclghh6orqlgoytc",
            "logoCloudinaryId": "profile_pics/baxcmclghh6orqlgoytc",
            "matchedTerms": []
        },
        {
            "description": "Women Make Movies elevates diverse women directors and producers and improves equity in the film industry.   \n\n. From cutting-edge documentaries that give depth to today’s headlines to smart, stunning films that push artistic and intellectual boundaries in all genres, Women Make Movies (WMM), a non-profit feminist social enterprise based in New York, is the world’s leading distributor of independent films by and about women. Our Production Assistance Program assists diverse women directors with their productions from concept through completion with fiscal sponsorship, consultations and other technical assistance. We work with creative, ground-breaking films which win awards at festivals around the world. Films and filmmakers we have supported have been nominated for or won Academy® Awards For the last 15 years.",
            "ein": "132740460",
            "name": "Women Make Movies",
            "profileUrl": "https://www.every.org/wmm",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pzicd75nk9ywvdlosjga",
            "logoCloudinaryId": "faja_profile/pzicd75nk9ywvdlosjga",
            "matchedTerms": []
        },
        {
            "description": "The vision of Reach Church is to Reach Up to love God, Reach In to love each other, and Reach Out to love the world.  . BELIEFS \nThe following are the core beliefs of Reach Church based on the foundational truths taught in the Bible. All of our teaching and ministry is rooted in and flows out of these biblical doctrines.\nGod\nThere is one eternally existing God who has three distinct persons: God the Father, God the Son, and God the Holy Spirit. He is the creator of all that exists, both visible and invisible, and is therefore worthy of all glory and praise.  God is perfect in love, power, holiness, goodness, knowledge, wisdom,  justice, and mercy. He is unchangeable and therefore is the same yesterday, today, and tomorrow.\n\nBible\nWe believe the Bible to be the inspired, infallible, authoritative, and the inerrant Word of God.\n\nJesus\nWe believe in the deity of Christ; His virgin birth; His sinless life; His miracles; His substitutionary and atoning death; His resurrection; His ascensio",
            "ein": "840907237",
            "name": "Reach Church",
            "profileUrl": "https://www.every.org/reachchurchco",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/eyikzp8pijzfv0c24qkd",
            "logoCloudinaryId": "profile_pics/eyikzp8pijzfv0c24qkd",
            "matchedTerms": []
        },
        {
            "description": "Public television channels WETA PBS, WETA UK, WETA World, WETA Kids and WETA Metro.. Founded in 1961, WETA is the leading public broadcasting station in the nation’s capital and serves our community with educational, cultural, news and public affairs programs and services.",
            "ein": "530242992",
            "name": "Weta Tv & Fm",
            "profileUrl": "https://www.every.org/weta",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dkggoq8mcsuqpolb0xfl",
            "logoCloudinaryId": "profile_pics/dkggoq8mcsuqpolb0xfl",
            "matchedTerms": []
        },
        {
            "description": "Brings the world of film to local audiences . Utah Film Center inspires and engages diverse audiences to initiate conversation and community building through curated film exhibition, educational programs, and artist support.",
            "ein": "753077559",
            "name": "Utah Film Center",
            "profileUrl": "https://www.every.org/utah-film-center",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/g5l6y1sqyhpacznlwqs6",
            "logoCloudinaryId": "faja_profile/g5l6y1sqyhpacznlwqs6",
            "matchedTerms": []
        },
        {
            "description": "Http://www.filmpreservation.org. The National Film Preservation Foundation is the independent, nonprofit organization created by the U.S. Congress to help save America’s film heritage. Working with archives and others who appreciate film, the NFPF supports activities that save films for future generations, improve film access for education and exhibition, and increase public commitment to preserving film as a cultural resource, art form, and historical record. Established in 1996, the NFPF is the charitable affiliate of the National Film Preservation Board of the Library of Congress.",
            "ein": "522055624",
            "name": "National Film Preservation Foundation",
            "profileUrl": "https://www.every.org/filmpreservation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/wev5ymlp2vfnxwnfv4dy",
            "logoCloudinaryId": "faja_profile/wev5ymlp2vfnxwnfv4dy",
            "matchedTerms": []
        },
        {
            "description": "We create a unique blend of theatrical and musical experiences through professional performance and education for all people.. As a professional theatre in the St. Croix Valley, The Zephyr Theatre produces productions of the highest quality that are visually, acoustically, and artistically beautiful. We create and revive classic musicals and plays, while incorporating music, musical cultures, and dance into the live arts in meaningful ways. We provide a testing ground for new ideas and projects, while providing a place for the community and youth to learn and grow to their full potential in the arts.",
            "ein": "811157243",
            "name": "Stillwater Zephyr Theatre",
            "profileUrl": "https://www.every.org/stillwater-zephyr-theatre",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ai4zp0mqxrwcrdttjlxf",
            "logoCloudinaryId": "faja_profile/ai4zp0mqxrwcrdttjlxf",
            "matchedTerms": []
        },
        {
            "description": "Teaching teens to relentlessly fight for positive social change through practical application of the performing arts since 1999.. A BRIEF HISTORY & MISSION\nDeveloping Artists (DA) teaches undervalued teens to relentlessly fight for positive social change through practical application of the performing arts.  We help diverse students to proclaim themselves as artists and activists, to find their place and their connection in their community, and to bring about positive social change through participation in the arts. \n\nDA offers rigorous theater education to underserved high school students (aged 13-19) in the New York City metropolitan area and produces REBEL VERSES Youth Arts Festival. Our goal is to provide young people with professional performing arts training that will equip them with valuable artistic and life skills, and the confidence to take action in their lives. \nDA was founded in 1999 with a simple act of protest against youth discrimination. Following Artistic Director Ji",
            "ein": "202798203",
            "name": "Developing Artists Theater Company",
            "profileUrl": "https://www.every.org/developingartists",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ghdeoij4exczvld9i7rf",
            "logoCloudinaryId": "faja_profile/ghdeoij4exczvld9i7rf",
            "matchedTerms": []
        }
    ],
    "food-security": [
        {
            "description": "Delivering unconditional cash directly to the world's poorest households via secure mobile transfers. . COVID-19 has pushed 150 million more people into extreme poverty worldwide. You can empower them to meet their needs by giving unconditional cash transfers to the poorest households in the US and Africa. Why cash? Because the best way to alleviate poverty is to make people less poor. If the disruption of pandemic taught us anything, we need simple, direct ways to help the most vulnerable. Giving directly is a fast, efficient, proven, and empowering way to do so.",
            "ein": "271661997",
            "name": "GiveDirectly",
            "profileUrl": "https://www.every.org/givedirectly",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/rdbzfnryksvqzdjeqtka",
            "logoCloudinaryId": "faja_profile/rdbzfnryksvqzdjeqtka",
            "matchedTerms": []
        },
        {
            "description": "Giving children in the U.S. and around the world a healthy start in life, the opportunity to learn and protection from harm.. Save the Children believes every child deserves a future. Since our founding more than 100 years ago, we’ve changed the lives of more than 1 billion children. In the United States and around the world, we give children a healthy start in life, the opportunity to learn and protection from harm. We do whatever it takes for children – every day and in times of crisis – transforming their lives and the future we share.",
            "ein": "060726487",
            "name": "Save the Children",
            "profileUrl": "https://www.every.org/savethechildren",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xugvznpbojeysnwzgyrx",
            "logoCloudinaryId": "profile_pics/xugvznpbojeysnwzgyrx",
            "matchedTerms": []
        },
        {
            "description": "The largest hunger-relief organization in the US. We feed America's hungry through a nationwide network of member food banks.. From Seattle to New Rochelle, from Baton Rouge to San Francisco, food banks across the country are doing what they do best – feeding people in need within their communities. The Feeding America network is the largest hunger-relief organization in the United States including in disasters and national emergencies. Our mission is to feed America's hungry through a nationwide network of member food banks and engage our country in the fight to end hunger. You can help.",
            "ein": "363673599",
            "name": "Feeding America",
            "profileUrl": "https://www.every.org/feedingamerica",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/qeaepmtovdqvzx0nnmfa",
            "logoCloudinaryId": "faja_profile/qeaepmtovdqvzx0nnmfa",
            "matchedTerms": []
        },
        {
            "description": "Developing the roadmap for a sustainable, secure, and just global protein supply 🧫🌱. We work with scientists, investors, and entrepreneurs to make groundbreaking good food a reality. We focus on clean meat and plant-based alternatives to animal products—foods that are more delicious, safer to eat, and better for the planet than their outdated counterparts.\n\nWe provide marketing, design, legal, business, media, and other support to a select number of early-stage companies producing clean and plant-based products. For established companies, we help their products succeed in the marketplace by mobilizing millions of supportive consumers to encourage their sale in stores, restaurants, and foodservice outlets.\n\n To help launch the next generation of innovators, we connect students, scientists, and entrepreneurs with opportunities in the academic and for-profit sectors. We connect jobs, funding, and scientific positions with those who want to put their passion and skills to use to create a",
            "ein": "810840578",
            "name": "The Good Food Institute",
            "profileUrl": "https://www.every.org/gfi",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/j7pfmjuvafvflihgbaf3",
            "logoCloudinaryId": "faja_profile/j7pfmjuvafvflihgbaf3",
            "matchedTerms": []
        },
        {
            "description": "Sharing God’s love with people living on the streets of the mid-peninsula 💛 (every donation is being matched X2 right now). Sharing God's love with people living on the streets of the mid-peninsula 💛\n\nWe are a community-based, non-profit organization that serves the homeless and at-risk populations of the Mid-Peninsula. We establish environments and build relationships where community volunteers can provide food and clothing, as well as referrals for shelter, addiction recovery, and other personal support.\n\n_____\n\nStreet Life Ministries (or SLM) began in 2001 at the downtown Menlo Park train station. Today, due to the help of many people, it now serves over 35,000 meals a year, five nights a week, in Menlo Park, Palo Alto and Redwood City. For 20 years SLM gatherings have built a reputation as the one consistent place the homeless can count on. Whether it is a holiday, a cloudy or rainy day, SLM never varies from the set schedule, giving the homeless a stable option throughout the yea",
            "ein": "453602635",
            "name": "Street Life Ministries",
            "profileUrl": "https://www.every.org/streetlifeministries",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ovg1fwrlcpd9uma8umya",
            "logoCloudinaryId": "profile_pics/ovg1fwrlcpd9uma8umya",
            "matchedTerms": []
        },
        {
            "description": "We help people in crisis by providing emergency health services, and then promote self-reliance through training.. We are a global humanitarian organization dedicated to saving lives and relieving suffering. Established in 1984 by volunteer doctors and nurses, we are a nonprofit with no political or religious affiliation, and now have more than 7,500 staff members around the world, more than 97% of whom are local. Our mission is to improve the quality of life through health interventions and related activities that strengthen underserved communities worldwide. With the flexibility to respond rapidly to emergencies, we offer medical services and training to people at the highest risk, always working to strengthen local healthcare systems and promote self-reliance.",
            "ein": "953949646",
            "name": "International Medical Corps",
            "profileUrl": "https://www.every.org/international-medical-corps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zwxuhjjxmrayjwbfceg9",
            "logoCloudinaryId": "faja_profile/zwxuhjjxmrayjwbfceg9",
            "matchedTerms": []
        },
        {
            "description": "Water + Education + Business/Income + Safe Shelter = Building Self Reliant Communities, One Family, One Village at a time . . .. Our latest business initiative in Kenya is Beehives. We have started two apiaries with 25 hives each in two separate villages. The beehives are a long term investment that we expect to pay big dividends in self reliance for these communities. A purchase of 25 Beehives is about a $4000 investment. We received a generous donation from a donor who wishes to remain anonymous. Would you like to be part of the next 25 hives to start another village on the road to self reliance? Make a donation and designate Beehives in your comments. \n\nThe home for Meleon and her children has been completed and on March 27, 2021 her home was blessed by the local minister. Meleon is very grateful for this blessing of a new home made possible for her and her children through your generous donations. Thank You!\n\n\nGabriel, Caroline and Emmanuel, 3 of our students live with their widow",
            "ein": "844844337",
            "name": "No End To Love Inc.",
            "profileUrl": "https://www.every.org/noendtolove",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/hikg4efvagohajiwodth",
            "logoCloudinaryId": "profile_pics/hikg4efvagohajiwodth",
            "matchedTerms": []
        },
        {
            "description": "We are feeding those in need during Covid-19 by offering free meals from local restaurants to seniors, the sick and those in need.. FreeMeals.org is a Pleasanton based non-profit on a mission to feed the needy during Covid-19 crisis while helping local restaurants.\n\nWe buy nutritious meals from local restaurants through tax deductible donations to feed seniors, the sick and those unable to pay for food. \n\nWe are volunteer run and 100% of the donations are used for buying a free meal.\n\nWe are requesting donations of:\n\n$25 to feed 1 family of 4, or\n$50 to feed 2 families or\n$100 to feed 4 families\nLarger amount to feed more families!\n\nTogether, let’s ensure no child, senior, sick or unemployed sleeps hungry tonight.\n\nLearn more at www.freemeals.org",
            "ein": "263642056",
            "name": "FreeMeals",
            "profileUrl": "https://www.every.org/freemeals",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/8E52A520-E987-482B-82AF-031B7F1C6978_nv97yv",
            "logoCloudinaryId": "faja_profile/8E52A520-E987-482B-82AF-031B7F1C6978_nv97yv",
            "matchedTerms": []
        },
        {
            "description": "A hot plate of food when it’s needed most. For people fighting or fleeing disasters, we are here. . Ten years ago, my wife Patricia and I had a big dream to start World Central Kitchen. We envisioned an organization that would create smart solutions to hunger and poverty, and for many years we saw an amazing impact through our clean cookstoves initiative, culinary training programs, and social enterprise ventures that empower communities and strengthen economies. But we had no idea we would one day be answering the call in Puerto Rico and around the world – “Food First Responders” serving millions of meals each year. In the process, we learned that a small NGO can change the world through the power of food.\n\nLast year, WCK activated in response to dozens of disasters — some of them natural, and some man-made. From serving children in the shelters on our border with Mexico to making deliveries by lamplight to those keeping watch over beaches in Indonesia, our fight to feed the hungry h",
            "ein": "273521132",
            "name": "World Central Kitchen",
            "profileUrl": "https://www.every.org/worldcentralkitchen",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ty9azacoven3riyd6z9l",
            "logoCloudinaryId": "faja_profile/ty9azacoven3riyd6z9l",
            "matchedTerms": []
        },
        {
            "description": "YTB is Youth TimeBanking: Youth-Adult partnership of giving & receiving opportunities to support community & build strengths.. Definition: Youth TimeBanking is a community service practice for supporting youth to increase awareness of community organizations and expand their network of social supports.  YTB is experiential learning in the interests of building community connections.  YTB also introduces youth to principles of co-production and servant leadership.  When youth are involved with community they strengthen their connections to their community and learn about Civic Engagement.  As youth continue with YTB they experience co-production -- a model in which each person contributes to the plan, process, practice, and outcome.\n\nVision: YTB's Vision is that all youth transition to adulthood with the experience of demonstrating responsibility for service with others and connections to their community.  YTB is a system of service exchange that leverages the talents, capabilities, an",
            "ein": "843685123",
            "name": "YTBRN.org Youth TimeBanking",
            "profileUrl": "https://www.every.org/ytbrn",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/v6bwcispxn7rcijxar0u",
            "logoCloudinaryId": "profile_pics/v6bwcispxn7rcijxar0u",
            "matchedTerms": []
        }
    ],
    "freepress": [
        {
            "description": "Realizing the promise of the Bill of Rights for all - the ACLU dares to create a more perfect union.. The ACLU dares to create a more perfect union — beyond one person, party, or side. Our mission is to realize this promise of the United States Constitution for all and expand the reach of its guarantees.",
            "ein": "136213516",
            "name": "ACLU Foundation",
            "profileUrl": "https://www.every.org/aclu",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/aclu_wtqwdg",
            "logoCloudinaryId": "faja_profile/aclu_wtqwdg",
            "matchedTerms": []
        },
        {
            "description": "Prison Journalism Project trains incarcerated writers to become journalists and publishes their stories.. Prison Journalism Project is launching its first-ever year-end fundraising campaign! We're hoping to raise $30,000 in donations by December 31, and your year-end gift of up to $1,000 will be matched, up to $20,000 total thanks to Newsmatch, the Independence Media Foundation, and the Loud Hound Partner Fund. \n\nThis is an exciting time for us and the future of our work. \n\nAs an all-volunteer team, we've published more than 1,000 stories from over 390 writers across 150+ prisons in 35 states; we started a print newspaper, PJP x Inside, for people in prison by people in prison; and we created PJP J-School with a faculty of veteran journalists who are working with our first cohort of 15 promising writers.\n\nRight now our plan is to sink everything into our training programs and the journalism itself — your donation will make a huge impact as we still scramble to cover daily expenses req",
            "name": "Prison Journalism Project",
            "profileUrl": "https://www.every.org/prisonjournalismproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kuiffyv51ybrdqngmgql",
            "logoCloudinaryId": "profile_pics/kuiffyv51ybrdqngmgql",
            "matchedTerms": []
        },
        {
            "description": "We defend your civil liberties in a digital world.. The first line of defense when your rights in the digital world come under attack. EFF champions user privacy, free expression, and innovation through impact litigation, policy analysis, grassroots activism, and technology development. We work to ensure that rights and freedoms are enhanced and protected as our use of technology grows.",
            "ein": "043091431",
            "name": "Electronic Frontier Foundation (EFF)",
            "profileUrl": "https://www.every.org/eff",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/y8fhgkj9yzfln60ssjfn",
            "logoCloudinaryId": "faja_profile/y8fhgkj9yzfln60ssjfn",
            "matchedTerms": []
        },
        {
            "description": "Center for Books Arts is a nonprofit that promotes active explorations of artistic practices related to the book as an art object.. For nearly 50 years, CBA has supported artists and uplifted the book arts by presenting exhibitions, lectures, readings, and performances; providing opportunities for artists, writers, curators and scholars through residencies, fellowships, publishing, and collecting; and empowering the creation of new book art by providing courses on book art related We are committed to providing a nurturing environment for our community in New York City and beyond to grow and learn together. Our studios and virtual educational programming make accessible the equipment and skills needed for artists and writers to take book production into their own hands, and giving creative voices a tool to self amplify without the need to rely on the gallery model or commercial pressures.\n\nFounded in 1974, Center for Book Arts was the first not-for-profit organization of its kind in th",
            "ein": "132842726",
            "name": "Center for Book Arts",
            "profileUrl": "https://www.every.org/centerforbookarts",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/urweliiyrumrkpumznzx",
            "logoCloudinaryId": "profile_pics/urweliiyrumrkpumznzx",
            "matchedTerms": []
        },
        {
            "description": "Universal access to all knowledge. Non-profit library of millions of free books, movies, software, music, websites, and more.. The Internet Archive, a 501(c)(3) non-profit, is building a digital library of Internet sites and other cultural artifacts in digital form. Like a paper library, we provide free access to researchers, historians, scholars, the print disabled, and the general public. Our mission is to provide Universal Access to All Knowledge.\n\nWe began in 1996 by archiving the Internet itself, a medium that was just beginning to grow in use. Like newspapers, the content published on the web was ephemeral - but unlike newspapers, no one was saving it. Today we have 20+ years of web history accessible through the Wayback Machine and we work with 625+ library and other partners through our Archive-It program to identify important web pages.",
            "ein": "943242767",
            "name": "Internet Archive",
            "profileUrl": "https://www.every.org/archive",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ldpmbw4q5nfkaisc93pp",
            "logoCloudinaryId": "faja_profile/ldpmbw4q5nfkaisc93pp",
            "matchedTerms": []
        },
        {
            "description": "Covering America’s criminal justice system.. The Marshall Project is a nonpartisan, nonprofit news organization that seeks to create and sustain a sense of national urgency about the U.S. criminal justice system. We achieve this through award-winning journalism, partnerships with other news outlets and public forums. In all of our work we strive to educate and enlarge the audience of people who care about the state of criminal justice.",
            "ein": "464353634",
            "name": "The Marshall Project",
            "profileUrl": "https://www.every.org/themarshallproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/snwqohrj27bn2g3s4wsg",
            "logoCloudinaryId": "faja_profile/snwqohrj27bn2g3s4wsg",
            "matchedTerms": []
        },
        {
            "description": "We collect, preserve, and provide access to community media in order to inspire and celebrate everyone's cultural contributions.. Read/Write Library is the only library of its kind in the world and seeks to be a model for other cities to leverage their own media as a tool to recognize their residents' power and expertise in shaping local histories.\n\nUnlike a traditional read-only library, we encourage contributions, whether community newspapers, self-published chapbooks by young poets, or art books by tenured professors, making cultural participation more transparent and accessible. \n\nThrough our public programs and free browsing hours, growing collection of over 6,000 publications, and open source catalog, the library strives to raise the visibility of work produced by Chicagoans of all backgrounds to reveal connective threads across neighborhoods, generations, and cultures and to encourage inquiry into and ownership of the historical record. \n\nWe recognize the contributions that all",
            "ein": "270791563",
            "name": "Read / Write Library Chicago",
            "profileUrl": "https://www.every.org/read-write-library.org",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/iv7ptd3guyoyy1ofpwrx",
            "logoCloudinaryId": "profile_pics/iv7ptd3guyoyy1ofpwrx",
            "matchedTerms": []
        },
        {
            "description": "Devoted to encouraging political journalists to live up to the highest standards of their profession.. At this point, no one can possibly argue that political journalism has fulfilled its essential missions of creating an informed electorate and holding the powerful accountable.\n\nBut our top newsroom leaders have seen no need for a course change. In particular, they have failed to respond to the growing asymmetry between the political parties, even as one became overtly counter-majoritarian, anti-democratic, and unmoored to reality.\n\nPress Watch agitates for change. It encourages reporters to fight disinformation more enthusiastically and effectively, especially when our democracy and people’s lives are at stake. It identifies best practices that others can emulate. It urges the reality-based parts of the industry to  explicitly condemn Fox News and other far-right propaganda outlets as disinformation operations.",
            "ein": "861518589",
            "name": "Press Watch",
            "profileUrl": "https://www.every.org/presswatch",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/diubkeqvtflmway2kys7",
            "logoCloudinaryId": "profile_pics/diubkeqvtflmway2kys7",
            "matchedTerms": []
        },
        {
            "description": "Exposing cross-border crime, corruption, and the accountability of power, and helping journalists to become better watchdogs.. ICIJ fights corruption with the world's best cross-border watchdog journalism by more than 249 investigative reporters in 90 countries.  Our newsroom works on global collaborative investigations that hold the powerful to account.",
            "ein": "814739107",
            "name": "The International Consortium of Investigative Journalists",
            "profileUrl": "https://www.every.org/icij",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/sydgkllvvlbqid8ak5qu",
            "logoCloudinaryId": "faja_profile/sydgkllvvlbqid8ak5qu",
            "matchedTerms": []
        },
        {
            "description": "Freedom of the Press Foundation protects, defends, and empowers public-interest journalism in the 21st century.. The Freedom of the Press Foundation is built on the recognition that this kind of transparency journalism — from publishing the Pentagon Papers and exposing Watergate, to uncovering the NSA’s warrantless wiretapping program and CIA secret prisons — doesn’t just happen. It requires dogged work by journalists, and often, the courage of whistleblowers and others who work to ensure that the public actually learns what it has a right to know.  But in a changing economic and technological age, media organizations are increasingly susceptible to corporate or government pressure. This can lead to watered-down or compromised coverage, or worse: censorship.  Increasingly, non-profit media and transparency organizations are emerging as a critical component of the journalism landscape. Leveraging the power of the Internet, these organizations are helping to reinvent and reimagine indep",
            "ein": "460967274",
            "name": "Freedom of the Press Foundation",
            "profileUrl": "https://www.every.org/freedom-of-the-press-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ps6t8s2kvq8j2dqycw2v",
            "logoCloudinaryId": "profile_pics/ps6t8s2kvq8j2dqycw2v",
            "matchedTerms": []
        }
    ],
    "gender-equality": [
        {
            "description": "Giving children in the U.S. and around the world a healthy start in life, the opportunity to learn and protection from harm.. Save the Children believes every child deserves a future. Since our founding more than 100 years ago, we’ve changed the lives of more than 1 billion children. In the United States and around the world, we give children a healthy start in life, the opportunity to learn and protection from harm. We do whatever it takes for children – every day and in times of crisis – transforming their lives and the future we share.",
            "ein": "060726487",
            "name": "Save the Children",
            "profileUrl": "https://www.every.org/savethechildren",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xugvznpbojeysnwzgyrx",
            "logoCloudinaryId": "profile_pics/xugvznpbojeysnwzgyrx",
            "matchedTerms": []
        },
        {
            "description": "Fights global poverty by empowering girls and women. Join us.. CARE is a global leader within a worldwide movement dedicated to ending poverty. We are known everywhere for our unshakeable commitment to the dignity of people. We seek a world of hope, inclusion and social justice, where poverty has been overcome and all people live with dignity and security.",
            "ein": "131685039",
            "name": "CARE",
            "profileUrl": "https://www.every.org/care",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/uy2u0sizbe4ze1dvafbz",
            "logoCloudinaryId": "faja_profile/uy2u0sizbe4ze1dvafbz",
            "matchedTerms": []
        },
        {
            "description": "Focused on the engagement, education and empowerment of girls and women.. Girls in Tech (GIT) is a global non-profit focused on the engagement, education and empowerment of girls and women who are passionate about technology. Our aim is to accelerate the growth of innovative women who are entering into the high-tech industry and building successful startups.",
            "ein": "454106759",
            "name": "Girls in Tech",
            "profileUrl": "https://www.every.org/girlsintech",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/j66vpwl6dvlp5yzv8yyb",
            "logoCloudinaryId": "profile_pics/j66vpwl6dvlp5yzv8yyb",
            "matchedTerms": []
        },
        {
            "description": "We’re America’s most trusted provider of reproductive health care.. The mission of Planned Parenthood is to provide comprehensive reproductive and complementary health care services in settings that preserve and protect the essential privacy and rights of each individual, to advocate public policies that guarantee these rights and ensure access to such services, to provide educational programs that enhance understanding of individual and societal implications of human sexuality, to promote research and the advancement of technology in reproductive health care and encourage understanding of their inherent bioethical, behavioral, and social implications.\n\nFounded in 1916, Planned Parenthood is a trusted health care provider, educator, and passionate advocate here in the U.S. as well as a strong partner to health and rights organizations around the world. Each year, Planned Parenthood delivers vital sexual and reproductive health care, sex education, and information to millions of people",
            "ein": "131644147",
            "name": "Planned Parenthood",
            "profileUrl": "https://www.every.org/plannedparenthood",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ozgwfkleoyvzjxfapnnx",
            "logoCloudinaryId": "profile_pics/ozgwfkleoyvzjxfapnnx",
            "matchedTerms": []
        },
        {
            "description": "FinMango brings education, inclusion, and advocacy to youth around the world.. FinMango is an NGO (501c3 non-profit) based in the United States offering financial education, economic mobility, and advocacy to young people worldwide. Through our impressive technical capabilities and a strong network of teachers, partners, and volunteers, the organization reaches over a million young people each year. Learn more at finmango.org",
            "ein": "812543425",
            "name": "FinMango",
            "profileUrl": "https://www.every.org/finmango",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/iulpzj1j3rjv9nrhh0fd",
            "logoCloudinaryId": "faja_profile/iulpzj1j3rjv9nrhh0fd",
            "matchedTerms": []
        },
        {
            "description": "Working for a world where all girls can learn and lead without fear.. With more than 130 million girls out of school today, here’s how we’re breaking down barriers that hold girls back.\n\nThrough our Education Champion Network, we invest in local educators and advocates — the people who best understand girls in their communities — in regions where the most girls are missing out on secondary school.\n\nWe advocate — at local, national and international levels — for resources and policy changes needed to give all girls a secondary education. The girls we serve have high goals for themselves — and we have high expectations for leaders who can help them.\n\nWe believe girls should speak for themselves and tell leaders what they need to learn and achieve their potential. We amplify girls’ voices and share their stories through Assembly, our digital publication and newsletter.",
            "ein": "811397590",
            "name": "Malala Fund",
            "profileUrl": "https://www.every.org/malala",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/sctah8ythklwo1am29ns",
            "logoCloudinaryId": "faja_profile/sctah8ythklwo1am29ns",
            "matchedTerms": []
        },
        {
            "description": "UN & civil society partnership supporting women working to build peace & respond to crises on the frontlines.. The Women’s Peace & Humanitarian Fund is an innovative partnership empowering local women to be a force for crisis response and lasting peace.\n\nWe galvanize support from across the globe to support the efforts of women working on the frontlines of the world’s most intractable conflicts. \n\nHumanitarian crises and threats to peace are more common than ever before. Studies show that when women are empowered to meaningfully participate in conflict resolution, it undeniably results in more lasting peace. \n\nWomen’s inclusion in peace processes makes humanitarian assistance more effective, strengthens the efforts of peacekeepers, prevents radicalization and the spread of extremism, and accelerates the economic recovery of conflict-affected communities.\n\nDonate today to support the women's vital work to prevent conflict, respond to crises, and accelerate peace in their communities.",
            "name": "Women's Peace & Humanitarian Fund",
            "profileUrl": "https://www.every.org/wphfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/nonakqqaxoboo6gzeqoh",
            "logoCloudinaryId": "profile_pics/nonakqqaxoboo6gzeqoh",
            "matchedTerms": []
        },
        {
            "description": "Ensuring access to safe water, sanitation, and hygiene since 2007. . We envision a better world, where all have access to living conditions that allow empowerment and development. Together, we aim to ensure sustainable access to safe water and sanitation for the most vulnerable communities through innovative partnerships, creativity and the power of art.",
            "ein": "263242787",
            "name": "One Drop Foundation",
            "profileUrl": "https://www.every.org/onedrop",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/adtf4n2mjlz7hjndot81",
            "logoCloudinaryId": "profile_pics/adtf4n2mjlz7hjndot81",
            "matchedTerms": []
        },
        {
            "description": "The largest health movement for Black women.. GirlTrek, the largest public health nonprofit for African-American women and girls in the United States. With nearly 100,000 neighborhood walkers, GirlTrek encourages women to use walking as a practical first step to inspire healthy living, families, and communities. As women organize walking teams, they mobilize community members to support monthly advocacy efforts and lead a civil rights-inspired health movement.\n\nBeyond walking, GirlTrek’s active members support local and national policy to increase physical activity through walking, improve access to safe places to walk, protect and reclaim green spaces, and improve the walkability and built environments of 50 high-need communities across the United States.\n\nWith Partnership for a Healthier America, The Centers for Disease Control, Stanford Prevention Research Center, The American Council on Exercise, Safe Routes to School National Partnership, and The Sierra Club, GirlTrek has develop",
            "ein": "061811886",
            "name": "GirlTrek: Healthy Black Women and Girls",
            "profileUrl": "https://www.every.org/girltrek",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/m733uyhzdyvslyfsaqcs",
            "logoCloudinaryId": "profile_pics/m733uyhzdyvslyfsaqcs",
            "matchedTerms": []
        },
        {
            "description": "Support So They Can to ensure that no girl is left behind. To receive a tax receipt for NZ or AU, please donate via sotheycan.org. Every child deserves access to education. It is a basic human right. Yet in Sub-Saharan Africa, over one fifth of primary school aged children are not in school. That’s just not right. \n\nSo They Can is an international NGO on a mission to change this. They work with vulnerable communities and their governments in Kenya and Tanzania to educate and empower children, so they can break the poverty cycle, realise their own potential and meet their own needs. \n\nOver a 7-10 year development cycle, So They Can works closely with a community to understand their needs and implement projects that will best support them. Throughout the cycle, they develop relationships and ensure transfer of knowledge and management skills to these communities to ensure sustainability of the programs. This enables them to eventually shift to a governance role so we can expand our focu",
            "ein": "471079440",
            "name": "So They Can",
            "profileUrl": "https://www.every.org/so-they-can",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ooqkj5vh19i058jrbmzg",
            "logoCloudinaryId": "profile_pics/ooqkj5vh19i058jrbmzg",
            "matchedTerms": []
        }
    ],
    "health": [
        {
            "description": "The Multidisciplinary Association for Psychedelic Studies supports psychedelic and cannabis research, education and policy reform.. Founded in 1986, the Multidisciplinary Association for Psychedelic Studies (MAPS) is a visionary 501(c)(3) non-profit organization ushering the safe and ethical use of psychedelics as tools for healing and growth on individual, familial, societal, and planetary levels.\n\nMAPS’ top priority is ethically introducing global access to MDMA-assisted therapy as a treatment for posttraumatic stress disorder (PTSD) through regulatory approvals and training certification for therapy providers, as well as public education, policy reform, and building community support networks.\n\nHow Your Donation Will Help\n\nWhile the MDMA drug development program is the main priority of MAPS, the organization's programs include research into other psychedelic compounds and provide critical resources for researchers around the world interested in studying psychedelics. These resource",
            "ein": "592751953",
            "name": "MAPS",
            "profileUrl": "https://www.every.org/maps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/o7qkdrwh9jsjwv3inrph",
            "logoCloudinaryId": "profile_pics/o7qkdrwh9jsjwv3inrph",
            "matchedTerms": []
        },
        {
            "description": "One of GiveWell's top charities for the past several years, AMF provides anti-malarial bednets to people in need. . From Givewell: \nWhat do they do? AMF (againstmalaria.com) provides funding for long-lasting insecticide-treated net (LLIN) distributions (for protection against malaria) in developing countries. (More)\n\nDoes it work? There is strong evidence that distributing LLINs reduces child mortality and malaria cases. AMF conducts post-distribution surveys of completed distributions to determine whether LLINs have reached their intended destinations and how long they remain in good condition. AMF's post-distribution surveys have generally found positive results but have some methodological limitations. (More)\n\nWhat do you get for your dollar? We estimate that the cost to purchase and distribute an AMF-funded net is $4.95, or $4.65 excluding in-kind contributions from governments. The numbers of deaths averted and other benefits of distributing LLINs are a function of a number of di",
            "ein": "203069841",
            "name": "The Against Malaria Foundation",
            "profileUrl": "https://www.every.org/againstmalaria",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pmy1aagavepx24qbrdz3",
            "logoCloudinaryId": "faja_profile/pmy1aagavepx24qbrdz3",
            "matchedTerms": []
        },
        {
            "description": "Giving children in the U.S. and around the world a healthy start in life, the opportunity to learn and protection from harm.. Save the Children believes every child deserves a future. Since our founding more than 100 years ago, we’ve changed the lives of more than 1 billion children. In the United States and around the world, we give children a healthy start in life, the opportunity to learn and protection from harm. We do whatever it takes for children – every day and in times of crisis – transforming their lives and the future we share.",
            "ein": "060726487",
            "name": "Save the Children",
            "profileUrl": "https://www.every.org/savethechildren",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xugvznpbojeysnwzgyrx",
            "logoCloudinaryId": "profile_pics/xugvznpbojeysnwzgyrx",
            "matchedTerms": []
        },
        {
            "description": "Hoop For All is a 501(c)3 nonprofit that uses sports to create health awareness and financially aid patients during treatment.. Our five health focuses are cancer, cardiovascular disease, diabetes, mental health, and HIV/aids. We create awareness by executing sporting events that provide resources on prevention, diagnosis, and treatment. Our events also serve as a platform to financially aid affected patients during the treatment and recovery process. In 2018, we launched the Hoop For All Ambassador Program to train and mentor students interested in careers within the sports, health, and entertainment industry.",
            "ein": "812658409",
            "name": "Hoop For All Foundation",
            "profileUrl": "https://www.every.org/hoopforall",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/b8ua3o4lag20cs6phnpa",
            "logoCloudinaryId": "profile_pics/b8ua3o4lag20cs6phnpa",
            "matchedTerms": []
        },
        {
            "description": "Prevention, control and treatment of malaria and other communicable diseases  among vulnerable populations.. Our mission is to improve lives in Africa and Asia through sustainable, evidence-based programs  that combat targeted diseases and promote child and maternal health. \n\nWe will accomplish this together with partners and all levels of government, by:\n\ndesigning and implementing cutting edge research, surveillance and monitoring and evaluation;\nselectively scaling up and delivering sustainable evidence-based health programmes;\nproviding technical assistance and consulting services that shape and strengthen national and international health policies, strategies and systems and build local capacity;\nseeking to ensure that our experience, thought leadership, practical findings and research results are effectively communicated and contribute to the coordinated improvement of access to and quality of healthcare. \nOur areas of expertise include: \ndisease prevention, diagnosis and treatm",
            "ein": "980627052",
            "name": "Malaria Consortium",
            "profileUrl": "https://www.every.org/malaria-consortium",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/1397449_10151946054631875_574997683_o_vzuqce",
            "logoCloudinaryId": "faja_profile/1397449_10151946054631875_574997683_o_vzuqce",
            "matchedTerms": []
        },
        {
            "description": "Sharing God’s love with people living on the streets of the mid-peninsula 💛 (every donation is being matched X2 right now). Sharing God's love with people living on the streets of the mid-peninsula 💛\n\nWe are a community-based, non-profit organization that serves the homeless and at-risk populations of the Mid-Peninsula. We establish environments and build relationships where community volunteers can provide food and clothing, as well as referrals for shelter, addiction recovery, and other personal support.\n\n_____\n\nStreet Life Ministries (or SLM) began in 2001 at the downtown Menlo Park train station. Today, due to the help of many people, it now serves over 35,000 meals a year, five nights a week, in Menlo Park, Palo Alto and Redwood City. For 20 years SLM gatherings have built a reputation as the one consistent place the homeless can count on. Whether it is a holiday, a cloudy or rainy day, SLM never varies from the set schedule, giving the homeless a stable option throughout the yea",
            "ein": "453602635",
            "name": "Street Life Ministries",
            "profileUrl": "https://www.every.org/streetlifeministries",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ovg1fwrlcpd9uma8umya",
            "logoCloudinaryId": "profile_pics/ovg1fwrlcpd9uma8umya",
            "matchedTerms": []
        },
        {
            "description": "We operate worldwide, helping people affected by conflict and armed violence and promoting the laws that protect victims of war..",
            "ein": "986001029",
            "name": "International Committee Of The Red Cross",
            "profileUrl": "https://www.every.org/icrc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/jzxg1doouuxpysk1b0pi",
            "logoCloudinaryId": "profile_pics/jzxg1doouuxpysk1b0pi",
            "matchedTerms": []
        },
        {
            "description": "We help people in crisis by providing emergency health services, and then promote self-reliance through training.. We are a global humanitarian organization dedicated to saving lives and relieving suffering. Established in 1984 by volunteer doctors and nurses, we are a nonprofit with no political or religious affiliation, and now have more than 7,500 staff members around the world, more than 97% of whom are local. Our mission is to improve the quality of life through health interventions and related activities that strengthen underserved communities worldwide. With the flexibility to respond rapidly to emergencies, we offer medical services and training to people at the highest risk, always working to strengthen local healthcare systems and promote self-reliance.",
            "ein": "953949646",
            "name": "International Medical Corps",
            "profileUrl": "https://www.every.org/international-medical-corps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zwxuhjjxmrayjwbfceg9",
            "logoCloudinaryId": "faja_profile/zwxuhjjxmrayjwbfceg9",
            "matchedTerms": []
        },
        {
            "description": "We use cash transfers to increase immunization rates in Nigeria.. Childhood vaccines prevent an estimated 2 to 3 million deaths every year. They are recognized as one of the most cost-effective child health interventions in low-income countries. Yet, an estimated 19.4 million infants around the world did not receive routine vaccinations in 2018. In Nigeria, 40% of under-five deaths are from vaccine-preventable diseases – low immunisation rates are a significant contributor to its high under-five mortality rate (120 deaths per 1,000 live births). North West Nigeria, where the program operates, is the region with the lowest vaccination coverage in Nigeria.\n\nSee RCT findings here: https://www.newincentives.org/evidence",
            "ein": "452368993",
            "name": "New Incentives",
            "profileUrl": "https://www.every.org/newincentives",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/newnvy0rlvxdz3yx300o",
            "logoCloudinaryId": "profile_pics/newnvy0rlvxdz3yx300o",
            "matchedTerms": []
        },
        {
            "description": "We are a think tank dedicated to figuring out the best ways to make the world a better place.. Rethink Priorities is a research organization that conducts critical research to inform policymakers and major foundations about how to best help people and nonhuman animals in both the present and the long-term future.\n\nOur research spans everything from animal welfare to the threat of nuclear war. We explore neglected but promising areas to improve the world and try to further build the community of researchers working on understanding how to do this most effectively.",
            "ein": "843896318",
            "name": "Rethink Priorities",
            "profileUrl": "https://www.every.org/rethinkpriorities",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/i3iknd276i6cw1exfveu",
            "logoCloudinaryId": "profile_pics/i3iknd276i6cw1exfveu",
            "matchedTerms": []
        }
    ],
    "hinduism": [
        {
            "description": "Promoting human dignity, mutual respect, and pluralism. . Founded in 2003, HAF’s work impacts a range of issues — from the portrayal of Hinduism in K-12 textbooks to civil and human rights to addressing contemporary problems, such as environmental protection and inter-religious conflict, by applying Hindu philosophy.\n\nThe Foundation educates the public about Hinduism, speaks out about issues affecting Hindus worldwide, and builds bridges with institutions and individuals whose work aligns with HAF’s objectives. Through its advocacy efforts, HAF promotes dignity, mutual respect, and pluralism in order to ensure the well-being of Hindus and for all people and the planet to thrive.",
            "ein": "680551525",
            "name": "Hindu American Foundation",
            "profileUrl": "https://www.every.org/hinduamerican",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/hinduamerican_ib3zqf",
            "logoCloudinaryId": "hinduamerican_ib3zqf",
            "matchedTerms": []
        },
        {
            "description": "Matagiri is dedicated to the vision of Sri Aurobindo and the Mother and the international community of Auroville.. We are in the 150th year since Sri Aurobindo’s birth and doing our best to honor the sacred trust of maintaining and expanding the buildings and grounds of our Center.\n\nOur residential team has worked on landscaping, hosted live concerts and continued our online study circles.\n\nWe hold weekly hatha yoga classes and Pilates mat classes and special Darshan gatherings.\n\nWe maintain a library of over 1200 titles and a bookstore, gallery and boutique with handcrafted gifts from the international community of Auroville. Our gallery features the paintings of Matagiri founder, Sam Spanier. Open by appointment.",
            "ein": "132915643",
            "name": "Matagiri Sri Aurobindo Center Inc",
            "profileUrl": "https://www.every.org/matagiri-sri-aurobindo-center-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/uezv6gennyznrkyhvmpn",
            "logoCloudinaryId": "profile_pics/uezv6gennyznrkyhvmpn",
            "matchedTerms": []
        },
        {
            "description": "Since 1994, Hindu Heritage Endowment has worked to help people and strengthen Hindu communities around the globe.. If you are one who has been touched by Hindu thought and culture, you may wish to further enrich your life by giving back to Sanatana Dharma in countries around the globe and helping preserve its rich heritage for future generations. Hindu Heritage Endowment (HHE) provides such an opportunity. A public charitable trust recognized by the United States government, HHE was created to maintain permanent endowments for Hindu projects and institutions worldwide. Its endowments benefit orphanages, children's schools, ashrams and temples. They support priests and publish books; and they are designed to continue giving that financial support year after year, decade after decade, century after century.\n\nThe staff at HHE is one-pointed in their dedication to seeing that qualified donations will be used effectively for the purposes intended. Each beneficiary must give a detailed year",
            "ein": "990308924",
            "name": "Hindu Heritage Endowment",
            "profileUrl": "https://www.every.org/hheonline",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/lruox76ujgrmmxg7a1tg",
            "logoCloudinaryId": "profile_pics/lruox76ujgrmmxg7a1tg",
            "matchedTerms": []
        },
        {
            "description": "Educating the public about all aspects of Hinduism ranging from history and philosophy to current events that impact Hindus.. Hindupedia, the Hindu Encyclopedia, is devoted to educating the public about all aspects of Hinduism ranging from history and philosophy to current events that impact Hindus.",
            "ein": "271488493",
            "name": "Hindupedia",
            "profileUrl": "https://www.every.org/hindupedia",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/uzmaj0b8fsrh9kaqiygr",
            "logoCloudinaryId": "faja_profile/uzmaj0b8fsrh9kaqiygr",
            "matchedTerms": []
        },
        {
            "description": "To serve Sai devotees and spread the philosophy of Sai Baba. Om Sai Mandir is a unique sai baba mandir. This Sai Baba temple in Flushing, NY, is dedicated to both Shirdi Sai Baba and Sathya Sai Baba.",
            "ein": "900152703",
            "name": "Om Sai Mandir - Sai Baba Temple, Flushing, NY",
            "profileUrl": "https://www.every.org/omsaimandir",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/bhidydwdcquma8qlswd5",
            "logoCloudinaryId": "faja_profile/bhidydwdcquma8qlswd5",
            "matchedTerms": []
        },
        {
            "description": "Our top-rated Nonprofit safeguards and shares Himalayan meditation and indigenous knowledge from the ancient Sanskrit heritage.. Self Enquiry Life Fellowship is a nonprofit organization with worldwide outreach guided by the monastic wisdom of the Hansavedas Mission. The Nonprofit, with its headquarters in California, preserves indigenous knowledge from the Sanskrit heritage, including: extant literature on spiritual philosophy that is meaningful to modern inquiry; spiritual practices of Vedic antiquity that bring about peace in our communities through mindful participation; Himalayan yoga-vinyāsa and Ayurveda that promote wellness and mindfulness in daily living; and Himalayan meditation techniques of unbroken lineages which bring about mental clarity and compassion through self-empowerment, ultimately guiding the meditator to liberation.\n\nThe organization is enriched with extraordinary guidance from several Vedic monks of ancient monastic orders. It is rare for reclusive Himalayan mo",
            "ein": "203478668",
            "name": "Hansavedas Fellowship",
            "profileUrl": "https://www.every.org/hansavedas",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xtv2tourqmwt5g2bjqij",
            "logoCloudinaryId": "profile_pics/xtv2tourqmwt5g2bjqij",
            "matchedTerms": []
        },
        {
            "description": "Center for Inner Resources Development for the pursuit and promotion of Inner Resources Development.. CIRD-NA was founded in 2007 in Virginia as a branch of the Narayanashrama Tapovanam Ashram located in Thrissur, Kerala, India. CIRD-NA is an IRS 501c(3) not-for-profit spiritual and educational organization, which disseminates education based on Vedanta, an ancient Indian school of spiritual philosophy. CIRD-NA’s mission is to promote the realization of oneness in existence through development of the mind, and thereby to work for universal welfare and harmony.",
            "ein": "205802581",
            "name": "CIRD - NA",
            "profileUrl": "https://www.every.org/cirdna",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/avxpm9aqsmcrpnubaa8v",
            "logoCloudinaryId": "profile_pics/avxpm9aqsmcrpnubaa8v",
            "matchedTerms": []
        },
        {
            "description": "Sri Panchamukha Hanuman (With Five kinds of divine faces) is embodiment of divine energy of the Universe.. In this Unique Temple, Sri Hanuman is worshiped with five faces: -\n1. The front face of Sri Hanuman in His own form,\n2. Sri Garuda – the form of Vedas, The Knowledge,\n3. Sri Hayagreeva the horse faced incarnation,\n4. Sri Varaha – The mighty boar faced incarnation,\n5. Sri Narasimha – The Lion faced incarnation of Sri Maha\nVishnu Who is the Supreme protector of all semi god & creatures. Sri Panchamukha Hanuman is the form all these great powers of God to serve Sri Rama and to effectively protect and bless all His devotees and the Universe for years.",
            "ein": "460809783",
            "name": "Sri Panchamukha Hanuman Temple And Religious Academy",
            "profileUrl": "https://www.every.org/sri-panchamukha-hanuman-temple-and-religious-academy",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/lxsg5k5fciqnt8mev7mk",
            "logoCloudinaryId": "profile_pics/lxsg5k5fciqnt8mev7mk",
            "matchedTerms": []
        },
        {
            "ein": "770577041",
            "name": "Sujnana Religious and Charitable Foundation",
            "profileUrl": "https://www.every.org/skvtemple",
            "matchedTerms": []
        },
        {
            "description": "An religious or spiritual organization. It received its nonprofit status in 2020..",
            "ein": "823463925",
            "name": "World Hindu Organization",
            "profileUrl": "https://www.every.org/world-hindu-organization",
            "matchedTerms": []
        }
    ],
    "housing": [
        {
            "description": "Sharing God’s love with people living on the streets of the mid-peninsula 💛 (every donation is being matched X2 right now). Sharing God's love with people living on the streets of the mid-peninsula 💛\n\nWe are a community-based, non-profit organization that serves the homeless and at-risk populations of the Mid-Peninsula. We establish environments and build relationships where community volunteers can provide food and clothing, as well as referrals for shelter, addiction recovery, and other personal support.\n\n_____\n\nStreet Life Ministries (or SLM) began in 2001 at the downtown Menlo Park train station. Today, due to the help of many people, it now serves over 35,000 meals a year, five nights a week, in Menlo Park, Palo Alto and Redwood City. For 20 years SLM gatherings have built a reputation as the one consistent place the homeless can count on. Whether it is a holiday, a cloudy or rainy day, SLM never varies from the set schedule, giving the homeless a stable option throughout the yea",
            "ein": "453602635",
            "name": "Street Life Ministries",
            "profileUrl": "https://www.every.org/streetlifeministries",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ovg1fwrlcpd9uma8umya",
            "logoCloudinaryId": "profile_pics/ovg1fwrlcpd9uma8umya",
            "matchedTerms": []
        },
        {
            "description": "SIPA enriches and empowers generations of Pilipino Americans and others in Historic Filipinotown and throughout Los Angeles.. SIPA is a 501(c)3 nonprofit organization serving Historic Filipinotown and other neighborhoods throughout Greater Los Angeles County. SIPA produces programs for youth and families including case management and counseling, after school programs, senior programs, small business development, cultural enrichment, and affordable housing.",
            "ein": "952879339",
            "name": "Search To Involve Pilipino Americans",
            "profileUrl": "https://www.every.org/sipacares",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/m4oe7clznkvtilq7he78",
            "logoCloudinaryId": "profile_pics/m4oe7clznkvtilq7he78",
            "matchedTerms": []
        },
        {
            "description": "Interpreting Freedom Foundation, is a nationally registered 501(c)3, committed to supporting our Afghan Interpreters and Allies.. www.InterpretingFreedom.org Founded in 2018, The Interpreting Freedom Foundation, a National Nonprofit, a registered 501(c)3 organization, committed to supporting our Afghan Interpreters, allies, and families as they transition to their new life as community members of our United States of America.\n \nWe provide comprehensive support services for all US combat interpreters who were engaged in Operation Enduring Freedom. These military and special ops interpreters played a critical role in the battlefield alongside US Armed Forces.\n \nPlease visit our webpage at www.InterpretingFreedom.org. On there, you will see that we are in many ways very different from other nonprofits. We go out of our way to be highly transparent about the stewarding and spending of your generous donor dollars. On our page, you will see a counter which tracks many of the services we hav",
            "ein": "831204288",
            "name": "Interpreting Freedom Foundation",
            "profileUrl": "https://www.every.org/interpreting-freedom-foundation-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/sc6yudflr8akfjlq3c5n",
            "logoCloudinaryId": "profile_pics/sc6yudflr8akfjlq3c5n",
            "matchedTerms": []
        },
        {
            "description": "\"Providing relief and recovery in the wake of major disasters, traumatic events and social injustice.\" -AWB. Acupuncturists Without Borders (AWB) provides immediate disaster relief and recovery to communities that are in crisis resulting from disaster or human conflict. AWB is committed to creating alliances with local community based organizations and treating all who have been affected - survivors, first responders, emergency personnel and other care providers.  AWB uses community-style acupuncture to provide caring, compassionate treatment in a group setting. This model of treatment allows everyone treated to experience relief from stress and trauma together. When the entire group feels calm and quiet, hope, determination and resilience rises powerfully within it.",
            "ein": "542190889",
            "name": "Acupuncturists Without Borders",
            "profileUrl": "https://www.every.org/acuwithoutborders",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/nzcszgppsapamjdwpmxh",
            "logoCloudinaryId": "profile_pics/nzcszgppsapamjdwpmxh",
            "matchedTerms": []
        },
        {
            "description": "Our mission is to provide residents of public housing neighborhoods the tools & resources needed to achieve economic mobility & self-sufficiency.. The mission of Urban Upbound is to provide resident of public housing neighborhoods and other low-income New Yorkers with the tools and resources needed to achieve economic mobility and self-sufficiency, and to break cycles of poverty.",
            "ein": "861096987",
            "name": "Urban Upbound",
            "profileUrl": "https://www.every.org/urban-upbound",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/hn9zqnv99w734a4mlprc",
            "logoCloudinaryId": "faja_profile/hn9zqnv99w734a4mlprc",
            "matchedTerms": []
        },
        {
            "description": "Legal Aid of Arkansas provides high-quality free civil legal aid to low-income Arkansans.\nLearn more at www.arlegalaid.org. . We bring change to our community by providing free legal services to those who need it most and can afford it the least.\n\nLegal Aid of Arkansas makes a significant – often lifesaving – difference in the lives of Arkansas’s most vulnerable residents by giving them a place to turn for legal help to resolve problems affecting their most basic needs.",
            "ein": "710439977",
            "name": "Legal Aid of Arkansas",
            "profileUrl": "https://www.every.org/legal-aid-of-arkansas",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/uj3acs0it3rzkpea9931",
            "logoCloudinaryId": "profile_pics/uj3acs0it3rzkpea9931",
            "matchedTerms": []
        },
        {
            "description": "The mission of NCH is to prevent and end homelessness in America.. We're the oldest national homeless advocacy organization working to provide a platform for people who have experienced homelessness to share their stories and advocate for an end to homelessness.",
            "ein": "521517415",
            "name": "National Coalition for the Homeless",
            "profileUrl": "https://www.every.org/nationalhomeless",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/mjy5mzxh7ff07kauiaff",
            "logoCloudinaryId": "faja_profile/mjy5mzxh7ff07kauiaff",
            "matchedTerms": []
        },
        {
            "description": "Closegap is a 501(c)(3) non-profit technology company focused on making mental health resources accessible to all K-12 students.. Closegap is a nonprofit that makes it easy for schools to support the emotional health of K-12 students through daily mental health check-ins. These check-ins help kids express themselves, connect with a trusted adult, or explore self-guided social emotional learning activities. Backed by evidence-based research and developed alongside students, teachers, school counselors, social workers, and administrators, Closegap makes daily check-ins fun for students, while giving educators the information they need to provide support in real time. By combining crisis & early intervention, real-time support, mental health monitoring, and a safe, digital space for emotional discovery - Closegap makes it easy for schools to make mental health accessible to all.\n\nTHE PROBLEM \nThe public perception that mental health issues are rare is incorrect. 49.5% of American youth w",
            "ein": "822357532",
            "name": "Closegap",
            "profileUrl": "https://www.every.org/closegap",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kr7gnkf1xsgvsouu66pz",
            "logoCloudinaryId": "profile_pics/kr7gnkf1xsgvsouu66pz",
            "matchedTerms": []
        },
        {
            "description": "Jews, Christians, Muslims uniting to serve the poor.. Abrahamic Alliance International unites Jews, Christians, and Muslims for poverty relief and active peacebuilding. We began with a simple dream that compassionate collaboration between Jews, Christians, and Muslims can build lasting bridges of understanding and respect between our communities. By uniting to serve the poor in obedience to divine commands, our grassroots movement is showing the world that peaceful coexistence between Jews, Christians, and Muslims is not a naive and distant dream, but a growing and present reality here and now.\n\nWe envision a world where children of Abraham unite to save lives; where Jews, Christians and Muslims enjoy peaceful coexistence and mutual appreciation as our faith is deepened by meaningful encounters with each other; where understanding, humility and respect replace ignorance, arrogance and contempt; where diverse yet faithful worshipers of the God of Abraham move beyond dialogue to coopera",
            "ein": "264704170",
            "name": "Abrahamic Alliance International",
            "profileUrl": "https://www.every.org/abrahamicalliance",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ztbaaeugjlrbhqlcsqnw",
            "logoCloudinaryId": "faja_profile/ztbaaeugjlrbhqlcsqnw",
            "matchedTerms": []
        },
        {
            "description": "Changing the story of homelessness through storytelling, education, journalism, and advocacy.. Invisible People is dedicated to educating the public about homelessness through innovative storytelling, news, and information.  Since its launch in 2008, Invisible People has become a trusted resource for inspiring action and raising awareness in support of advocacy, policy change and thoughtful dialogue around poverty in North America.",
            "ein": "272079758",
            "name": "Invisible People",
            "profileUrl": "https://www.every.org/invisible-people",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/p8olcaarbl7hz59inznh",
            "logoCloudinaryId": "faja_profile/p8olcaarbl7hz59inznh",
            "matchedTerms": []
        }
    ],
    "humans": [
        {
            "description": "The Multidisciplinary Association for Psychedelic Studies supports psychedelic and cannabis research, education and policy reform.. Founded in 1986, the Multidisciplinary Association for Psychedelic Studies (MAPS) is a visionary 501(c)(3) non-profit organization ushering the safe and ethical use of psychedelics as tools for healing and growth on individual, familial, societal, and planetary levels.\n\nMAPS’ top priority is ethically introducing global access to MDMA-assisted therapy as a treatment for posttraumatic stress disorder (PTSD) through regulatory approvals and training certification for therapy providers, as well as public education, policy reform, and building community support networks.\n\nHow Your Donation Will Help\n\nWhile the MDMA drug development program is the main priority of MAPS, the organization's programs include research into other psychedelic compounds and provide critical resources for researchers around the world interested in studying psychedelics. These resource",
            "ein": "592751953",
            "name": "MAPS",
            "profileUrl": "https://www.every.org/maps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/o7qkdrwh9jsjwv3inrph",
            "logoCloudinaryId": "profile_pics/o7qkdrwh9jsjwv3inrph",
            "matchedTerms": []
        },
        {
            "description": "Delivering unconditional cash directly to the world's poorest households via secure mobile transfers. . COVID-19 has pushed 150 million more people into extreme poverty worldwide. You can empower them to meet their needs by giving unconditional cash transfers to the poorest households in the US and Africa. Why cash? Because the best way to alleviate poverty is to make people less poor. If the disruption of pandemic taught us anything, we need simple, direct ways to help the most vulnerable. Giving directly is a fast, efficient, proven, and empowering way to do so.",
            "ein": "271661997",
            "name": "GiveDirectly",
            "profileUrl": "https://www.every.org/givedirectly",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/rdbzfnryksvqzdjeqtka",
            "logoCloudinaryId": "faja_profile/rdbzfnryksvqzdjeqtka",
            "matchedTerms": []
        },
        {
            "description": "Lil BUB is teaming up with Sycamore Land Trust, Power of Zero to help prevent bullying in schools, and Milo's Sanctuary for pets.. Lil BUB’s Better World Fundraiser raises money for four organizations very close to BUB’s heart by investing in our planet, our children, our pets, and our future.\n\nThe organizations we have chosen to support with this campaign are doing the work that BUB believes in: Sycamore Land Trust for land preservation, Power of Zero to prevent bullying in schools and online, Milo's Sanctuary for the care of homeless pets with special needs, and our own Lil BUB's Big FUND, whose mission is to bring these causes together.\n\nEvery individual donation will be matched up to $100, with a total campaign match of up to $50,000!",
            "name": "Lil BUB's Better World Fundraiser",
            "profileUrl": "https://www.every.org/bubsworld",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kzl3llfffdnhrb5bu8cx",
            "logoCloudinaryId": "profile_pics/kzl3llfffdnhrb5bu8cx",
            "matchedTerms": []
        },
        {
            "description": "IRC responds to the world’s worst humanitarian crises & helps people to survive, recover & gain control of their future.. The International Rescue Committee responds to the world’s worst humanitarian crises and helps people whose lives and livelihoods are shattered by conflict and disaster to survive, recover and gain control of their future. In more than 40 countries and in 26 U.S. cities, our dedicated teams provide clean water, shelter, health care, education and empowerment support to refugees and displaced people.",
            "ein": "135660870",
            "name": "International Rescue Committee",
            "profileUrl": "https://www.every.org/irc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/m4py1igjmt6ufvbkebzt",
            "logoCloudinaryId": "faja_profile/m4py1igjmt6ufvbkebzt",
            "matchedTerms": []
        },
        {
            "description": "The largest hunger-relief organization in the US. We feed America's hungry through a nationwide network of member food banks.. From Seattle to New Rochelle, from Baton Rouge to San Francisco, food banks across the country are doing what they do best – feeding people in need within their communities. The Feeding America network is the largest hunger-relief organization in the United States including in disasters and national emergencies. Our mission is to feed America's hungry through a nationwide network of member food banks and engage our country in the fight to end hunger. You can help.",
            "ein": "363673599",
            "name": "Feeding America",
            "profileUrl": "https://www.every.org/feedingamerica",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/qeaepmtovdqvzx0nnmfa",
            "logoCloudinaryId": "faja_profile/qeaepmtovdqvzx0nnmfa",
            "matchedTerms": []
        },
        {
            "description": "Sharing God’s love with people living on the streets of the mid-peninsula 💛 (every donation is being matched X2 right now). Sharing God's love with people living on the streets of the mid-peninsula 💛\n\nWe are a community-based, non-profit organization that serves the homeless and at-risk populations of the Mid-Peninsula. We establish environments and build relationships where community volunteers can provide food and clothing, as well as referrals for shelter, addiction recovery, and other personal support.\n\n_____\n\nStreet Life Ministries (or SLM) began in 2001 at the downtown Menlo Park train station. Today, due to the help of many people, it now serves over 35,000 meals a year, five nights a week, in Menlo Park, Palo Alto and Redwood City. For 20 years SLM gatherings have built a reputation as the one consistent place the homeless can count on. Whether it is a holiday, a cloudy or rainy day, SLM never varies from the set schedule, giving the homeless a stable option throughout the yea",
            "ein": "453602635",
            "name": "Street Life Ministries",
            "profileUrl": "https://www.every.org/streetlifeministries",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ovg1fwrlcpd9uma8umya",
            "logoCloudinaryId": "profile_pics/ovg1fwrlcpd9uma8umya",
            "matchedTerms": []
        },
        {
            "description": "We operate worldwide, helping people affected by conflict and armed violence and promoting the laws that protect victims of war..",
            "ein": "986001029",
            "name": "International Committee Of The Red Cross",
            "profileUrl": "https://www.every.org/icrc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/jzxg1doouuxpysk1b0pi",
            "logoCloudinaryId": "profile_pics/jzxg1doouuxpysk1b0pi",
            "matchedTerms": []
        },
        {
            "description": "We help people in crisis by providing emergency health services, and then promote self-reliance through training.. We are a global humanitarian organization dedicated to saving lives and relieving suffering. Established in 1984 by volunteer doctors and nurses, we are a nonprofit with no political or religious affiliation, and now have more than 7,500 staff members around the world, more than 97% of whom are local. Our mission is to improve the quality of life through health interventions and related activities that strengthen underserved communities worldwide. With the flexibility to respond rapidly to emergencies, we offer medical services and training to people at the highest risk, always working to strengthen local healthcare systems and promote self-reliance.",
            "ein": "953949646",
            "name": "International Medical Corps",
            "profileUrl": "https://www.every.org/international-medical-corps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zwxuhjjxmrayjwbfceg9",
            "logoCloudinaryId": "faja_profile/zwxuhjjxmrayjwbfceg9",
            "matchedTerms": []
        },
        {
            "description": "Supporting Ukrainian people in their pursuit of democracy with dignity, justice, and human rights.. Razom builds a prosperous Ukraine by increasing civic engagement within the country and by amplifying the voices of Ukrainians around the world. Razom (which means “together” in Ukrainian) believes deeply in the enormous potential of dedicated volunteers around the world united by a single goal: a free, democratic & prosperous Ukraine. We work towards our mission by building, amplifying and partnering. Visa mer",
            "ein": "464604398",
            "name": "Razom for Ukraine",
            "profileUrl": "https://www.every.org/razom-for-ukraine",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ziqojggtnvltam48iorl",
            "logoCloudinaryId": "faja_profile/ziqojggtnvltam48iorl",
            "matchedTerms": []
        },
        {
            "description": "We use cash transfers to increase immunization rates in Nigeria.. Childhood vaccines prevent an estimated 2 to 3 million deaths every year. They are recognized as one of the most cost-effective child health interventions in low-income countries. Yet, an estimated 19.4 million infants around the world did not receive routine vaccinations in 2018. In Nigeria, 40% of under-five deaths are from vaccine-preventable diseases – low immunisation rates are a significant contributor to its high under-five mortality rate (120 deaths per 1,000 live births). North West Nigeria, where the program operates, is the region with the lowest vaccination coverage in Nigeria.\n\nSee RCT findings here: https://www.newincentives.org/evidence",
            "ein": "452368993",
            "name": "New Incentives",
            "profileUrl": "https://www.every.org/newincentives",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/newnvy0rlvxdz3yx300o",
            "logoCloudinaryId": "profile_pics/newnvy0rlvxdz3yx300o",
            "matchedTerms": []
        }
    ],
    "hurricane-laura": [
        {
            "description": "A hot plate of food when it’s needed most. For people fighting or fleeing disasters, we are here. . Ten years ago, my wife Patricia and I had a big dream to start World Central Kitchen. We envisioned an organization that would create smart solutions to hunger and poverty, and for many years we saw an amazing impact through our clean cookstoves initiative, culinary training programs, and social enterprise ventures that empower communities and strengthen economies. But we had no idea we would one day be answering the call in Puerto Rico and around the world – “Food First Responders” serving millions of meals each year. In the process, we learned that a small NGO can change the world through the power of food.\n\nLast year, WCK activated in response to dozens of disasters — some of them natural, and some man-made. From serving children in the shelters on our border with Mexico to making deliveries by lamplight to those keeping watch over beaches in Indonesia, our fight to feed the hungry h",
            "ein": "273521132",
            "name": "World Central Kitchen",
            "profileUrl": "https://www.every.org/worldcentralkitchen",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ty9azacoven3riyd6z9l",
            "logoCloudinaryId": "faja_profile/ty9azacoven3riyd6z9l",
            "matchedTerms": []
        },
        {
            "description": "Saves lives and improves health for people affected by poverty or disaster so they can reach their full potential.. When people are in crisis, we make sure that health comes first. Our Emergency Programs help communities prepare for, respond to and recover from disasters. We provide millions of people around the world Access to Medicine and supplies. Our Clinical Services deliver quality health care for people who have none. We create and support sustainable programs that strengthen Community Health.",
            "ein": "061008595",
            "name": "Americares",
            "profileUrl": "https://www.every.org/americares",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/j6pldj8vvnrj9lifjnya",
            "logoCloudinaryId": "faja_profile/j6pldj8vvnrj9lifjnya",
            "matchedTerms": []
        },
        {
            "description": "The first official Cajun Navy non profit 501(c)3 citizen-led organization. Neighbors helping Neighbors.. The mission of Cajun Navy Relief is to save lives. We are a group of volunteers who work\ntirelessly without pay (using our own personal equipment) to provide immediate rescue\nand relief during natural disaster. Rescue and relief is our way of sharing our South\nLouisiana cultural tradition (of neighbors helping neighbors) with people in need across\nthe United States. By integrating civilian volunteers into the Incident Command\nStructure, we are able to act as a force multiplier for agencies responding to disaster.",
            "ein": "813901071",
            "name": "Cajun Navy Relief",
            "profileUrl": "https://www.every.org/cajun-navy-relief",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/qem04bhvdgpmehx2duti",
            "logoCloudinaryId": "faja_profile/qem04bhvdgpmehx2duti",
            "matchedTerms": []
        },
        {
            "description": "Focused on food, agriculture, and nutrition. It is based in New Orleans, LA. It received its nonprofit status in 1984.. Second Harvest Food Bank leads the fight against hunger in South Louisiana by providing food access, advocacy, education, and disaster response. Second Harvest provides food and support to 700+ community partners and programs across 23 parishes. Our staff and volunteers distribute the equivalent of more than 32 million meals to 210,000+ people a year. \n\nThrough our food distribution programs, community kitchen meal service, nutrition education, and public benefits assistance, we are helping to create pathways out of poverty. Every year, Second Harvest secures millions of pounds of food that otherwise would have gone to waste. Our work helps ensure that these meals make it to the dinner tables of thousands of families struggling with hunger in South Louisiana.",
            "ein": "720956468",
            "name": "Second Harvest Food Bank of Greater New Orleans and Acadiana",
            "profileUrl": "https://www.every.org/no-hunger",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/nfj2uxsvfkp05dmarsfr",
            "logoCloudinaryId": "profile_pics/nfj2uxsvfkp05dmarsfr",
            "matchedTerms": []
        },
        {
            "description": "We provide assistance to people in emergency situations. . Care Help of Sulphur, Inc. was organized in January 1984 by people in our area who saw a need for a charitable organization to provide assistance to people in emergency situations.  In March 1984, we were incorporated, named our first Board of Directors and elected officers. We opened our doors shortly thereafter and began serving the needs of families and individuals.  In addition to the area residents, we assist people passing through who are in emergency situation and fire victims. The organization has continued to grow throughout the years and we have had the opportunity to help thousands of people who needed temporary, emergency assistance.  We are very thankful for the tremendous support received from our community.\n\n\nApproximately 75% of our income is from our thrift store.\nWe receive no federal or state funding.\nWe rely on funds received through contributions from churches, individuals, organizations, and businesses.\nC",
            "ein": "721007880",
            "name": "Care Help Of Sulphur",
            "profileUrl": "https://www.every.org/carehelpofsulphur",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/fhxa69nkduvp7mj6fbhe",
            "logoCloudinaryId": "profile_pics/fhxa69nkduvp7mj6fbhe",
            "matchedTerms": []
        },
        {
            "description": "Airlink connects airlines and nonprofits to respond to disasters quickly and efficiently.. In late 2009, Airlink was formed by the ISTAT Foundation, the philanthropic arm of the International Society for Transport Aircraft Trading, which supports individuals and institutions that promote the advancement of commercial aviation and humanitarianism.\n\nAirlink launched its first response in 2010 when a 7.0-magnitude earthquake struck Port-au-Prince, Haiti.  Airlink joined forces with global NGOs and commercial and private aviation to coordinate the movement of more than 2,000 doctors and nurses and more than 40 shipments of aid totaling +500,000 pounds.\n\n\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\nPrevious\nNext\nSince then, Airlink has worked with its airline and logistics partners to help NGOs respond to humanitarian emergencies where the supply chain is constrained and international aid is required.  Our responses to hurricanes, floods, earthquakes, tsunamis and other disasters have brought life-saving and lif",
            "ein": "371710848",
            "name": "Airlink",
            "profileUrl": "https://www.every.org/airlinkflight",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kgjeppkqfbtz448b5jww",
            "logoCloudinaryId": "faja_profile/kgjeppkqfbtz448b5jww",
            "matchedTerms": []
        },
        {
            "description": "We mobilize veterans to serve communities and to help people prepare, respond, and recover from disasters and humanitarian crises.. Team Rubicon serves communities by mobilizing veterans to continue their service, leveraging their skills and experience to help people prepare, respond, and recover from disasters and humanitarian crises.\n\nTeam Rubicon’s mission is providing relief to those affected by disaster, no matter when or where they strike. By pairing the skills and experiences of military veterans with first responders, medical professionals, and technology solutions, Team Rubicon aims to provide the greatest service and impact possible.\n\nThrough continued service, Team Rubicon seeks to provide our veterans with three things they lose after leaving the military: a purpose, gained through disaster relief; community, built by serving with others; and identity, from recognizing the impact one individual can make. Coupled with leadership development and other opportunities, Team Rub",
            "ein": "271720480",
            "name": "Team Rubicon",
            "profileUrl": "https://www.every.org/teamrubiconusa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/jj5cmus2g0nektt3dndy",
            "logoCloudinaryId": "faja_profile/jj5cmus2g0nektt3dndy",
            "matchedTerms": []
        },
        {
            "description": "America’s largest food bank in distribution leading hunger relief in 18 southeast Texas counties.. More than 1.1 million people in the 18 southeast Texas counties served by Houston Food Bank are considered food insecure, meaning they lack consistent access to enough nutritious food to fuel a healthy life. In order to address this issue, the Houston Food Bank distributes food and other essentials to those in need through a network of 1,600 community partners. In addition, we also provide programs and services aimed at helping families achieve long-term stability including nutrition education, job training, health management, and help in securing state-funded assistance.",
            "ein": "742181456",
            "name": "Houston Food Bank",
            "profileUrl": "https://www.every.org/houstonfoodbank",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ikrtrosmzraeirjoydii",
            "logoCloudinaryId": "faja_profile/ikrtrosmzraeirjoydii",
            "matchedTerms": []
        },
        {
            "description": "Grassroots disaster relief network  based on the principles of solidarity, mutual aid, and autonomous direct action.. Mutual Aid Disaster Relief is a grassroots network whose mission is to provide disaster relief based on the principles of solidarity, mutual aid, and autonomous direct action. By working with, listening to, and supporting impacted communities, especially their most vulnerable members, to lead their own recovery, we build long-term, sustainable and resilient communities.",
            "ein": "813606763",
            "name": "Mutual Aid Disaster Relief",
            "profileUrl": "https://www.every.org/mutualaiddisasterrelief",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/oqeywdfvf5jwruljcjsf",
            "logoCloudinaryId": "faja_profile/oqeywdfvf5jwruljcjsf",
            "matchedTerms": []
        },
        {
            "description": "Shrinking time between disaster & recovery in #NOLA #SOLA #NY #NJ #SC #TX #PR #NC #FL #GrandBahama #TN. SBP was founded in March 2006 by Zack Rosenburg and Liz McCartney after the couple (now married), who originally lived in Washington, D.C., volunteered in Louisiana’s St. Bernard Parish following Hurricane Katrina. The parish, located just outside of New Orleans, was rendered 100% uninhabitable by Katrina’s floodwaters. Seeing the inefficiency and unbearably slow progress of the institutional - or “traditional” rebuilding process, but inspired by the residents' collective spirit and fierce determination to rebuild, Zack and Liz launched an organization - originally called St. Bernard Project - to help them achieve their recovery goals.\n\nWith the tremendous support of donors, volunteers and corporate partners, that organization has grown from a three-person volunteer team into a national organization headquartered in New Orleans, and recognized as a leader in disaster resilience and",
            "ein": "262189665",
            "name": "SBP",
            "profileUrl": "https://www.every.org/sbpusa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/nbqitmcssq8lmcipzynl",
            "logoCloudinaryId": "faja_profile/nbqitmcssq8lmcipzynl",
            "matchedTerms": []
        }
    ],
    "immigrants": [
        {
            "description": "SIPA enriches and empowers generations of Pilipino Americans and others in Historic Filipinotown and throughout Los Angeles.. SIPA is a 501(c)3 nonprofit organization serving Historic Filipinotown and other neighborhoods throughout Greater Los Angeles County. SIPA produces programs for youth and families including case management and counseling, after school programs, senior programs, small business development, cultural enrichment, and affordable housing.",
            "ein": "952879339",
            "name": "Search To Involve Pilipino Americans",
            "profileUrl": "https://www.every.org/sipacares",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/m4oe7clznkvtilq7he78",
            "logoCloudinaryId": "profile_pics/m4oe7clznkvtilq7he78",
            "matchedTerms": []
        },
        {
            "description": "Interpreting Freedom Foundation, is a nationally registered 501(c)3, committed to supporting our Afghan Interpreters and Allies.. www.InterpretingFreedom.org Founded in 2018, The Interpreting Freedom Foundation, a National Nonprofit, a registered 501(c)3 organization, committed to supporting our Afghan Interpreters, allies, and families as they transition to their new life as community members of our United States of America.\n \nWe provide comprehensive support services for all US combat interpreters who were engaged in Operation Enduring Freedom. These military and special ops interpreters played a critical role in the battlefield alongside US Armed Forces.\n \nPlease visit our webpage at www.InterpretingFreedom.org. On there, you will see that we are in many ways very different from other nonprofits. We go out of our way to be highly transparent about the stewarding and spending of your generous donor dollars. On our page, you will see a counter which tracks many of the services we hav",
            "ein": "831204288",
            "name": "Interpreting Freedom Foundation",
            "profileUrl": "https://www.every.org/interpreting-freedom-foundation-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/sc6yudflr8akfjlq3c5n",
            "logoCloudinaryId": "profile_pics/sc6yudflr8akfjlq3c5n",
            "matchedTerms": []
        },
        {
            "description": "We defend the rights of immigrants and refugees, empower individuals and families, and advocate for liberty.. The Refugee and Immigrant Center for Education and Legal Services (RAICES) serves immigrants and refugees in our community by providing immigration-related legal services, advocacy and opportunities for educational and social support. We believe that by actively promoting the well-being and informed participation of immigrants and refugees in the community, everyone benefits.",
            "ein": "742436920",
            "name": "RAICES",
            "profileUrl": "https://www.every.org/raicestexas",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kilckqzw3hssccgyyyag",
            "logoCloudinaryId": "faja_profile/kilckqzw3hssccgyyyag",
            "matchedTerms": []
        },
        {
            "description": "We are devoted to abolishing immigration detention, while ending the isolation of people currently suffering in this system.. Freedom for Immigrants is a national nonprofit devoted to abolishing immigration detention through two main strategies, while ending the isolation of people currently suffering in this profit¬-driven system. First, we mobilize a network of 4,500 watchdog community members that uncovers and tracks abuses experienced by those in immigration detention, shedding light in a consistent manner for the first time on this hidden system. Second, we are modeling a community-based alternative to detention that welcomes immigrants into the social fabric of the United States. Through these windows into the system, we gather data and stories to combat injustice at the individual level and push systemic change.",
            "ein": "800875881",
            "name": "Freedom for Immigrants",
            "profileUrl": "https://www.every.org/freedom-for-immigrants",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/user_photo5bd2b359a828f_fbylu5",
            "logoCloudinaryId": "user_photo5bd2b359a828f_fbylu5",
            "matchedTerms": []
        },
        {
            "description": "The nation's leading LGBTQ immigrant rights organization.. The nation's leading LGBTQ immigrant rights organization. We represent and advocate for people from around the world fleeing violence, abuse, and persecution because of their sexual orientation, gender identity, or HIV status. Our legal team has won asylum for more than 1,000 LGBTQ and HIV-positive immigrants while maintaining a 99% success rate. Your gift will make a unique difference.",
            "ein": "133802711",
            "name": "Immigration Equality",
            "profileUrl": "https://www.every.org/immigrationequality",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wkva0gh7omf5yqxwjv8m",
            "logoCloudinaryId": "profile_pics/wkva0gh7omf5yqxwjv8m",
            "matchedTerms": []
        },
        {
            "description": "Promoting human dignity, mutual respect, and pluralism. . Founded in 2003, HAF’s work impacts a range of issues — from the portrayal of Hinduism in K-12 textbooks to civil and human rights to addressing contemporary problems, such as environmental protection and inter-religious conflict, by applying Hindu philosophy.\n\nThe Foundation educates the public about Hinduism, speaks out about issues affecting Hindus worldwide, and builds bridges with institutions and individuals whose work aligns with HAF’s objectives. Through its advocacy efforts, HAF promotes dignity, mutual respect, and pluralism in order to ensure the well-being of Hindus and for all people and the planet to thrive.",
            "ein": "680551525",
            "name": "Hindu American Foundation",
            "profileUrl": "https://www.every.org/hinduamerican",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/hinduamerican_ib3zqf",
            "logoCloudinaryId": "hinduamerican_ib3zqf",
            "matchedTerms": []
        },
        {
            "description": "For over a century, USCRI has worked to protect the rights and address the needs of persons in forced or voluntary migration worldwide and support their transition to a dignified life.. To address the needs and rights of persons in forced or voluntary migration worldwide by advancing fair and humane public policy, facilitating and providing direct professional services, and promoting the full participation of migrants in community life.",
            "ein": "131878704",
            "name": "U.S. Committee for Refugees and Immigrants (USCRI)",
            "profileUrl": "https://www.every.org/uscri",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/nq1kbsv7x9e4sojam8up",
            "logoCloudinaryId": "faja_profile/nq1kbsv7x9e4sojam8up",
            "matchedTerms": []
        },
        {
            "ein": "842367156",
            "name": "Erebuni Armenian School",
            "profileUrl": "https://www.every.org/erebuniarmenianschool",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/frxpwjmiihqaxo1nulrw",
            "logoCloudinaryId": "profile_pics/frxpwjmiihqaxo1nulrw",
            "matchedTerms": []
        },
        {
            "description": "Educates and activates individuals, organizations, and institutions to interrupt racism, bigotry, and prejudice.. The Montana Racial Equity Project, a nonprofit and nonpartisan organization, advocates equity and justice for historically marginalized, disenfranchised, and oppressed peoples in Montana. We educate, train, and activate organizers, individuals, groups, organizations, institutions, and businesses to invest in interrupting racism, bigotry, and prejudice whenever encountered.",
            "ein": "475462992",
            "name": "The Montana Racial Equity Project",
            "profileUrl": "https://www.every.org/themtrep",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pgmmof72tfm2zf3jtpnw",
            "logoCloudinaryId": "faja_profile/pgmmof72tfm2zf3jtpnw",
            "matchedTerms": []
        },
        {
            "description": "Defending and advancing the rights and opportunities of low-income immigrants and their family members.. National Immigration Law Center (NILC) is one of the leading organizations in the U.S. exclusively dedicated to defending and advancing the rights of immigrants with low income.",
            "ein": "954539765",
            "name": "National Immigration Law Center",
            "profileUrl": "https://www.every.org/nilc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ycmcvouqhd55bv4kdssa",
            "logoCloudinaryId": "profile_pics/ycmcvouqhd55bv4kdssa",
            "matchedTerms": []
        }
    ],
    "indigenous-led": [
        {
            "description": "Supporting solar energy for a more equitable world. ☀️. The Honnold Foundation supports solar energy access— solar everywhere, for everyone. \n\nThat means a donation to the Honnold Foundation could help a low-income family in Sacramento cut their energy bill in half, or pay for solar technician job training for a high schooler on the Navajo Nation. Or, your gift could help fund Puerto Rico’s first cooperatively managed, community owned microgrid, pioneering a new way to access and control energy in communities around the world. \n\nNo matter who you are, we believe that energy should be clean, easy to access, and affordable. When you give a gift to the Honnold Foundation, you help us advance solar energy access worldwide.",
            "ein": "830833980",
            "name": "Honnold Foundation",
            "profileUrl": "https://www.every.org/honnoldfoundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/orcjqjcs8tli82grxb0o",
            "logoCloudinaryId": "profile_pics/orcjqjcs8tli82grxb0o",
            "matchedTerms": []
        },
        {
            "description": "To foster a more peaceful society Terrawatu works in Tanzania creating self-sustainable projects rooted in indigenous communities . Who We Are\n\nCelebrating 20 years this year, Terrawatu is an NGO based in Tanzania that works with local communities to create sustainable development projects, and educates about the importance of environmental conservation, reforestation and the cultivation of plants for both medicinal and nutritional purposes. Our success lies in our ability to unite time-tested ancient wisdom with up-to-date science so that the needs of communities are met appropriately and efficiently.\n\nThe founders of Terrawatu – Dr. Tanya Pergola, an American sociologist and Lekoko Ole Sululu, a Tanzanian Maasai elder – share a love for Tanzania’s land, rich cultures, and its people. Saddened by the ‘brain drain’ and desire of so many young Tanzanians to leave their country in search of perceived ‘greener pastures’ the founders set about to do what they could to educate and improve",
            "ein": "260212786",
            "name": "Terrawatu",
            "profileUrl": "https://www.every.org/terrawatu",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kektm5hrb2fnkifwpwoi",
            "logoCloudinaryId": "profile_pics/kektm5hrb2fnkifwpwoi",
            "matchedTerms": []
        },
        {
            "description": "Serving immediate needs, supporting long-term solutions for strong, self-sufficient Native American communities.  . Partnership With Native Americans is a 501 (c)(3) nonprofit organization committed to championing hope for a brighter future for Native Americans living on remote, isolated and impoverished reservations. Collaborating for nearly 30 years with our reservation partners, we provide consistent aid and services for Native Americans with the highest need in the U.S.\n\nMuch of our work centers around material aid, educational support and community-based services. PWNA also connects outside resources directly to reservations through its distribution network and reservation partnerships. We care about quality of life for Native Americans and respect their self-determined goals for their tribes.\n\nThe only Native-serving charity to work in hundreds of reservation communities year-round, our service area is concentrated in 9 priority states and encompasses Pine Ridge, Rosebud, Navajo",
            "ein": "473730147",
            "name": "Partnership With Native Americans",
            "profileUrl": "https://www.every.org/nativepartnership",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yq7qaxx9h2vihnlzsmgk",
            "logoCloudinaryId": "profile_pics/yq7qaxx9h2vihnlzsmgk",
            "matchedTerms": []
        },
        {
            "description": "SPIO is democratizing Pacific Islander access to higher education and professional opportunities through free digital resources.. Pacific Islanders remain underrepresented in higher education, professional fields, and in the media today. Often limited in opportunities in their home communities, Pacific Islanders need resources and support to pursue higher education, secure professional positions, and access economic opportunities. Now, with the COVID-19 pandemic and its disproportionate effect on Pacific Islanders and other communities of color, these resources are more essential than ever to foster a thriving, inclusive Pacific Islander community rooted in cultural heritage. \n\nSouth Pacific Islander Organization (SPIO) is a 100% grassroots nonprofit founded in December 2018 by four Indigenous and Pacific Islander Stanford alumni who believe in democratizing Pacific Islander access to higher education and economic opportunities, globally. They came together in response to the lack of",
            "ein": "833380220",
            "name": "South Pacific Islander Organization",
            "profileUrl": "https://www.every.org/southpacificislander",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/vifbzshyuvvts6169s0s",
            "logoCloudinaryId": "profile_pics/vifbzshyuvvts6169s0s",
            "matchedTerms": []
        },
        {
            "description": "NDN Collective is an Indigenous-led organization dedicated to building Indigenous power.. DEFEND\nWe must continue to defend our people, communities, and nations against negative resource extraction that poisons our people, pollutes our water, destroys our land, contributes to climate change and violates our human rights. Doing this through organizing our communities, making our voice heard, and utilizing a wide variety of tactics is imperative in shifting the political and financial systems that are impacting our communities.\n\nDEVELOP\nWe must continue to develop Indigenous communities in a regenerative and sustainable manner based on our values and connection to land, culture and identity. We need to meet the needs of the present generation without compromising the ability of future generations to meet their own needs. We are doing this through regenerative community development, renewable energy investments and social enterprise development.\n\nDECOLONIZE\nWe must continue to decolonize",
            "ein": "823776329",
            "name": "NDN Collective",
            "profileUrl": "https://www.every.org/ndncollective",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zwkyjvedqob5k7vc3nit",
            "logoCloudinaryId": "profile_pics/zwkyjvedqob5k7vc3nit",
            "matchedTerms": []
        },
        {
            "description": "The oldest, largest nonprofit legal org asserting and defending the rights of Indian tribes, organizations, and individuals.. Since 1970, the Native American Rights Fund (NARF) has provided legal assistance to Indian tribes, organizations, and individuals nationwide who might otherwise have gone without adequate representation. NARF has successfully asserted and defended the most important rights of Indians and tribes in hundreds of major cases, and has achieved significant results in such critical areas as tribal sovereignty, treaty rights, natural resource protection, and Indian education. NARF is a non-profit 501c(3) organization that focuses on applying existing laws and treaties to guarantee that national and state governments live up to their legal obligations.\n\nThe Native American Rights Fund is headquartered in Boulder, Colorado, with branch offices in Washington, DC, and Anchorage, AK.\n\nNARF is governed by a volunteer board of directors composed of thirteen Native Americans",
            "ein": "840611876",
            "name": "Native American Rights Fund",
            "profileUrl": "https://www.every.org/native-american-rights-fund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zvqbifztx46sl3dn3t2d",
            "logoCloudinaryId": "faja_profile/zvqbifztx46sl3dn3t2d",
            "matchedTerms": []
        },
        {
            "description": "First Nations Development Institute helps restore control & cultural stewardship of Native assets to Native Americans in the U.S.. Our mission is to strengthen American Indian economies to support healthy Native communities. We invest in and create innovative institutions and models that strengthen asset control and support economic development for American Indian people and their communities.\n\nWith the support of individuals, foundations, corporate and tribal donors, First Nations Development Institute improves economic conditions for Native Americans through technical assistance & training, advocacy & policy, and direct financial grants in five key areas:\n\nAchieving Native Financial Empowerment\nInvesting in Native Youth\nStrengthening Tribal & Community Institutions\nAdvancing Household & Community Asset-Building Strategies\nNourishing Native Foods & Health\n\nFirst Nations is the most highly-rated American Indian nonprofit in the nation. Indeed, for the eighth year in a row, First Natio",
            "ein": "541254491",
            "name": "First Nations Development Institute",
            "profileUrl": "https://www.every.org/firstnations",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/tzxkfn27pc67fhf5jkag",
            "logoCloudinaryId": "faja_profile/tzxkfn27pc67fhf5jkag",
            "matchedTerms": []
        },
        {
            "description": "COTAP mitigates your CO2 footprint with life-changing and certified forestry projects in least-developed countries.. When donating, please specify one of the following three options: 1) Offset To All Projects, 2) Offset: (Choose Nicaragua, Uganda, India, Fiji, Indonesia, or Mexico), or 3) 100% to COTAP’s Operations & Expansion. For more information, please see https://COTAP.org/Crypto.\n\nFounded in 2011, COTAP empowers individuals and organizations in developed countries to simultaneously fight both global poverty and climate change. COTAP connects your carbon footprint with forestry projects in least-developed countries which create life-changing income for the world's poorest people. \n\nAll COTAP projects are certified by the Plan Vivo Foundation Carbon Standard, the world's oldest forest carbon standard and the only standard which requires that projects share 60%+ of carbon revenues with participating communities. Combined with COTAP's transparent, modest, and consistent margin of 10",
            "ein": "274220630",
            "name": "Carbon Offsets To Alleviate Poverty (COTAP)",
            "profileUrl": "https://www.every.org/cotap",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kiwvynuxylcdvbafh0i8",
            "logoCloudinaryId": "profile_pics/kiwvynuxylcdvbafh0i8",
            "matchedTerms": []
        },
        {
            "description": "Our mission is to conserve and distribute seeds for future generations through seed conservation, education, and collaboration.. The Path is a non-profit organization housed on a 40-acre property in Estancia, New Mexico, where Grandmother Flordemayo’s Seed Temple and Sacred Temples for Humanity are built and cared for with your help. Thank you for your contribution and blessings of the day to you.\n\nThe Seed Temple is the realization of Grandmother Flordemayo’s original vision of a place where the sacred heritage seeds would be protected for future generations. It has existed since 2012 and has served as a source of seed for the local area, such as the Estancia Seed Library, as well as for many individuals in New Mexico and elsewhere. The many gatherings on the site have involved educational classes, sharing of seeds, and celebration of the spirituality carried in the seeds. Kindly note, we do not sell or otherwise monetize the seeds themselves.\n\nNow more than ever it is important that",
            "ein": "464894140",
            "name": "The Path",
            "profileUrl": "https://www.every.org/followthegoldenpath",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/c0nsmtvttnbvcyv5sxaq",
            "logoCloudinaryId": "profile_pics/c0nsmtvttnbvcyv5sxaq",
            "matchedTerms": []
        },
        {
            "description": "A non-profit organization that empowers & supports people of color & women small business owners in the under-served communities.. Synergy4WBO is a non-profit organization that is changing the future! By empowering people of color and women-owned small businesses especially in the underserved communities to be equally profitable, sustainable,and successful compared to their non-minority counterparts.\nWe provide one-on-one mentoring, professional coaching, educational opportunities, marketing support, and access to funding to members of our community. We help them to rise up and thrive beyond their unimaginable potential. \nOur members rate our overall program success at 4.6 out of 5.0 and in achieving direct growth and sustainability.",
            "ein": "853454867",
            "name": "Synergy 4wbo Inc",
            "profileUrl": "https://www.every.org/synergy-4wbo-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xssz3rcxd1aaw8ofu7uh",
            "logoCloudinaryId": "profile_pics/xssz3rcxd1aaw8ofu7uh",
            "matchedTerms": []
        }
    ],
    "indigenous-peoples": [
        {
            "description": "Protecting the rainforest and our climate by supporting Indigenous peoples.. Since 1996, Amazon Watch has protected the rainforest and advanced the rights of indigenous peoples in the Amazon Basin.\n\nWe partner with indigenous and environmental organizations in campaigns for human rights, corporate accountability, and the preservation of the Amazon's ecological systems.\n\nAmazon Watch resists the destruction of the Amazon by challenging disastrous development projects and natural resource extraction and by promoting indigenous rights.\n\nThe Amazon is the world's largest terrestrial carbon sink and plays a critical role in regulating the global climate. Yet this global treasure is at great risk – already more than 20% has been deforested, and new fossil fuel extraction, mining, large-scale hydroelectric dams, and highways cause even greater deforestation and run roughshod over indigenous people's rights and territories. Amazon Watch protects millions of acres of rainforest every year by p",
            "ein": "954604782",
            "name": "Amazon Watch",
            "profileUrl": "https://www.every.org/amazonwatch",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/sxxqy0qn6bv1diaed3sm",
            "logoCloudinaryId": "profile_pics/sxxqy0qn6bv1diaed3sm",
            "matchedTerms": []
        },
        {
            "description": "Ensuring access to safe water, sanitation, and hygiene since 2007. . We envision a better world, where all have access to living conditions that allow empowerment and development. Together, we aim to ensure sustainable access to safe water and sanitation for the most vulnerable communities through innovative partnerships, creativity and the power of art.",
            "ein": "263242787",
            "name": "One Drop Foundation",
            "profileUrl": "https://www.every.org/onedrop",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/adtf4n2mjlz7hjndot81",
            "logoCloudinaryId": "profile_pics/adtf4n2mjlz7hjndot81",
            "matchedTerms": []
        },
        {
            "description": "Supporting solar energy for a more equitable world. ☀️. The Honnold Foundation supports solar energy access— solar everywhere, for everyone. \n\nThat means a donation to the Honnold Foundation could help a low-income family in Sacramento cut their energy bill in half, or pay for solar technician job training for a high schooler on the Navajo Nation. Or, your gift could help fund Puerto Rico’s first cooperatively managed, community owned microgrid, pioneering a new way to access and control energy in communities around the world. \n\nNo matter who you are, we believe that energy should be clean, easy to access, and affordable. When you give a gift to the Honnold Foundation, you help us advance solar energy access worldwide.",
            "ein": "830833980",
            "name": "Honnold Foundation",
            "profileUrl": "https://www.every.org/honnoldfoundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/orcjqjcs8tli82grxb0o",
            "logoCloudinaryId": "profile_pics/orcjqjcs8tli82grxb0o",
            "matchedTerms": []
        },
        {
            "description": "To foster a more peaceful society Terrawatu works in Tanzania creating self-sustainable projects rooted in indigenous communities . Who We Are\n\nCelebrating 20 years this year, Terrawatu is an NGO based in Tanzania that works with local communities to create sustainable development projects, and educates about the importance of environmental conservation, reforestation and the cultivation of plants for both medicinal and nutritional purposes. Our success lies in our ability to unite time-tested ancient wisdom with up-to-date science so that the needs of communities are met appropriately and efficiently.\n\nThe founders of Terrawatu – Dr. Tanya Pergola, an American sociologist and Lekoko Ole Sululu, a Tanzanian Maasai elder – share a love for Tanzania’s land, rich cultures, and its people. Saddened by the ‘brain drain’ and desire of so many young Tanzanians to leave their country in search of perceived ‘greener pastures’ the founders set about to do what they could to educate and improve",
            "ein": "260212786",
            "name": "Terrawatu",
            "profileUrl": "https://www.every.org/terrawatu",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kektm5hrb2fnkifwpwoi",
            "logoCloudinaryId": "profile_pics/kektm5hrb2fnkifwpwoi",
            "matchedTerms": []
        },
        {
            "description": "We are Survival International, the global movement for tribal peoples. We’re fighting for their survival around the world.. We are Survival International, the global movement for tribal peoples. We’re fighting for their survival around the world.  More than one hundred and fifty million men, women and children in over sixty countries live in tribal societies. They’re mostly self-sufficient and depend on their land for their health and wellbeing. To tribal peoples, land is life.\n\nTribal peoples are our contemporaries. They’re not primitive. They have technology, laws, education, religions, and social, political and economic structures. They developed many of the medicines now used by industrialized societies, and created some of the principal staple foods like maize and potatoes that now feed millions. Tribal peoples shaped the environment and help make the world a better place.  Tribal societies are extraordinarily diverse and there’s a lot to learn from them. They understand the natu",
            "ein": "263208869",
            "name": "Survival International",
            "profileUrl": "https://www.every.org/survivalinternational",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/lhlmxu4gx7qkaw3u6tou",
            "logoCloudinaryId": "faja_profile/lhlmxu4gx7qkaw3u6tou",
            "matchedTerms": []
        },
        {
            "description": "Serving immediate needs, supporting long-term solutions for strong, self-sufficient Native American communities.  . Partnership With Native Americans is a 501 (c)(3) nonprofit organization committed to championing hope for a brighter future for Native Americans living on remote, isolated and impoverished reservations. Collaborating for nearly 30 years with our reservation partners, we provide consistent aid and services for Native Americans with the highest need in the U.S.\n\nMuch of our work centers around material aid, educational support and community-based services. PWNA also connects outside resources directly to reservations through its distribution network and reservation partnerships. We care about quality of life for Native Americans and respect their self-determined goals for their tribes.\n\nThe only Native-serving charity to work in hundreds of reservation communities year-round, our service area is concentrated in 9 priority states and encompasses Pine Ridge, Rosebud, Navajo",
            "ein": "473730147",
            "name": "Partnership With Native Americans",
            "profileUrl": "https://www.every.org/nativepartnership",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yq7qaxx9h2vihnlzsmgk",
            "logoCloudinaryId": "profile_pics/yq7qaxx9h2vihnlzsmgk",
            "matchedTerms": []
        },
        {
            "description": "SPIO is democratizing Pacific Islander access to higher education and professional opportunities through free digital resources.. Pacific Islanders remain underrepresented in higher education, professional fields, and in the media today. Often limited in opportunities in their home communities, Pacific Islanders need resources and support to pursue higher education, secure professional positions, and access economic opportunities. Now, with the COVID-19 pandemic and its disproportionate effect on Pacific Islanders and other communities of color, these resources are more essential than ever to foster a thriving, inclusive Pacific Islander community rooted in cultural heritage. \n\nSouth Pacific Islander Organization (SPIO) is a 100% grassroots nonprofit founded in December 2018 by four Indigenous and Pacific Islander Stanford alumni who believe in democratizing Pacific Islander access to higher education and economic opportunities, globally. They came together in response to the lack of",
            "ein": "833380220",
            "name": "South Pacific Islander Organization",
            "profileUrl": "https://www.every.org/southpacificislander",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/vifbzshyuvvts6169s0s",
            "logoCloudinaryId": "profile_pics/vifbzshyuvvts6169s0s",
            "matchedTerms": []
        },
        {
            "description": "NDN Collective is an Indigenous-led organization dedicated to building Indigenous power.. DEFEND\nWe must continue to defend our people, communities, and nations against negative resource extraction that poisons our people, pollutes our water, destroys our land, contributes to climate change and violates our human rights. Doing this through organizing our communities, making our voice heard, and utilizing a wide variety of tactics is imperative in shifting the political and financial systems that are impacting our communities.\n\nDEVELOP\nWe must continue to develop Indigenous communities in a regenerative and sustainable manner based on our values and connection to land, culture and identity. We need to meet the needs of the present generation without compromising the ability of future generations to meet their own needs. We are doing this through regenerative community development, renewable energy investments and social enterprise development.\n\nDECOLONIZE\nWe must continue to decolonize",
            "ein": "823776329",
            "name": "NDN Collective",
            "profileUrl": "https://www.every.org/ndncollective",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zwkyjvedqob5k7vc3nit",
            "logoCloudinaryId": "profile_pics/zwkyjvedqob5k7vc3nit",
            "matchedTerms": []
        },
        {
            "description": "We protect the rainforests of Central and South America by working with the indigenous communities that call them home.. Human life depends on our rainforests. They are vital to the stability of our climate. Rainforests are carbon sinks that surpass our most sophisticated technology; they absorb 30% of the world’s CO2 emissions each year.\n\nRainforests are also home to more than half of the world’s animal and plant species.  They are a constant source of life-saving medicines. Millions of indigenous peoples depend on the forest for their survival, including our planet’s last uncontacted cultures.\n\nDespite rainforests importance, they are disappearing. Today, we have lost more than half of earth’s original rainforests—every year we lose an area of tropical forest the size of New York State.\n\nBut together we are making a difference. To date, we have protected more than 33 million acres of rainforest. Indigenous communities of the rainforest are fighting back, holding the front line for a",
            "ein": "951622945",
            "name": "Rainforest Foundation US",
            "profileUrl": "https://www.every.org/rainforest-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/drk1nhsi0n9pooqcuacf",
            "logoCloudinaryId": "faja_profile/drk1nhsi0n9pooqcuacf",
            "matchedTerms": []
        },
        {
            "description": "Defending indigenous rights to land, life and cultural survival in the Amazon rainforest.. Coronavirus has reached indigenous rainforest territories in the Ecuadorian Amazon. Indigenous populations are extremely vulnerable to disease due to persistent inequality, exclusion and discrimination in general access to public services, as well as their geographic isolation. New cases are reported daily, and indigenous elders, guardians of thousands of years of ancestral knowledge about the Amazon rainforest and how to protect it, are dying with COVID symptoms. \n\nHundreds of indigenous communities  that relied on these rivers for food and fresh water are facing food scarcity, and COVID-19 national lockdown has cut off options for outside provisions. Parents are reporting the appearance of skin rashes and irritation on their children who must bathe in contaminated water. Sadly, the government’s response has been woefully inadequate and lacking transparency.\n\nAmazon Frontlines is working with i",
            "ein": "475521013",
            "name": "Amazon Frontlines",
            "profileUrl": "https://www.every.org/amazonfrontlines",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pmqkeuwq8jcajxnkx98f",
            "logoCloudinaryId": "faja_profile/pmqkeuwq8jcajxnkx98f",
            "matchedTerms": []
        }
    ],
    "islam": [
        {
            "description": "Establishing a link between all Muslims in the Cleveland area, to promote tolerance and well-being of the whole community.. WCMA provides spiritual and moral support and counseling. We support the preservation of our language and heritage, and promote the social and economic well-being of our members. We are actively engaged in the development of the Cleveland community.",
            "ein": "452314751",
            "name": "West Cleveland Muslim Association",
            "profileUrl": "https://www.every.org/wcmamasjid",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ehegyksa3y5woqnggxpy",
            "logoCloudinaryId": "profile_pics/ehegyksa3y5woqnggxpy",
            "matchedTerms": []
        },
        {
            "description": "Relief and development regardless of gender, race, or religion,  to empower individuals in their communities.. Islamic Relief USA provides relief and development in a dignified manner regardless of gender, race, or religion, and works to empower individuals in their communities and give them a voice in the world.",
            "ein": "954453134",
            "name": "Islamic Relief USA",
            "profileUrl": "https://www.every.org/irusa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/abablcte84ihtwvlt3fz",
            "logoCloudinaryId": "faja_profile/abablcte84ihtwvlt3fz",
            "matchedTerms": []
        },
        {
            "description": "Jews, Christians, Muslims uniting to serve the poor.. Abrahamic Alliance International unites Jews, Christians, and Muslims for poverty relief and active peacebuilding. We began with a simple dream that compassionate collaboration between Jews, Christians, and Muslims can build lasting bridges of understanding and respect between our communities. By uniting to serve the poor in obedience to divine commands, our grassroots movement is showing the world that peaceful coexistence between Jews, Christians, and Muslims is not a naive and distant dream, but a growing and present reality here and now.\n\nWe envision a world where children of Abraham unite to save lives; where Jews, Christians and Muslims enjoy peaceful coexistence and mutual appreciation as our faith is deepened by meaningful encounters with each other; where understanding, humility and respect replace ignorance, arrogance and contempt; where diverse yet faithful worshipers of the God of Abraham move beyond dialogue to coopera",
            "ein": "264704170",
            "name": "Abrahamic Alliance International",
            "profileUrl": "https://www.every.org/abrahamicalliance",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ztbaaeugjlrbhqlcsqnw",
            "logoCloudinaryId": "faja_profile/ztbaaeugjlrbhqlcsqnw",
            "matchedTerms": []
        },
        {
            "description": "America's largest Muslim civil liberties and advocacy organization.",
            "ein": "770646756",
            "name": "CAIR",
            "profileUrl": "https://www.every.org/cair",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/evdbxxjljslpfqnd7rch",
            "logoCloudinaryId": "faja_profile/evdbxxjljslpfqnd7rch",
            "matchedTerms": []
        },
        {
            "description": "Building organizations that uplift the mind, body, and soul..",
            "ein": "273308812",
            "name": "New York City Muslim Center",
            "profileUrl": "https://www.every.org/nycmc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/klalpkyceri7lzdlauhf",
            "logoCloudinaryId": "profile_pics/klalpkyceri7lzdlauhf",
            "matchedTerms": []
        },
        {
            "description": "We are a volunteer-run non-profit celebrating the ideals of Islam thru education and charitable works in the developing world. Ibn Asheer supports international medical relief projects by collecting durable/reusable medical equipment and other donated supplies from health care entities in the US and shipping them to developing countries.  We also direct water development projects, primarily in the Middle East and Africa, to provide running water for small villages.  We do not spend any funds raised on administrative cost, so all of your donation goes towards the specified cause of the relief projects we run.",
            "ein": "593811307",
            "name": "Ibn Asheer Institute Of Islam",
            "profileUrl": "https://www.every.org/ibn-asheer-institute-of-islam",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/jxbfpgi2vcpdmsnijskz",
            "logoCloudinaryId": "profile_pics/jxbfpgi2vcpdmsnijskz",
            "matchedTerms": []
        },
        {
            "ein": "330992506",
            "name": "Islamic Center of Irvine (ICOI)",
            "profileUrl": "https://www.every.org/icoi",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/jxbpqwjpyileda82abia",
            "logoCloudinaryId": "faja_profile/jxbpqwjpyileda82abia",
            "matchedTerms": []
        },
        {
            "description": "HOPE (Health Oriented Preventive Education) provides services of health and education for people in Pakistan.. Health Oriented Preventive Education (HOPE) was the inspiration of Dr. Mubina Agboatwalla, a pediatrician by profession who helped eradicate polio from Pakistan in the early stages of her career.  In 1997, while working in Karachi’s government-sponsored hospital for the needy, Civil Hospital (where she currently still practices), Dr. Mubina thought of a vision for the betterment of the citizens of her country.  She and a small band of volunteers joined forces to establish HOPE as a nonprofit governmental organization in Pakistan.  Due to Dr. Mubina's medical background, HOPE's initial objective was to provide the poor with better access to medical centers and hospitals.  In a country grappling with basic issues such as lack of access to clean drinking water, poor maternal and infant health, malnutrition in children, prevention and treatment of diseases such as malaria, choler",
            "ein": "260257617",
            "name": "HOPE Pakistan",
            "profileUrl": "https://www.every.org/hopecharityusa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/aljspkaoilv1zcd045nt",
            "logoCloudinaryId": "faja_profile/aljspkaoilv1zcd045nt",
            "matchedTerms": []
        },
        {
            "description": "UPF Films and Educational Projects Promote Peace and Understanding Through Stories of Muslim Engagement, History and Culture. Mission: Peace and Pluralism\nThe mission of Unity Productions Foundation (UPF) is to counter bigotry and create peace through the media. UPF produces films that tell compelling stories for television, online viewing, and theatrical release. These films are part of long-term educational campaigns aimed at increasing religious and cultural pluralism, especially among Muslims and other faiths.\n\nScreenings have taken place in thousands of classrooms and civic institutions.  Over 83% of participants in UPF film screenings and dialogues indicate positive feedback after viewing.\n\nFinally, UPF works in Hollywood through its MOST (Muslims on Screen and Television) Resource Center, providing facts and research to script writers and producers on popular shows seen worldwide. We are convinced of the power of media to empower citizens with greater understanding and to nouri",
            "ein": "770519274",
            "name": "Unity Productions Foundation",
            "profileUrl": "https://www.every.org/upf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/forilhoymdspxhg7nm1n",
            "logoCloudinaryId": "profile_pics/forilhoymdspxhg7nm1n",
            "matchedTerms": []
        },
        {
            "description": "To Inspire, lead, and educate Latinos and other communities about Islam through multimedia production and grassroots outreach worldwide.. to Inspire, Lead, and Pioneer Solutions in Educating Latinos and Other Communities About Islam through Media Production and Grassroots Outreach worldwide.",
            "ein": "262565846",
            "name": "IslamInSpanish",
            "profileUrl": "https://www.every.org/islaminspanish",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/fjhfd1uiewahr9zo5rms",
            "logoCloudinaryId": "faja_profile/fjhfd1uiewahr9zo5rms",
            "matchedTerms": []
        }
    ],
    "judaism": [
        {
            "description": "Jews, Christians, Muslims uniting to serve the poor.. Abrahamic Alliance International unites Jews, Christians, and Muslims for poverty relief and active peacebuilding. We began with a simple dream that compassionate collaboration between Jews, Christians, and Muslims can build lasting bridges of understanding and respect between our communities. By uniting to serve the poor in obedience to divine commands, our grassroots movement is showing the world that peaceful coexistence between Jews, Christians, and Muslims is not a naive and distant dream, but a growing and present reality here and now.\n\nWe envision a world where children of Abraham unite to save lives; where Jews, Christians and Muslims enjoy peaceful coexistence and mutual appreciation as our faith is deepened by meaningful encounters with each other; where understanding, humility and respect replace ignorance, arrogance and contempt; where diverse yet faithful worshipers of the God of Abraham move beyond dialogue to coopera",
            "ein": "264704170",
            "name": "Abrahamic Alliance International",
            "profileUrl": "https://www.every.org/abrahamicalliance",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ztbaaeugjlrbhqlcsqnw",
            "logoCloudinaryId": "faja_profile/ztbaaeugjlrbhqlcsqnw",
            "matchedTerms": []
        },
        {
            "description": "We engage our community to invest, enrich, and ensure the vibrancy and continuity of Jewish life.. We engage our community to invest, enrich, and ensure the vibrancy and continuity of Jewish life in Nevada, Israel, and around the world",
            "ein": "880098500",
            "name": "Jewish Federation Of Las Vegas",
            "profileUrl": "https://www.every.org/jewish-federation-of-las-vegas",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/l33zvyt0sjsqqtogzqxd",
            "logoCloudinaryId": "profile_pics/l33zvyt0sjsqqtogzqxd",
            "matchedTerms": []
        },
        {
            "description": "An individualized learning experience for college-aged students seeking to further their intellectual and religious development.. The students in the YBT Beit Midrash program are given the tools, the training, and the opportunities to build upon the knowledge and  skills they’ve acquired at their yeshivot in Israel while pursuing their undergraduate studies. The small size and intimate nature of our shiurim coupled with  the personal mentorship style of our rabbeim enable our students to sustain the momentum of personal growth they have attained post high school as they transition to life as college students. Our goal is to help each and every talmid develop his potential as an independent learner whose dedication to learning is fueled by passion, excitement, and the desire to achieve success in learning and in life.\n\nOur program features a fully flexible curriculum with options for both full-time and part-time students. Multiple tracks of advanced Gemara shiurim are given in the morn",
            "ein": "237153226",
            "name": "Yeshiva Bnei Torah",
            "profileUrl": "https://www.every.org/yeshiva-bnei-torah",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/os2uojsczmp5nqx7uvpj",
            "logoCloudinaryId": "profile_pics/os2uojsczmp5nqx7uvpj",
            "matchedTerms": []
        },
        {
            "description": "Youth hostel in Jerusalem's Old City.. The Heritage House is more than just a place to stay. It is a place for Jews from all over the world to come together and have an opportunity to learn what lies behind the fabric of their heritage. It gives people an opportunity to grow where they might not have anywhere else.",
            "ein": "452688006",
            "name": "Heritage House",
            "profileUrl": "https://www.every.org/heritage-house",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yjknqflqiaa32rlqef9a",
            "logoCloudinaryId": "profile_pics/yjknqflqiaa32rlqef9a",
            "matchedTerms": []
        },
        {
            "description": "We are a gap-year Yeshiva in Modi'in, Israel. Our focus is on philosophy, analytic Gemara study, and thinking independently.. Yeshivat Migdal HaTorah (Migdal) offers a unique and extraordinary experience for post yeshiva high school students. In addition to advanced studies in Gemara, Tanach, Halacha, Jewish History, Philosophy and the Land of Israel, the Migdal HaTorah curriculum also focuses on contemporary Halachic issues with an emphasis on the many halachic challenges Bnei-Torah will face as they establish careers and confront the complexities of our modern world.\nFor this reason, the majority of Migdal’s rabbanim and faculty hold professional positions in the secular world and thus serve as positive role-models of a lifestyle that balances a commitment to advanced Torah learning and mitzvot with the demands of college, career, and family.\nMigdal HaTorah offers its students an individualized learning program that provides them with the skills needed for independent self-study of",
            "ein": "453445150",
            "name": "American Friends of Yeshivat Migdal Hatorah",
            "profileUrl": "https://www.every.org/migdalhatorah",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/qy83sgvaltzsohye12uu",
            "logoCloudinaryId": "profile_pics/qy83sgvaltzsohye12uu",
            "matchedTerms": []
        },
        {
            "description": "Spreading the joy and warmth of Judaism in Cypress, Jersey Village, and the Northwest Houston community. Our Chabad House is more than just a synagogue. It is a home for any Jew looking for a warm and spiritual place to grow. At Chabad, everybody's welcome. Come when you want. Leave when you want. Bring the whole gang. Treat your soul to something special. With a \"come as you are\" attitude, you'll feel right at home. No matter where you live, work or study, if you are looking for a place to express your soul, this place is for you.",
            "ein": "832701870",
            "name": "Chabad Of Cypress And Northwest Houston",
            "profileUrl": "https://www.every.org/chabadcypress",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/azppqus5prftlxguu0mi",
            "logoCloudinaryId": "profile_pics/azppqus5prftlxguu0mi",
            "matchedTerms": []
        },
        {
            "description": "Transforming Jewish values into tangible deeds in Atlanta, Israel, and around the world.\n. Now more than ever, we all need a way to connect. To feel that we belong, to explore, and to grow. We’re here to bring new possibilities to life and awaken the potential in Atlanta’s Jewish community.",
            "ein": "581021791",
            "name": "Jewish Federation of Greater Atlanta",
            "profileUrl": "https://www.every.org/jewishatlanta",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/jlqqqsm5sr10ghcpo09g",
            "logoCloudinaryId": "profile_pics/jlqqqsm5sr10ghcpo09g",
            "matchedTerms": []
        },
        {
            "description": "A community built by young creatives and professionals, celebrating Judaism and each other..",
            "ein": "475196415",
            "name": "Chabad Of Eagle Rock And Echo Park",
            "profileUrl": "https://www.every.org/nelachabad",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/lkhblk9d6v6bjieaymdl",
            "logoCloudinaryId": "profile_pics/lkhblk9d6v6bjieaymdl",
            "matchedTerms": []
        },
        {
            "ein": "113534722",
            "name": "Torah V Chesed Nanash",
            "profileUrl": "https://www.every.org/torah-v-chesed-nanash",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ft0caegdxolxnblfpauz",
            "logoCloudinaryId": "profile_pics/ft0caegdxolxnblfpauz",
            "matchedTerms": []
        },
        {
            "ein": "261763882",
            "name": "Merkos Linyonei Chinuch Lubavitch Chabad Of Illinois Inc",
            "profileUrl": "https://www.every.org/chabadillinois",
            "matchedTerms": []
        }
    ],
    "justice": [
        {
            "description": "The Multidisciplinary Association for Psychedelic Studies supports psychedelic and cannabis research, education and policy reform.. Founded in 1986, the Multidisciplinary Association for Psychedelic Studies (MAPS) is a visionary 501(c)(3) non-profit organization ushering the safe and ethical use of psychedelics as tools for healing and growth on individual, familial, societal, and planetary levels.\n\nMAPS’ top priority is ethically introducing global access to MDMA-assisted therapy as a treatment for posttraumatic stress disorder (PTSD) through regulatory approvals and training certification for therapy providers, as well as public education, policy reform, and building community support networks.\n\nHow Your Donation Will Help\n\nWhile the MDMA drug development program is the main priority of MAPS, the organization's programs include research into other psychedelic compounds and provide critical resources for researchers around the world interested in studying psychedelics. These resource",
            "ein": "592751953",
            "name": "MAPS",
            "profileUrl": "https://www.every.org/maps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/o7qkdrwh9jsjwv3inrph",
            "logoCloudinaryId": "profile_pics/o7qkdrwh9jsjwv3inrph",
            "matchedTerms": []
        },
        {
            "description": "EJI is committed to ending mass incarceration in the US and challenging racial and economic injustice.. Founded in 1989 by Bryan Stevenson, a widely acclaimed public interest lawyer and bestselling author of Just Mercy, EJI is a private, 501(c)(3) nonprofit organization that provides legal representation to people who have been illegally convicted, unfairly sentenced, or abused in state jails and prisons. We challenge the death penalty and excessive punishment and we provide re-entry assistance to formerly incarcerated people.\n\nEJI works with communities that have been marginalized by poverty and discouraged by unequal treatment. We are committed to changing the narrative about race in America. EJI produces groundbreaking reports, an award-winning wall calendar, and short films that explore our nation’s history of racial injustice, and we recently launched an ambitious national effort to create new spaces, markers, and memorials that address the legacy of slavery, lynching, and racial",
            "ein": "631135091",
            "name": "Equal Justice Initiative",
            "profileUrl": "https://www.every.org/eji",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/eji_kdsj1q",
            "logoCloudinaryId": "faja_profile/eji_kdsj1q",
            "matchedTerms": []
        },
        {
            "description": "Reshape America's pretrial system. 100% of online donations are used to post bail and bring people home.. Fight mass incarceration by paying bail for Americans and offering needed support. We believe that paying bail for someone in need is an act of resistance against a system that criminalizes race and poverty and an act of solidarity with local communities and movements for decarceration. Over the next five years, The Bail Project will open dozens sites in high-need jurisdictions with the goal of paying bail for tens of thousands of low-income Americans, all while collecting stories and data that prove money bail is not necessary to ensure people return to court. We won’t stop until meaningful change is achieved and the presumption of innocence is no longer for sale.",
            "ein": "814985512",
            "name": "The Bail Project",
            "profileUrl": "https://www.every.org/bailproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kxegvx3e9ltozlpey3vz",
            "logoCloudinaryId": "faja_profile/kxegvx3e9ltozlpey3vz",
            "matchedTerms": []
        },
        {
            "description": "A virtual non-profit organization & antiracist education brand that promotes justice for all.  . 540 provides an online hub for accessible education that promotes justice for all. We create a cultural shift in perspectives and practice through learning rooted in social justice and anti-racism.",
            "ein": "842870050",
            "name": "540WMain",
            "profileUrl": "https://www.every.org/540wmain",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zlp47evyyinbr4faz3jd",
            "logoCloudinaryId": "profile_pics/zlp47evyyinbr4faz3jd",
            "matchedTerms": []
        },
        {
            "description": "We develop public safety solutions for the District of Columbia that are evidence-driven, community-rooted, and racially just.. DC Justice Lab is a team of law and policy experts researching, organizing, and advocating for large-scale changes to the District’s criminal legal system. \n\nDC Justice Lab envisions a District that:\n- Treats every person as an essential part of our community and no longer subjugates, dehumanizes, or jettisons people who have broken the law.\n- Recognizes that it has historically underserved and overpoliced poor people and Black people, creating and subjugating an undercaste that is system-involved.\n- Takes dramatic measures to rectify and reverse the harm it inflicted.\n- Constantly reexamines its rules and practices to ensure they are calibrated to make us collectively safer, freer, and equal. \n- Ends its reliance on police, prosecutors, and prisons, in favor of solutions that maximize safety and freedom for all.\n- Ensures its criminal legal system cannot be",
            "ein": "843479025",
            "name": "DC Justice Lab",
            "profileUrl": "https://www.every.org/dcjusticelab",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ym8o1ybhgjudrdunez27",
            "logoCloudinaryId": "profile_pics/ym8o1ybhgjudrdunez27",
            "matchedTerms": []
        },
        {
            "description": "Works to exonerate innocent people through DNA testing and reform the criminal justice system to prevent injustice.. The Innocence Project was founded in 1992 by Barry C. Scheck and Peter J. Neufeld at the Benjamin N. Cardozo School of Law at Yeshiva University to assist prisoners who could be proven innocent through DNA testing. More than 350 people in the United States have been exonerated by DNA testing, including 38 who pleaded guilty to crimes they did not commit and 20 who served time on death row. The Innocence Project provided direct representation or critical assistance in more than 200 exonerations.   The Innocence Project’s full-time staff attorneys and Cardozo clinic students provide direct representation or critical assistance in most of these cases. The Innocence Project’s groundbreaking use of DNA technology to free innocent people has provided irrefutable proof that wrongful convictions are not isolated or rare events but instead arise from systemic defects. Now an ind",
            "ein": "320077563",
            "name": "Innocence Project",
            "profileUrl": "https://www.every.org/innocenceproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/hug5fwweu2tn0rsgx7h0",
            "logoCloudinaryId": "profile_pics/hug5fwweu2tn0rsgx7h0",
            "matchedTerms": []
        },
        {
            "description": "We can end police violence in America. Over 1,000 people are killed by police every year in America. We are calling on local, state, and federal lawmakers to take immediate action to adopt data-driven policy solutions to end this violence and hold police accountable.\n\nCampaign ZERO was developed with contributions from activists, protesters and researchers across the nation. This data-informed platform presents comprehensive solutions to end police violence in America. It integrates community demands and policy recommendations from research organizations and President Obama's Task Force on 21st Century Policing.",
            "ein": "813764408",
            "name": "Campaign Zero",
            "profileUrl": "https://www.every.org/campaignzero",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/uopjgyqowihaz715jbko",
            "logoCloudinaryId": "profile_pics/uopjgyqowihaz715jbko",
            "matchedTerms": []
        },
        {
            "description": "Realizing the promise of the Bill of Rights for all - the ACLU dares to create a more perfect union.. The ACLU dares to create a more perfect union — beyond one person, party, or side. Our mission is to realize this promise of the United States Constitution for all and expand the reach of its guarantees.",
            "ein": "136213516",
            "name": "ACLU Foundation",
            "profileUrl": "https://www.every.org/aclu",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/aclu_wtqwdg",
            "logoCloudinaryId": "faja_profile/aclu_wtqwdg",
            "matchedTerms": []
        },
        {
            "description": "Prison Journalism Project trains incarcerated writers to become journalists and publishes their stories.. Prison Journalism Project is launching its first-ever year-end fundraising campaign! We're hoping to raise $30,000 in donations by December 31, and your year-end gift of up to $1,000 will be matched, up to $20,000 total thanks to Newsmatch, the Independence Media Foundation, and the Loud Hound Partner Fund. \n\nThis is an exciting time for us and the future of our work. \n\nAs an all-volunteer team, we've published more than 1,000 stories from over 390 writers across 150+ prisons in 35 states; we started a print newspaper, PJP x Inside, for people in prison by people in prison; and we created PJP J-School with a faculty of veteran journalists who are working with our first cohort of 15 promising writers.\n\nRight now our plan is to sink everything into our training programs and the journalism itself — your donation will make a huge impact as we still scramble to cover daily expenses req",
            "name": "Prison Journalism Project",
            "profileUrl": "https://www.every.org/prisonjournalismproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kuiffyv51ybrdqngmgql",
            "logoCloudinaryId": "profile_pics/kuiffyv51ybrdqngmgql",
            "matchedTerms": []
        },
        {
            "description": "America’s premier legal organization fighting for racial justice through litigation, advocacy, and public education.. The NAACP Legal Defense and Educational Fund, Inc. is America's premier legal organization fighting for racial justice. Through litigation, advocacy, and public education, LDF seeks structural changes to expand democracy, eliminate disparities, and achieve racial justice in a society that fulfills the promise of equality for all Americans. LDF also defends the gains and protections won over the past 70 years of civil rights struggle and works to improve the quality and diversity of judicial and executive appointments.",
            "ein": "131655255",
            "name": "NAACP Legal Defense Fund",
            "profileUrl": "https://www.every.org/naacp-ldf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kop6pinsnnu57x6mdz71",
            "logoCloudinaryId": "profile_pics/kop6pinsnnu57x6mdz71",
            "matchedTerms": []
        }
    ],
    "latine-led": [
        {
            "description": "Our mission is to provide quality college mentorship for all. . About Us.\nFor Students. By Students.\n\nAs recent graduates, we've gone through the challenge of juggling AP classes, standardized testing, college applications, financial aid, and searching for scholarships - all within the same semester. It can be tough, especially if you don't have anyone to help you. That's where we come in.\n\n\nWe started Take on College in 2019 because we noticed the lack of mentorship resources available for those who would become first-generation college students. The average college counselor can cost upwards of $100 per meeting - and as college students who can't afford that, we want to help.\n\n \n\nThrough Take on College, we provide an accessible program for students to learn from others who have just gone through the same process. Each one of our mentors has experience in mentoring and college essay editing. Enjoy our services; learn about our take on essays, resumes, cover letters, and more!",
            "ein": "851528191",
            "name": "Take on College",
            "profileUrl": "https://www.every.org/take-on-college",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yieljmdaxb0c3dvtr4wl",
            "logoCloudinaryId": "profile_pics/yieljmdaxb0c3dvtr4wl",
            "matchedTerms": []
        },
        {
            "description": "We are devoted to abolishing immigration detention, while ending the isolation of people currently suffering in this system.. Freedom for Immigrants is a national nonprofit devoted to abolishing immigration detention through two main strategies, while ending the isolation of people currently suffering in this profit¬-driven system. First, we mobilize a network of 4,500 watchdog community members that uncovers and tracks abuses experienced by those in immigration detention, shedding light in a consistent manner for the first time on this hidden system. Second, we are modeling a community-based alternative to detention that welcomes immigrants into the social fabric of the United States. Through these windows into the system, we gather data and stories to combat injustice at the individual level and push systemic change.",
            "ein": "800875881",
            "name": "Freedom for Immigrants",
            "profileUrl": "https://www.every.org/freedom-for-immigrants",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/user_photo5bd2b359a828f_fbylu5",
            "logoCloudinaryId": "user_photo5bd2b359a828f_fbylu5",
            "matchedTerms": []
        },
        {
            "description": "\"Providing relief and recovery in the wake of major disasters, traumatic events and social injustice.\" -AWB. Acupuncturists Without Borders (AWB) provides immediate disaster relief and recovery to communities that are in crisis resulting from disaster or human conflict. AWB is committed to creating alliances with local community based organizations and treating all who have been affected - survivors, first responders, emergency personnel and other care providers.  AWB uses community-style acupuncture to provide caring, compassionate treatment in a group setting. This model of treatment allows everyone treated to experience relief from stress and trauma together. When the entire group feels calm and quiet, hope, determination and resilience rises powerfully within it.",
            "ein": "542190889",
            "name": "Acupuncturists Without Borders",
            "profileUrl": "https://www.every.org/acuwithoutborders",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/nzcszgppsapamjdwpmxh",
            "logoCloudinaryId": "profile_pics/nzcszgppsapamjdwpmxh",
            "matchedTerms": []
        },
        {
            "description": "We amplify opportunities for equity to the historically excluded in STEAM, conservation, and birding.. From scholarships benefiting students who identify under the imperfect term “BIPOC” to Freedom Birders. We offer multiple opportunities for career development, community science, and networking.\n\nWe envision a system in which higher education is free, equitable, and accessible in the United States. We are one of the few Black-led and Latinx-led organizations, at all organizational levels, in conservation. Your generosity helps us amplify opportunities for equity in conservation.",
            "ein": "871887302",
            "name": "Amplify the Future",
            "profileUrl": "https://www.every.org/amplifythefuture",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/bpcng0d08jxpe2rvamjw",
            "logoCloudinaryId": "profile_pics/bpcng0d08jxpe2rvamjw",
            "matchedTerms": []
        },
        {
            "description": "Believes that diverse families and their children deserve opportunities to succeed and strengthen our shared society.. Our mission is to help immigrants and low income families access needed services, develop self-sufficiency and participate fully as members of the community.  Nuestra misión es ayudar a familias inmigrantes a tener acceso a servicios, desarrollar auto-suficiencia y participar enteramente como miembros de la comunidad.",
            "ein": "943154078",
            "name": "Good Samaritan Family Resource Center",
            "profileUrl": "https://www.every.org/goodsamfrc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/yp0vjeefhpkaseyfpufw",
            "logoCloudinaryId": "faja_profile/yp0vjeefhpkaseyfpufw",
            "matchedTerms": []
        },
        {
            "description": "Celebrating 45 years of service to the community, serving over 4,800 youth, adults and families across 3 program areas.  We are a non-profit, 501(c)3.. Mission: We empower youth, adults and families in our diverse community to achieve well-being, growth and success. Vision: A strong community with opportunities for all.",
            "ein": "941735064",
            "name": "North Marin Community Services",
            "profileUrl": "https://www.every.org/northmarincs",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/jjc3dsof4yzrx3ziu1z7",
            "logoCloudinaryId": "faja_profile/jjc3dsof4yzrx3ziu1z7",
            "matchedTerms": []
        },
        {
            "description": "HIP’s mission is to strengthen Latino communities by increasing resources for the Latino and Latin American civil sector; by increasing Latino participation and leadership throughout the field of philanthropy; and to foster policy change to enhance equity and inclusiveness..",
            "ein": "943040607",
            "name": "Hispanics in Philanthropy",
            "profileUrl": "https://www.every.org/hiponline",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/mdpykiv160dmyl37nxea",
            "logoCloudinaryId": "faja_profile/mdpykiv160dmyl37nxea",
            "matchedTerms": []
        },
        {
            "description": "The Jeneba Project transforms girls' education in Sierra Leone by imparting knowledge and inspiring critical thinking and action.. A Next Jen revolution.\n\nThe Sengbe Pieh senior secondary excellence academy is dedicated to granting dozens of promising young women access to a quality high school education and to paving a way for them to forge a brighter future. Through the academy, students not only gain strong academic foundations but also learn to establish their voice, gain awareness of their rights, take pride in and ownership of their minds and bodies, and gain the confidence to march forward and dictate their own successes. \n\nWe aim to transform the face of education for girls in Sierra Leone with a mission to foster intellectual growth, develop leadership and create ripples of social impact across communities.\n\nWe focus on four pillars of success:\n\n1. Education quality:  By focusing on small classes of 24 girls that share 6 teachers, we provide the personalization and focus need",
            "ein": "271519916",
            "name": "Jeneba Project",
            "profileUrl": "https://www.every.org/jenebaproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ofswrb54jbpiazmnkkuz",
            "logoCloudinaryId": "profile_pics/ofswrb54jbpiazmnkkuz",
            "matchedTerms": []
        },
        {
            "description": "A non-profit organization that empowers & supports people of color & women small business owners in the under-served communities.. Synergy4WBO is a non-profit organization that is changing the future! By empowering people of color and women-owned small businesses especially in the underserved communities to be equally profitable, sustainable,and successful compared to their non-minority counterparts.\nWe provide one-on-one mentoring, professional coaching, educational opportunities, marketing support, and access to funding to members of our community. We help them to rise up and thrive beyond their unimaginable potential. \nOur members rate our overall program success at 4.6 out of 5.0 and in achieving direct growth and sustainability.",
            "ein": "853454867",
            "name": "Synergy 4wbo Inc",
            "profileUrl": "https://www.every.org/synergy-4wbo-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xssz3rcxd1aaw8ofu7uh",
            "logoCloudinaryId": "profile_pics/xssz3rcxd1aaw8ofu7uh",
            "matchedTerms": []
        },
        {
            "description": "Techqueria is a 501(c)(3) nonprofit that serves the largest global community of Latinx professionals in the tech industry 🌮. Our mission is to provide Latinx professionals with the resources and support that they need to drive their careers, enable them to thrive, and become leaders in the tech industry.",
            "ein": "832656715",
            "name": "Techqueria",
            "profileUrl": "https://www.every.org/techqueria",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ckcgrcqihwnii10n5ogi",
            "logoCloudinaryId": "profile_pics/ckcgrcqihwnii10n5ogi",
            "matchedTerms": []
        }
    ],
    "legal": [
        {
            "description": "America’s premier legal organization fighting for racial justice through litigation, advocacy, and public education.. The NAACP Legal Defense and Educational Fund, Inc. is America's premier legal organization fighting for racial justice. Through litigation, advocacy, and public education, LDF seeks structural changes to expand democracy, eliminate disparities, and achieve racial justice in a society that fulfills the promise of equality for all Americans. LDF also defends the gains and protections won over the past 70 years of civil rights struggle and works to improve the quality and diversity of judicial and executive appointments.",
            "ein": "131655255",
            "name": "NAACP Legal Defense Fund",
            "profileUrl": "https://www.every.org/naacp-ldf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kop6pinsnnu57x6mdz71",
            "logoCloudinaryId": "profile_pics/kop6pinsnnu57x6mdz71",
            "matchedTerms": []
        },
        {
            "description": "We conduct and support legal research that tackles the world’s most pressing problems.. Support our mission to conduct legal research that tackles the world's most pressing problem, and to build a global community of legal scholars who work to protect the interests of future generations. You can get in touch with us to understand how your gift can help us reach these goals.\n\nWe currently focus on four cause areas: Law and governance of advanced artificial intelligence, synthetic biology, institutional design, and meta-research. Our research is influenced by the principles of effective altruism and the longtermism paradigm.\n\n- Our Goals -\nFoundational Research: Our primary goal is to conduct foundational research. By doing so, we aim to determine which problems legal researchers should work on in order to tackle the world’s most pressing problems. We refer to this as “meta-level research.” We also conduct research on the identified problems, which we call “object-level research.” Our a",
            "ein": "851024198",
            "name": "Legal Priorities Project",
            "profileUrl": "https://www.every.org/legalpriorities",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dcf73eejns99ebgnfixf",
            "logoCloudinaryId": "profile_pics/dcf73eejns99ebgnfixf",
            "matchedTerms": []
        },
        {
            "description": "Interpreting Freedom Foundation, is a nationally registered 501(c)3, committed to supporting our Afghan Interpreters and Allies.. www.InterpretingFreedom.org Founded in 2018, The Interpreting Freedom Foundation, a National Nonprofit, a registered 501(c)3 organization, committed to supporting our Afghan Interpreters, allies, and families as they transition to their new life as community members of our United States of America.\n \nWe provide comprehensive support services for all US combat interpreters who were engaged in Operation Enduring Freedom. These military and special ops interpreters played a critical role in the battlefield alongside US Armed Forces.\n \nPlease visit our webpage at www.InterpretingFreedom.org. On there, you will see that we are in many ways very different from other nonprofits. We go out of our way to be highly transparent about the stewarding and spending of your generous donor dollars. On our page, you will see a counter which tracks many of the services we hav",
            "ein": "831204288",
            "name": "Interpreting Freedom Foundation",
            "profileUrl": "https://www.every.org/interpreting-freedom-foundation-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/sc6yudflr8akfjlq3c5n",
            "logoCloudinaryId": "profile_pics/sc6yudflr8akfjlq3c5n",
            "matchedTerms": []
        },
        {
            "description": "We defend the rights of immigrants and refugees, empower individuals and families, and advocate for liberty.. The Refugee and Immigrant Center for Education and Legal Services (RAICES) serves immigrants and refugees in our community by providing immigration-related legal services, advocacy and opportunities for educational and social support. We believe that by actively promoting the well-being and informed participation of immigrants and refugees in the community, everyone benefits.",
            "ein": "742436920",
            "name": "RAICES",
            "profileUrl": "https://www.every.org/raicestexas",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kilckqzw3hssccgyyyag",
            "logoCloudinaryId": "faja_profile/kilckqzw3hssccgyyyag",
            "matchedTerms": []
        },
        {
            "description": "The nation's leading LGBTQ immigrant rights organization.. The nation's leading LGBTQ immigrant rights organization. We represent and advocate for people from around the world fleeing violence, abuse, and persecution because of their sexual orientation, gender identity, or HIV status. Our legal team has won asylum for more than 1,000 LGBTQ and HIV-positive immigrants while maintaining a 99% success rate. Your gift will make a unique difference.",
            "ein": "133802711",
            "name": "Immigration Equality",
            "profileUrl": "https://www.every.org/immigrationequality",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wkva0gh7omf5yqxwjv8m",
            "logoCloudinaryId": "profile_pics/wkva0gh7omf5yqxwjv8m",
            "matchedTerms": []
        },
        {
            "description": "Legal Aid of Arkansas provides high-quality free civil legal aid to low-income Arkansans.\nLearn more at www.arlegalaid.org. . We bring change to our community by providing free legal services to those who need it most and can afford it the least.\n\nLegal Aid of Arkansas makes a significant – often lifesaving – difference in the lives of Arkansas’s most vulnerable residents by giving them a place to turn for legal help to resolve problems affecting their most basic needs.",
            "ein": "710439977",
            "name": "Legal Aid of Arkansas",
            "profileUrl": "https://www.every.org/legal-aid-of-arkansas",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/uj3acs0it3rzkpea9931",
            "logoCloudinaryId": "profile_pics/uj3acs0it3rzkpea9931",
            "matchedTerms": []
        },
        {
            "description": "Defending and advancing the rights and opportunities of low-income immigrants and their family members.. National Immigration Law Center (NILC) is one of the leading organizations in the U.S. exclusively dedicated to defending and advancing the rights of immigrants with low income.",
            "ein": "954539765",
            "name": "National Immigration Law Center",
            "profileUrl": "https://www.every.org/nilc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ycmcvouqhd55bv4kdssa",
            "logoCloudinaryId": "profile_pics/ycmcvouqhd55bv4kdssa",
            "matchedTerms": []
        },
        {
            "description": "MWH supports all survivors of domestic violence, sexual assault, & human trafficking and provides outreach & prevention programs.. For nearly fifty years, Middle Way House has been providing services to people in crisis. Today, Middle Way House provides empowering services such as emergency shelter; a 24-hour help and crisis line; on-scene advocacy; support services; and transitional and permanent housing solutions to support survivors of domestic violence, sexual assault, and human trafficking. Middle Way House also touches the lives of community members through our outreach education and prevention programs. Middle Way House serves the following six counties throughout south-central Indiana: Monroe, Greene, Lawrence, Owen, Morgan, and Martin counties. \n\nAt Middle Way House, we believe that acts of domestic and sexual violence, and our society’s tolerance of them, are expressions of deeply rooted oppression in our culture. Consequently, Middle Way House cannot hope to end violence wi",
            "ein": "237300355",
            "name": "Middle Way House, Inc.",
            "profileUrl": "https://www.every.org/middle-way-house",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/pf3tzywoaqkdh2smrmq4",
            "logoCloudinaryId": "profile_pics/pf3tzywoaqkdh2smrmq4",
            "matchedTerms": []
        },
        {
            "description": "Next gen, racial justice & civil rights org inspiring & supporting natl & local movements toward a just democracy.. Advancement Project National Office focuses on tackling inequity with innovative strategies and strong community alliance. We combine law, communications, policy, and technology to create workable solutions and achieve systemic change on issues of democracy, voting rights, and access to justice. Our movement lawyering model has sparked a new approach to the practice of civil rights law, and our pioneering work on the school-to-prison pipeline and voter protection have not only catalyzed new movements and shifted national discourse but has led to significant reforms in our society. We remain at the cutting edge of the racial justice movement. \n\nAdvancement Project’s California office is a public policy change organization rooted in the civil rights movement. We engineer large-scale systems change to remedy inequality, expand opportunity and open paths to upward mobility.",
            "ein": "954835230",
            "name": "Advancement Project",
            "profileUrl": "https://www.every.org/advancement-project",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/fxvftafucmp94ltipalo",
            "logoCloudinaryId": "profile_pics/fxvftafucmp94ltipalo",
            "matchedTerms": []
        },
        {
            "description": "DC KinCare Alliance supports the legal, financial and related service needs of relatives who raise DC children in times of crisis.. Fueled by high rates of parental incarceration, gun violence, addiction, and mental health problems, some 9,000 DC children live in homes with “relative caregivers.” DC KinCare Alliance is the only organization focused solely on serving these caregivers, who rise to the occasion when parents are not able. They often live at the margins of economic stability yet face an uphill battle in a system designed for traditional families, one that expects relatives to step in without aid. A team of lawyers works to support them (usually grandmothers; often disabled themselves), offering free legal representation and education, as well as assistance with obtaining identification and advocacy in acquiring effective health and mental health care, financial supports, and other services for the whole family. The only organization in DC focused on this population, DC Kin",
            "ein": "821855402",
            "name": "DC KinCare Alliance",
            "profileUrl": "https://www.every.org/dc-kincare-alliance",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/aqbvbkk9n1ejohiafazu",
            "logoCloudinaryId": "profile_pics/aqbvbkk9n1ejohiafazu",
            "matchedTerms": []
        }
    ],
    "lgbt": [
        {
            "description": "The world's largest suicide prevention and crisis intervention organization for LGBTQ youth. TrevorLifeline: 866.488.7386.. The Trevor Project is determined to end suicide among LGBTQ youth by providing life-saving and life-affirming resources including our nationwide, 24/7 crisis intervention lifeline, digital community and advocacy/educational programs that create a safe, supportive and positive environment for everyone.",
            "ein": "954681287",
            "name": "The Trevor Project",
            "profileUrl": "https://www.every.org/trevorproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/sq3etyrvuwwz6fjzhmio",
            "logoCloudinaryId": "faja_profile/sq3etyrvuwwz6fjzhmio",
            "matchedTerms": []
        },
        {
            "description": "The nation's leading LGBTQ immigrant rights organization.. The nation's leading LGBTQ immigrant rights organization. We represent and advocate for people from around the world fleeing violence, abuse, and persecution because of their sexual orientation, gender identity, or HIV status. Our legal team has won asylum for more than 1,000 LGBTQ and HIV-positive immigrants while maintaining a 99% success rate. Your gift will make a unique difference.",
            "ein": "133802711",
            "name": "Immigration Equality",
            "profileUrl": "https://www.every.org/immigrationequality",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wkva0gh7omf5yqxwjv8m",
            "logoCloudinaryId": "profile_pics/wkva0gh7omf5yqxwjv8m",
            "matchedTerms": []
        },
        {
            "description": "We envision a world where LGBTQ people are ensured equality at home, at work and in every community.. By inspiring and engaging all Americans, HRC strives to end discrimination against LGBTQ+ citizens and realize a nation that achieves fundamental fairness and equality for all. HRC seeks to improve the lives of LGBTQ+ Americans by advocating for equal rights and benefits in the workplace, ensuring families are treated equally under the law and increasing public support among all Americans through innovative advocacy, education and outreach programs. HRC works to secure equal rights for LGBTQ individuals and families at the federal and state levels by lobbying elected officials, mobilizing grassroots supporters, educating Americans, investing strategically to elect fair-minded officials and partnering with other LGBTQ organizations.\n\nHRC envisions a world where all LGBTQ+ people can participate fully in the systems that shape our daily lives. Through public education, research, and pol",
            "ein": "521481896",
            "name": "Human Rights Campaign Foundation",
            "profileUrl": "https://www.every.org/hrc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/egwi6zxsanz0im5halcl",
            "logoCloudinaryId": "faja_profile/egwi6zxsanz0im5halcl",
            "matchedTerms": []
        },
        {
            "description": "Outward Bound California changes lives through challenge and discovery, for youth, adults and veterans.. Outward Bound California is a character development school that uses high-impact activities in a wilderness setting to teach human skills: compassion, confidence, teamwork, leadership, resilience and self-awareness.  We lead our students -- teens, adults and veterans -- on character-building expeditions in the High Sierra, Joshua Tree, the Coast Range of Central California, and on one-day experiences on our ropes challenge course in San Francisco.  \n\nOutward Bound California experiences are available to the general public, through group programming for schools and youth service nonprofits, and to veterans.  Over two-thirds of our students receive scholarship support.  \n\nOutward Bound California engages in equity work with the goal of ensuring high-quality outcomes for students and staff across identities (race, socioeconomic status, gender identity, immigration status, and more).\nw",
            "ein": "264206241",
            "name": "Outward Bound California",
            "profileUrl": "https://www.every.org/outward-bound-ca",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ppzdotjcepwrkpijmdm2",
            "logoCloudinaryId": "faja_profile/ppzdotjcepwrkpijmdm2",
            "matchedTerms": []
        },
        {
            "description": "We help LGBTQI people escape persecution and violence around the world. 🏳️‍🌈🌎  You can help save lives.. Can you imagine living in fear of persecution, torture or murder? Can you imagine going to jail for who you are or who you love?\nThat is a reality for so many LGBTQI individuals around the world. Since our founding in 2006, Rainbow Railroad has helped more than 800 individuals find a path to safety to start a new life — free from persecution.",
            "ein": "474896980",
            "name": "Rainbow Railroad",
            "profileUrl": "https://www.every.org/rainbowrailroad",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/meiue59urqiu5rgw9vrt",
            "logoCloudinaryId": "profile_pics/meiue59urqiu5rgw9vrt",
            "matchedTerms": []
        },
        {
            "description": "Community organizing center for LGBTSTGNC People of Color.. The Audre Lorde Project is a Lesbian, Gay, Bisexual, Two Spirit, Trans and Gender Non Conforming People of Color center for community organizing, focusing on the New York City area. Through mobilization, education and capacity-building, we work for community wellness and progressive social and economic justice. Committed to struggling across differences, we seek to responsibly reflect, represent and serve our various communities.",
            "ein": "061502452",
            "name": "Audre Lorde Project",
            "profileUrl": "https://www.every.org/alp",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/orrxiitz7knfqk47jytq",
            "logoCloudinaryId": "faja_profile/orrxiitz7knfqk47jytq",
            "matchedTerms": []
        },
        {
            "description": "Legal Aid of Arkansas provides high-quality free civil legal aid to low-income Arkansans.\nLearn more at www.arlegalaid.org. . We bring change to our community by providing free legal services to those who need it most and can afford it the least.\n\nLegal Aid of Arkansas makes a significant – often lifesaving – difference in the lives of Arkansas’s most vulnerable residents by giving them a place to turn for legal help to resolve problems affecting their most basic needs.",
            "ein": "710439977",
            "name": "Legal Aid of Arkansas",
            "profileUrl": "https://www.every.org/legal-aid-of-arkansas",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/uj3acs0it3rzkpea9931",
            "logoCloudinaryId": "profile_pics/uj3acs0it3rzkpea9931",
            "matchedTerms": []
        },
        {
            "description": "The National Black Justice Coalition's mission is to end racism, homophobia, and LGBTQ+/SGL bias and stigma.. Since 2003, the National Black Justice Coalition (NBJC) has been America’s leading national civil rights organization dedicated to the empowerment of Black lesbian, gay, bisexual, transgender, queer+, and same-gender loving (LGBTQ+/SGL) people, including people living with HIV/AIDS through coalition building, federal policy change, research, and education. Our mission is to end racism, homophobia, and LGBTQ+/SGL bias and stigma. NBJC supports Black individuals, families, and communities in strengthening the bonds and bridging the gaps between the movements for racial justice and LGBTQ+/SGL equity.\n\nWe envision a world where all people are fully empowered to participate safely, openly, and honestly in family, faith, and community, regardless of race, class, gender identity, or sexual orientation.",
            "ein": "200667808",
            "name": "National Black Justice Coalition (NBJC)",
            "profileUrl": "https://www.every.org/nbjc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zzue4o7zlhx0puwwbq4p",
            "logoCloudinaryId": "profile_pics/zzue4o7zlhx0puwwbq4p",
            "matchedTerms": []
        },
        {
            "description": "A leading education organization working to create safe & LGBTQ-inclusive K-12 schools. . As GLSEN was founded by a group of teachers in 1990, we knew that educators play key roles in creating affirming learning environments for LGBTQ youth. But as well as activating supportive educators, we believe in centering and uplifting student-led movements, which have powered initiatives like the Day of Silence, Ally Week, and more.\n\nWe conduct extensive and original research to inform our evidence-based solutions for K-12 education.\n\nWe author developmentally appropriate resources for educators to use throughout their school community.\n\nWe advise on, advocate for, and research comprehensive policies designed to protect LGBTQ students as well as students of marginalized identities. We’ve brought record support to the Safe Schools Improvement Act and the Student Non-Discrimination Act and fought discriminatory legislation in over 15 states. \n\nWe coordinate a network of 43 chapters in 30 states",
            "ein": "043234202",
            "name": "GLSEN",
            "profileUrl": "https://www.every.org/glsen",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/tsx33vgst8ubmhzfvjhd",
            "logoCloudinaryId": "faja_profile/tsx33vgst8ubmhzfvjhd",
            "matchedTerms": []
        },
        {
            "description": "Dedicated to improving the quality of trans lives by responding to the critical needs of our community.. Trans Lifeline is a national trans-led organization dedicated to improving the quality of trans lives by responding to the critical needs of our community with direct service, material support, advocacy, and education. Our vision is to end trans suicide and improve overall life-outcomes of trans people by facilitating justice-oriented, collective community aid.",
            "ein": "472097494",
            "name": "Trans Lifeline",
            "profileUrl": "https://www.every.org/translifeline",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/crocdzcckmhj9tx3agiq",
            "logoCloudinaryId": "faja_profile/crocdzcckmhj9tx3agiq",
            "matchedTerms": []
        }
    ],
    "libraries": [
        {
            "description": "We collect, preserve, and provide access to community media in order to inspire and celebrate everyone's cultural contributions.. Read/Write Library is the only library of its kind in the world and seeks to be a model for other cities to leverage their own media as a tool to recognize their residents' power and expertise in shaping local histories.\n\nUnlike a traditional read-only library, we encourage contributions, whether community newspapers, self-published chapbooks by young poets, or art books by tenured professors, making cultural participation more transparent and accessible. \n\nThrough our public programs and free browsing hours, growing collection of over 6,000 publications, and open source catalog, the library strives to raise the visibility of work produced by Chicagoans of all backgrounds to reveal connective threads across neighborhoods, generations, and cultures and to encourage inquiry into and ownership of the historical record. \n\nWe recognize the contributions that all",
            "ein": "270791563",
            "name": "Read / Write Library Chicago",
            "profileUrl": "https://www.every.org/read-write-library.org",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/iv7ptd3guyoyy1ofpwrx",
            "logoCloudinaryId": "profile_pics/iv7ptd3guyoyy1ofpwrx",
            "matchedTerms": []
        },
        {
            "description": "Creative Commons (CC) stewards a universally accessible infrastructure for open knowledge, culture, and collaboration. . For twenty years, we have been at the forefront of the open movement, empowering people, institutions, and systems to share information openly to advance human rights and development goals, equity and access, and innovation. CC has dedicated programs in open education and open culture, and policy. Additionally, we maintain the suite of CC licenses, which enables free and legal sharing worldwide. These tools have unlocked more than 2 billion pieces of content from researchers, artists, teachers, museums and libraries, and powers platforms like Wikipedia.\n\nIn partnership with our global community, CC takes comprehensive action across four key components: policy, infrastructure, capacity-building and training, and community engagement. \n\nMore people are sharing content than ever before, and the world is rapidly changing. CC hopes to continue fulfilling the promise of t",
            "ein": "043585301",
            "name": "Creative Commons",
            "profileUrl": "https://www.every.org/creative-commons",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/robpudsvi51hvloujnub",
            "logoCloudinaryId": "faja_profile/robpudsvi51hvloujnub",
            "matchedTerms": []
        },
        {
            "description": "Advocates, fundraises, and provides critical support for the San Francisco Public Library.. We raise funds for programs and capital improvements for libraries.  We advocate for public support funding for libraries.  Through sales and donations we place nearly one million books into the hands of readers each year.  We offer a broad range of programs and partnerships to support a literate community.  We help grow new ideas and support an ever-improving library system to meet the changing needs of the community",
            "ein": "946085452",
            "name": "Friends of the San Francisco Public Library",
            "profileUrl": "https://www.every.org/friendssfpl",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/p68jb7xjxekzyfsbgjfp",
            "logoCloudinaryId": "faja_profile/p68jb7xjxekzyfsbgjfp",
            "matchedTerms": []
        },
        {
            "description": "An independent library system for the 2.5 million residents of Brooklyn and the 5th largest library system in the United States..",
            "ein": "111904261",
            "name": "Brooklyn Public Library",
            "profileUrl": "https://www.every.org/bklynlibrary",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/tzetoa5nbwnbsp6cke7l",
            "logoCloudinaryId": "faja_profile/tzetoa5nbwnbsp6cke7l",
            "matchedTerms": []
        },
        {
            "description": "Library and Museum celebrating the community and history of Akwesasne.",
            "ein": "161012360",
            "name": "Akwesasne Library And Cultural Center Inc",
            "profileUrl": "https://www.every.org/akwesasne-library-and-cultural-center-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/lpiqydrwuacu4lorn0bx",
            "logoCloudinaryId": "profile_pics/lpiqydrwuacu4lorn0bx",
            "matchedTerms": []
        },
        {
            "description": "(CLP) supports educational attainment, economic development, and cultural enrichment in Pittsburgh.. To Engage our Community in Literacy and Learning   Carnegie Library of Pittsburgh will inspire in the citizens of our region respect and responsibility for life-long learning, citizenship, and civic participation.",
            "ein": "250965281",
            "name": "Carnegie Library of Pittsburgh",
            "profileUrl": "https://www.every.org/carnegielibrary",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/jiz5zjbzrzigqiwyvqvy",
            "logoCloudinaryId": "faja_profile/jiz5zjbzrzigqiwyvqvy",
            "matchedTerms": []
        },
        {
            "description": "Dedicated to promoting our Library as an essential institution of our society. Our volunteer members advocate, educate, and raise funds on behalf of the Library, its patron. The Friends of the Seattle Public Library is a non-profit, grassroots organization dedicated to promoting our Library as an essential institution of our society. Our volunteer members advocate, educate, and raise funds on behalf of the Library, its patrons, and the larger Seattle community.",
            "ein": "916037706",
            "name": "Friends of The Seattle Public Library",
            "profileUrl": "https://www.every.org/friendsofspl",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/hgc7fuoexbk4sqwqfn8e",
            "logoCloudinaryId": "faja_profile/hgc7fuoexbk4sqwqfn8e",
            "matchedTerms": []
        },
        {
            "ein": "830725981",
            "name": "Village Book Builders Inc",
            "profileUrl": "https://www.every.org/village-book-builders-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ijaqfcnbqhzklxt6a6fv",
            "logoCloudinaryId": "profile_pics/ijaqfcnbqhzklxt6a6fv",
            "matchedTerms": []
        },
        {
            "description": "The Foundation provides vital financial support to the Library to maintain the quality of all its collections and services.. The Belvedere Tiburon Library Foundation is a grassroots organization championing a public library system that meets our community’s needs.\n\nThe Foundation is the Library’s fundraising partner, advocating for increased access to literacy and technology since 1992.\n\nOur community-wide projects and private philanthropic events allow the Library to maintain its programs and expand its collections and resources.",
            "ein": "680280522",
            "name": "Belvedere-tiburon Library Foundation",
            "profileUrl": "https://www.every.org/beltiblibfoundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/rxe0ebs3hx4t8ibwh4cg",
            "logoCloudinaryId": "profile_pics/rxe0ebs3hx4t8ibwh4cg",
            "matchedTerms": []
        },
        {
            "description": "Project Gutenberg is an online library of free eBooks.. Project Gutenberg was the first provider of free electronic books, or eBooks. Michael Hart, founder of Project Gutenberg, invented eBooks in 1971 and his memory continues to inspire the creation of eBooks and related content today.\n\nThe mission of Project Gutenberg is simple: To encourage the creation and distribution of eBooks. This mission is, as much as possible, to encourage all those who are interested in making eBooks and helping to give them away.",
            "ein": "646221541",
            "name": "Project Gutenberg Literary Archive Foundation",
            "profileUrl": "https://www.every.org/gutenberg",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ewnienvuhirxwu02kcnf",
            "logoCloudinaryId": "profile_pics/ewnienvuhirxwu02kcnf",
            "matchedTerms": []
        }
    ],
    "mental-health": [
        {
            "description": "The Multidisciplinary Association for Psychedelic Studies supports psychedelic and cannabis research, education and policy reform.. Founded in 1986, the Multidisciplinary Association for Psychedelic Studies (MAPS) is a visionary 501(c)(3) non-profit organization ushering the safe and ethical use of psychedelics as tools for healing and growth on individual, familial, societal, and planetary levels.\n\nMAPS’ top priority is ethically introducing global access to MDMA-assisted therapy as a treatment for posttraumatic stress disorder (PTSD) through regulatory approvals and training certification for therapy providers, as well as public education, policy reform, and building community support networks.\n\nHow Your Donation Will Help\n\nWhile the MDMA drug development program is the main priority of MAPS, the organization's programs include research into other psychedelic compounds and provide critical resources for researchers around the world interested in studying psychedelics. These resource",
            "ein": "592751953",
            "name": "MAPS",
            "profileUrl": "https://www.every.org/maps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/o7qkdrwh9jsjwv3inrph",
            "logoCloudinaryId": "profile_pics/o7qkdrwh9jsjwv3inrph",
            "matchedTerms": []
        },
        {
            "description": "Lil BUB is a one of a kind space cat. Since landing on Earth, she's raised over $500,000 for homeless pets.. Lil BUB’s Big Fund exists to advocate for special needs companion animals and build a community that celebrates and fosters the human animal bond. With a focus on animals who are the most difficult to adopt, the most expensive to care for, and who are at a high risk of euthanasia. Lil BUB’s Big Fund provides grants to shelters nationwide and partners with shelters to create special needs foster program initiatives. We visit schools to promote kindness and inclusion. Through our work, we share BUB’s message of overcoming adversity and the knowledge that the things that make us different are worthy of being seen and appreciated.",
            "ein": "844229672",
            "name": "Lil BUB's Big Fund",
            "profileUrl": "https://www.every.org/lilbubsbigfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dsor2nxk97p87umlwhvt",
            "logoCloudinaryId": "profile_pics/dsor2nxk97p87umlwhvt",
            "matchedTerms": []
        },
        {
            "description": "Sharing God’s love with people living on the streets of the mid-peninsula 💛 (every donation is being matched X2 right now). Sharing God's love with people living on the streets of the mid-peninsula 💛\n\nWe are a community-based, non-profit organization that serves the homeless and at-risk populations of the Mid-Peninsula. We establish environments and build relationships where community volunteers can provide food and clothing, as well as referrals for shelter, addiction recovery, and other personal support.\n\n_____\n\nStreet Life Ministries (or SLM) began in 2001 at the downtown Menlo Park train station. Today, due to the help of many people, it now serves over 35,000 meals a year, five nights a week, in Menlo Park, Palo Alto and Redwood City. For 20 years SLM gatherings have built a reputation as the one consistent place the homeless can count on. Whether it is a holiday, a cloudy or rainy day, SLM never varies from the set schedule, giving the homeless a stable option throughout the yea",
            "ein": "453602635",
            "name": "Street Life Ministries",
            "profileUrl": "https://www.every.org/streetlifeministries",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ovg1fwrlcpd9uma8umya",
            "logoCloudinaryId": "profile_pics/ovg1fwrlcpd9uma8umya",
            "matchedTerms": []
        },
        {
            "description": "We help people in crisis by providing emergency health services, and then promote self-reliance through training.. We are a global humanitarian organization dedicated to saving lives and relieving suffering. Established in 1984 by volunteer doctors and nurses, we are a nonprofit with no political or religious affiliation, and now have more than 7,500 staff members around the world, more than 97% of whom are local. Our mission is to improve the quality of life through health interventions and related activities that strengthen underserved communities worldwide. With the flexibility to respond rapidly to emergencies, we offer medical services and training to people at the highest risk, always working to strengthen local healthcare systems and promote self-reliance.",
            "ein": "953949646",
            "name": "International Medical Corps",
            "profileUrl": "https://www.every.org/international-medical-corps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zwxuhjjxmrayjwbfceg9",
            "logoCloudinaryId": "faja_profile/zwxuhjjxmrayjwbfceg9",
            "matchedTerms": []
        },
        {
            "description": "The world's largest suicide prevention and crisis intervention organization for LGBTQ youth. TrevorLifeline: 866.488.7386.. The Trevor Project is determined to end suicide among LGBTQ youth by providing life-saving and life-affirming resources including our nationwide, 24/7 crisis intervention lifeline, digital community and advocacy/educational programs that create a safe, supportive and positive environment for everyone.",
            "ein": "954681287",
            "name": "The Trevor Project",
            "profileUrl": "https://www.every.org/trevorproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/sq3etyrvuwwz6fjzhmio",
            "logoCloudinaryId": "faja_profile/sq3etyrvuwwz6fjzhmio",
            "matchedTerms": []
        },
        {
            "description": "SIPA enriches and empowers generations of Pilipino Americans and others in Historic Filipinotown and throughout Los Angeles.. SIPA is a 501(c)3 nonprofit organization serving Historic Filipinotown and other neighborhoods throughout Greater Los Angeles County. SIPA produces programs for youth and families including case management and counseling, after school programs, senior programs, small business development, cultural enrichment, and affordable housing.",
            "ein": "952879339",
            "name": "Search To Involve Pilipino Americans",
            "profileUrl": "https://www.every.org/sipacares",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/m4oe7clznkvtilq7he78",
            "logoCloudinaryId": "profile_pics/m4oe7clznkvtilq7he78",
            "matchedTerms": []
        },
        {
            "description": "YTB is Youth TimeBanking: Youth-Adult partnership of giving & receiving opportunities to support community & build strengths.. Definition: Youth TimeBanking is a community service practice for supporting youth to increase awareness of community organizations and expand their network of social supports.  YTB is experiential learning in the interests of building community connections.  YTB also introduces youth to principles of co-production and servant leadership.  When youth are involved with community they strengthen their connections to their community and learn about Civic Engagement.  As youth continue with YTB they experience co-production -- a model in which each person contributes to the plan, process, practice, and outcome.\n\nVision: YTB's Vision is that all youth transition to adulthood with the experience of demonstrating responsibility for service with others and connections to their community.  YTB is a system of service exchange that leverages the talents, capabilities, an",
            "ein": "843685123",
            "name": "YTBRN.org Youth TimeBanking",
            "profileUrl": "https://www.every.org/ytbrn",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/v6bwcispxn7rcijxar0u",
            "logoCloudinaryId": "profile_pics/v6bwcispxn7rcijxar0u",
            "matchedTerms": []
        },
        {
            "description": "Preventing suicide through research, advocacy, and education. Thoughts of suicide? Call: 800-273-8255 / Text: 741741. The American Foundation for Suicide Prevention (AFSP) is a voluntary health organization that gives those affected by suicide a nationwide community empowered by research, education and advocacy to take action against this leading cause of death.\n\nAFSP is dedicated to saving lives and bringing hope to those affected by suicide.  AFSP creates a culture that’s smart about mental health by engaging in the following core strategies:\n\nFunding scientific research\nEducating the public about mental health and suicide prevention\nAdvocating for public policies in mental health and suicide prevention\nSupporting survivors of suicide loss and those affected by suicide in our mission",
            "ein": "133393329",
            "name": "American Foundation for Suicide Prevention",
            "profileUrl": "https://www.every.org/afsp",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/hbalkc6ktojdqlscdzcd",
            "logoCloudinaryId": "faja_profile/hbalkc6ktojdqlscdzcd",
            "matchedTerms": []
        },
        {
            "description": "We educate, empower, and support families and communities to better understand and care for the mental health of our youth.. In these extremely unsettling times, it is more important than ever to do all we can to support the mental health of our youth. The impact of the pandemic on the mental health of our young people has led to a very serious public health crisis. As our youth are struggling with unprecedented uncertainty and isolation, their parents have had to become mental health counselors, as well as teachers and caregivers. Studies are already showing that the rates of adverse mental health conditions are on the rise, particularly among young adults and caregivers. \n\nWhen people are as aware of their mental health as their physical health, that knowledge translates into more caring communities overall, and empowers individuals in the community to look out for each other by being able to provide community and regional resources, as well as valuable peer support. Our educational",
            "ein": "812079516",
            "name": "The Youth Mental Health Project",
            "profileUrl": "https://www.every.org/ymhproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/gfg80mdwtbnme3jooxp0",
            "logoCloudinaryId": "faja_profile/gfg80mdwtbnme3jooxp0",
            "matchedTerms": []
        },
        {
            "description": "Over Everything is a non-profit record label and artist empowerment organization. . Our goal is to help push the industry towards more fair and equitable practices by supplying free music industry education for indie artists and their team, and by offering development & release support to a select group of artists. \n\nWe don’t “sign” anyone, instead we partner with artists on a non-exclusive basis for their releases taking absolutely no earnings along the way. All funds go directly to the creative collaborators (artist/producers/writers). \n\nOur primary mission is to help artists create sustainable independent careers, maintaining artistic control and ownership along the way. We supply creative & artistic development, legal support, project management services, and often act as a conduit between the artist and potential partners (distributors/labels/tastemaker support/managers/bookers etc).\n\nTo check out some of the projects we have released please visit\novereverything.org/projects",
            "ein": "863560448",
            "name": "Over Everything",
            "profileUrl": "https://www.every.org/overeverything",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/rs6tfeqi9kyzt9o58zfv",
            "logoCloudinaryId": "profile_pics/rs6tfeqi9kyzt9o58zfv",
            "matchedTerms": []
        }
    ],
    "middle-east": [
        {
            "description": "Provide medical and humanitarian relief collectively and individually to Arab children throughout the Levant.. The Palestine Children's Relief Fund was established in 1992 by concerned humanitarians in the USA to bring injured and sick children for free medical care they could not get locally. The story of our founding is written up here. Since then, we have sent over 2,000 sick and injured children for free medical care, as well as sponsored hundreds of volunteer medical teams from all over the world to treat tens of thousands of sick and injured youths in local hospitals. PCRF also has built two pediatric cancer departments in Palestine and has several more major programs and projects taking place to help support the development of a sustainable health-care system there. We are a grassroots organization depending on the support of thousands of volunteers all over the world to help us achieve our humanitarian mission.",
            "ein": "931057665",
            "name": "PCRF - Palestine Children's Relief Fund",
            "profileUrl": "https://www.every.org/pcrf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kh3vcyp3uyscz1xknwwz",
            "logoCloudinaryId": "faja_profile/kh3vcyp3uyscz1xknwwz",
            "matchedTerms": []
        },
        {
            "description": "Founded in 1996 in the wake of the Oslo agreements as an academic & research center for environmental leadership in the MiddleEast. Our mission is to create a world-class environmental teaching and research institute at Kibbutz Ketura, which will:  •Prepare future Arab and Jewish leaders to cooperatively solve the region’s environmental challenges  •Maintain high academic standards.  •Deliver teaching and transboundary research opportunities at the highest quality and level to students from the Middle East and from all over the world  •Play a leading role in research, conservation, environmental protection and sustainable development in the region.  •Generate capacity building for conciliation and cooperation in the Middle East, in order to transcend political boundaries and achieve environmental change",
            "ein": "113485736",
            "name": "Arava Institute for Environmental Studies",
            "profileUrl": "https://www.every.org/arava",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/negb9ejidcofdipvbwwu",
            "logoCloudinaryId": "faja_profile/negb9ejidcofdipvbwwu",
            "matchedTerms": []
        },
        {
            "description": "Founded by concerned Americans who want to foster an increased understanding among Americans about Palestine and the Palestinians. The Institute for Middle East Understanding (IMEU) is an independent non-profit organization that provides journalists with quick access to information about Palestine and the Palestinians, as well as expert sources, both in the United States and in the Middle East. Both through its website and its staff, the IMEU works with journalists to increase the public's understanding about the socio-economic, political and cultural aspects of Palestine, Palestinians and Palestinian Americans.",
            "ein": "202389388",
            "name": "Institute for Middle East Understanding ( IMEU )",
            "profileUrl": "https://www.every.org/imeu",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/axewr9hbno9bwic3fxu7",
            "logoCloudinaryId": "faja_profile/axewr9hbno9bwic3fxu7",
            "matchedTerms": []
        },
        {
            "description": "To create hope, opportunity, and mutual understanding among people in the Middle East, North Africa, and the United States. Founded in 1951, AMIDEAST is a leading American nonprofit organization engaged in international education, training, and development activities in the Middle East and North Africa. We believe that self-forged, fulfilled lives lead to understanding, mutual respect, and a more peaceful, productive world.",
            "ein": "530243270",
            "name": "America-Mideast Educational & Training Services Inc",
            "profileUrl": "https://www.every.org/amideast",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dtqqcsq0rfcjchatyltu",
            "logoCloudinaryId": "profile_pics/dtqqcsq0rfcjchatyltu",
            "matchedTerms": []
        },
        {
            "description": "Advance a balanced and realistic understanding of American interests in the Middle East and promote the policies that secure them.. In 1985, a small group of visionary Americans committed to advancing U.S. interests in the Middle East founded The Washington Institute for Near East Policy. Today we are the largest research institute devoted exclusively to the study of the Middle East.\nLed by Barbi Weinberg, the Institute's founding president and Los Angeles civic leader, and her successor Michael Stein, a philanthropist from New York and Palm Beach, our mission was simple yet powerful: to inject the power of ideas and the discipline of scholarship into the making of U.S. Middle East policy. (In the spirit of policy relevance, they chose the term \"Near East\" rather than the more popular \"Middle East\" because they wanted the Institute's name to reflect the U.S. State Department's own geographic designation). The founders understood that American interests in the region emanate from a han",
            "ein": "521376034",
            "name": "Washington Institute for near East Policy",
            "profileUrl": "https://www.every.org/washingtoninstitute",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/lregf36ktvw7adouxebb",
            "logoCloudinaryId": "profile_pics/lregf36ktvw7adouxebb",
            "matchedTerms": []
        },
        {
            "description": "Increase knowledge of the Middle East among citizens of the United States and to promote a better understanding between the people. Founded in 1946, the Middle East Institute is the oldest Washington-based institution dedicated solely to the study of the Middle East. It is a non-partisan think tank providing expert policy analysis, educational and professional development services, and a hub for engaging with the region's arts and culture.",
            "ein": "530204608",
            "name": "Middle East Institute",
            "profileUrl": "https://www.every.org/middle-east-institute",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/idafhrfu90promqyquof",
            "logoCloudinaryId": "profile_pics/idafhrfu90promqyquof",
            "matchedTerms": []
        },
        {
            "description": "To expand public debate on the political and economic issues of the region and the policies devised to further American interests.. The Middle East Policy Council is a 501(c)(3) nonprofit organization founded in 1981 whose mission is to contribute to American understanding of the political, economic and cultural issues that affect U.S. interests in the Middle East. This is accomplished through three programs: the quarterly journal Middle East Policy (the most influential policy publication on the region); the Capitol Hill Conference Series for policymakers and their staffs offering multiple points of view on complex issues; and our acclaimed national outreach for students, educators and other civic leaders.",
            "ein": "521230205",
            "name": "Middle East Policy Council",
            "profileUrl": "https://www.every.org/mepc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dvctvkrdimlupikuduyv",
            "logoCloudinaryId": "profile_pics/dvctvkrdimlupikuduyv",
            "matchedTerms": []
        },
        {
            "description": "Committee for Accuracy in Middle East Reporting in America is a nonprofit organization focused on international issues. . Founded in 1982, the Committee for Accuracy in Middle East Reporting in America is a media-monitoring, research and membership organization devoted to promoting accurate and balanced coverage of Israel and the Middle East. CAMERA fosters rigorous reporting, while educating news consumers about Middle East issues and the role of the media. Because public opinion ultimately shapes public policy, distorted news coverage that misleads the public can be detrimental to sound policymaking. A non-partisan organization, CAMERA takes no position with regard to American or Israeli political issues or with regard to ultimate solutions to the Arab-Israeli conflict.",
            "ein": "521332702",
            "name": "Committee for Accuracy in Middle East Reporting in America",
            "profileUrl": "https://www.every.org/camera",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wbx0wa87lyojtwkxdmsm",
            "logoCloudinaryId": "profile_pics/wbx0wa87lyojtwkxdmsm",
            "matchedTerms": []
        },
        {
            "description": "To promote the highest standards of academic research and teaching in the fields of Middle Eastern and African studies. ASMEA is an academic society dedicated to promoting the highest standards of research and teaching in Middle Eastern and African studies, and related fields. It is a response to the mounting interest in these increasingly inter-related fields, and the absence of any single group addressing them in a comprehensive, multidisciplinary fashion.\nASMEA is, first and foremost, a community of scholars concerned with protecting academic freedom and promoting the search for truth. The Association advances the discourse in these fields by providing its members with new opportunities to publish and present ideas to the academic community and beyond.",
            "ein": "261416892",
            "name": "Association For The Study Of The Middle East And Africa",
            "profileUrl": "https://www.every.org/asmeascholars",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/j4xdbxp1bgsdulfov17z",
            "logoCloudinaryId": "profile_pics/j4xdbxp1bgsdulfov17z",
            "matchedTerms": []
        },
        {
            "description": "The MERIP was established in 1971 to educate and inform the public about contemporary Middle East affairs.. MERIP provides critical, alternative reporting and analysis, focusing on state power, political economy and social hierarchies as well as popular struggles and the role of US policy in the region. MERIP seeks to reach academics, journalists, non-governmental and governmental organizations and informed citizens who want knowledgeable analysis and critical resources about contemporary political developments. Informed by scholarship and research, MERIP is a curated platform for critical analysis and discussion that brings informed perspectives to a broader audience.",
            "ein": "042552770",
            "name": "Middle East Research Information Project Inc",
            "profileUrl": "https://www.every.org/merip",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/me6gjilyoy5lvxhkrhqv",
            "logoCloudinaryId": "profile_pics/me6gjilyoy5lvxhkrhqv",
            "matchedTerms": []
        }
    ],
    "museums": [
        {
            "description": "Creative Commons (CC) stewards a universally accessible infrastructure for open knowledge, culture, and collaboration. . For twenty years, we have been at the forefront of the open movement, empowering people, institutions, and systems to share information openly to advance human rights and development goals, equity and access, and innovation. CC has dedicated programs in open education and open culture, and policy. Additionally, we maintain the suite of CC licenses, which enables free and legal sharing worldwide. These tools have unlocked more than 2 billion pieces of content from researchers, artists, teachers, museums and libraries, and powers platforms like Wikipedia.\n\nIn partnership with our global community, CC takes comprehensive action across four key components: policy, infrastructure, capacity-building and training, and community engagement. \n\nMore people are sharing content than ever before, and the world is rapidly changing. CC hopes to continue fulfilling the promise of t",
            "ein": "043585301",
            "name": "Creative Commons",
            "profileUrl": "https://www.every.org/creative-commons",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/robpudsvi51hvloujnub",
            "logoCloudinaryId": "faja_profile/robpudsvi51hvloujnub",
            "matchedTerms": []
        },
        {
            "ein": "364389897",
            "name": "The Childrens Museum in Oak Lawn",
            "profileUrl": "https://www.every.org/cmoaklawn",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/qvnqobyra4bbjusszwbk",
            "logoCloudinaryId": "profile_pics/qvnqobyra4bbjusszwbk",
            "matchedTerms": []
        },
        {
            "description": "Provides immediate and ongoing support and assistance to the Naval Special Warfare community and its families.. Built on an unparalleled legacy and established in 2000, the Navy SEAL Foundation is a 501(c)(3), tax-exempt, national, non-profit benevolent organization headquartered in Virginia Beach, VA. The Foundation is a resolute cornerstone for the Naval Special Warfare community and their families in times of adversity and triumph. Each of our specialized programs maps directly back to the U.S. Special Operations Command directive and the Naval Special Warfare’s Preservation of the Force and Family Program, a program designed to address the “fraying” of the force caused by the stress of more than 18 years of sustained combat. Our programs are designed to improve health and welfare, build and enhance resiliency, empower and educate their families, and provide critical support during times of illness, injury, and loss.",
            "ein": "311728910",
            "name": "Navy SEAL Foundation",
            "profileUrl": "https://www.every.org/navy-seal-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/latt1xhvqxnpub5gby8w",
            "logoCloudinaryId": "faja_profile/latt1xhvqxnpub5gby8w",
            "matchedTerms": []
        },
        {
            "description": "Preserving and protecting the Sawtooth and Salmon River country in Idaho through education and outreach.. The Sawtooth Interpretive & Historical Association (SIHA) is a nonprofit based in Stanley, Idaho dedicated to protecting and advancing the natural and cultural history of Idaho's Sawtooth and Salmon River country through education and preservation. \n\nVisit us! SIHA operates the Stanley Museum and the Redfish Visitor Center & Gallery, staffs trailheads, and provides educational opportunities and area information. \n\n---------------\n\nSIHA works in cooperation with the Sawtooth, Salmon-Challis, and Caribou-Targhee National Forests. Since 1972, we have provided interpretive and educational programs to preserve the past and protect the future of the Sawtooth National Recreation Area (NRA) and Salmon River country.\n\nFor over a decade SIHA has hosted the annual Sawtooth Forum & Lecture Series, a free, public program at the Stanley Museum. The series brings in scientists, historians, and s",
            "ein": "820305044",
            "name": "Sawtooth Interpretive & Historical Association",
            "profileUrl": "https://www.every.org/sawtooth-association",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xzo1zcaiar7x3baljvl9",
            "logoCloudinaryId": "profile_pics/xzo1zcaiar7x3baljvl9",
            "matchedTerms": []
        },
        {
            "description": "Our collections, exhibits, and programs teach about the people, events, and movements in Western New York, and their impact.. Experiencing history with you, by safekeeping, remembering, discovering, and sharing our stories; learning and exploring together; sparking emotional and social connections within our unique community.",
            "ein": "166000166",
            "name": "The Buffalo History Museum",
            "profileUrl": "https://www.every.org/buffalohistory",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xnhfwnanodlevbkykwhk",
            "logoCloudinaryId": "profile_pics/xnhfwnanodlevbkykwhk",
            "matchedTerms": []
        },
        {
            "description": "MASS MoCA is one of the world’s liveliest centers for making and enjoying today’s most evocative art.. MASS MoCA is one of the world’s liveliest centers for making and enjoying today’s most evocative art. With vast galleries and a stunning collection of indoor and outdoor performing arts venues, MASS MoCA is able to embrace all forms of art: music, sculpture, dance, film, painting, photography, theater, and new, boundary-crossing works of art that defy easy classification. Much of the work we show in our light-filled spaces, on our technically sophisticated stages, and within our lovely network of late 19th-century courtyards is made here during extended fabrication and rehearsal residencies that bring hundreds of the world’s most brilliant and innovative artists to North Adams all year round.\n\nMASS MoCA exhibits art by both well-known and emerging artists, focusing on large-scale, immersive installations that would be impossible to realize in conventional museums. The broad-shouldere",
            "ein": "043113688",
            "name": "MASS MoCA",
            "profileUrl": "https://www.every.org/massmoca",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/tgzojpwwh6if1qhhyvxy",
            "logoCloudinaryId": "faja_profile/tgzojpwwh6if1qhhyvxy",
            "matchedTerms": []
        },
        {
            "description": "To engage children of all ages and abilities in learning through imaginative play and discovery. The Children's Museum of the Magic Valley (CMMV) is an emerging hands-on children's museum to be located in Twin Falls, Idaho. CMMV will focus exhibits, programming, and children's activities on the Magic Valley's 37,000 children ages birth through eleven years. The research and concept development behind CMMV has been ongoing since mid-2018 when it was founded as a 501(c)3 non-profit organization.\n\nOur goal is to establish a permanent, state-of-the-art children's museum in Twin Falls. The Twin Falls Urban Renewal Agency (URA) entered into exclusive negotiations with CMMV for the purchase of a .50 acre lot in downtown Twin Falls on the corner of 3rd Street South and Idaho Street South. Downtown Twin Falls is the heart of our community, and CMMV is eager and committed to becoming a vital part of this historical area. Currently, we operate as a \"Museum without Walls\" with mobile exhibit even",
            "ein": "832068910",
            "name": "Children's Museum Of The Magic Valley, Inc",
            "profileUrl": "https://www.every.org/cmmv",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/cucheked5noeb5mhjodq",
            "logoCloudinaryId": "profile_pics/cucheked5noeb5mhjodq",
            "matchedTerms": []
        },
        {
            "description": "Celebrating the men and women of the automotive industry whose innovations changed the world and revolutionized our way of life.. Honoring the Past and Shaping the Future\nThe Automotive Hall of Fame was established in 1939, to perpetuate the accomplishments of the early automotive pioneers. Called the “Automobile Old Timers,” the group was dedicated to honoring automotive innovators from all parts of the worldwide automotive industry.\n\nThe current mission of the Automotive Hall of Fame is to honor and celebrate the accomplishments of individuals in the international motor vehicle industry through awards and educational programs that challenge young and old alike to higher levels of personal achievement.  \n\nThe Automotive Hall of Fame’s mandate is to increase the public’s understanding of the contribution that the international motor vehicle industry has had on our freedom of personal mobility and on our high standard of living.  In the process of preserving international motor vehicle",
            "ein": "383320345",
            "name": "Automotive Hall Of Fame Inc",
            "profileUrl": "https://www.every.org/automotivehalloffame",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/u1gvo1gemufwij4e6k1l",
            "logoCloudinaryId": "profile_pics/u1gvo1gemufwij4e6k1l",
            "matchedTerms": []
        },
        {
            "description": "The Golisano Children's Museum of Naples (CMON) is a place where families play, learn and dream together.. CMON History\nA 501(c)(3) not-for- profit charitable organization founded in 2002, we celebrate the natural curiosity of children by offering an educationally dynamic space that encourages exploration and discovery. This safe and wonderful place inspires children and families to have fun while learning together. According to the Association of Children’s Museums, “There is now a new mantra – Play Equals Learning!”\n\nCMON Vision\nThe Golisano Children’s Museum of Naples believes it is a privilege to share life with a child, and is committed to nurturing bonds among families and generations. We celebrate the natural curiosity of children by offering an educational dynamic space that encourages exploration and discovery. This safe and wonderful place inspires children and families to have fun while learning together.\n\nCMON Mission\n“To provide an exciting, inspiring environment where ch",
            "ein": "010687133",
            "name": "Children's Museum of Naples",
            "profileUrl": "https://www.every.org/cmon",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/spjrdfhulzcjfcuqfm2h",
            "logoCloudinaryId": "faja_profile/spjrdfhulzcjfcuqfm2h",
            "matchedTerms": []
        },
        {
            "description": "Library and Museum celebrating the community and history of Akwesasne.",
            "ein": "161012360",
            "name": "Akwesasne Library And Cultural Center Inc",
            "profileUrl": "https://www.every.org/akwesasne-library-and-cultural-center-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/lpiqydrwuacu4lorn0bx",
            "logoCloudinaryId": "profile_pics/lpiqydrwuacu4lorn0bx",
            "matchedTerms": []
        }
    ],
    "music": [
        {
            "description": "Bringing music across the planet to those who need it most. Can music change the world? We believe it can.. Keys of Change is a charity formed by individuals who deeply believe that playing music can make this world a better place. Keys of Change aims to advance the lives of children and young people around the world through musical education and access to live classical music performances. The charity was set up in early 2011 by the international concert pianist Panos Karan, who works with three other trustees, all involved in music and/or education, and a growing number of committed volunteers in many countries.  ​ Over the past six years, Keys of Change has brought classical music, often for the first time, to deprived or suffering audiences, in remote areas of the Amazon basin, Uganda, Sierra Leone, Kolkata and the tsunami-ravaged Fukushima area in Japan, as well as in Greece, Russia and London. Our music has brought alive emotions - fascination, happiness, tears of sadness – and",
            "ein": "820614802",
            "name": "Keys of Change",
            "profileUrl": "https://www.every.org/keysofchange",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pwvnaudte58ob3p1vb61",
            "logoCloudinaryId": "faja_profile/pwvnaudte58ob3p1vb61",
            "matchedTerms": []
        },
        {
            "description": "Music library dedicated to collecting, preserving and providing information about popular music from around the world.. The ARChive of Contemporary Music is a not-for-profit music library dedicated to collecting, preserving and providing information about popular music from around the world.    Now in its twenty-seventh year of operation, ARC is the largest and most important popular music colfourth lection in the world – with over two million sound recordings and approximately three million  photographs, books, press kits, videos, memorabilia and related ephemera.   Our simple goal is to guarantee that the world’s musical heritage is preserved for future generations to study and enjoy.     We believe that all forms of popular music, jazz, be-bop, bluegrass, country, rock, rap, blues, enka, reggae, calypso, zydeco, and countless other forms are significant cultural expressions.  All musics entertain as well as reveal a people and their values to the rest of the world.",
            "ein": "133347764",
            "name": "ARChive of Contemporary Music",
            "profileUrl": "https://www.every.org/arcmusic",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zdvmu94i8lcodwkrvl83",
            "logoCloudinaryId": "faja_profile/zdvmu94i8lcodwkrvl83",
            "matchedTerms": []
        },
        {
            "description": "Over Everything is a non-profit record label and artist empowerment organization. . Our goal is to help push the industry towards more fair and equitable practices by supplying free music industry education for indie artists and their team, and by offering development & release support to a select group of artists. \n\nWe don’t “sign” anyone, instead we partner with artists on a non-exclusive basis for their releases taking absolutely no earnings along the way. All funds go directly to the creative collaborators (artist/producers/writers). \n\nOur primary mission is to help artists create sustainable independent careers, maintaining artistic control and ownership along the way. We supply creative & artistic development, legal support, project management services, and often act as a conduit between the artist and potential partners (distributors/labels/tastemaker support/managers/bookers etc).\n\nTo check out some of the projects we have released please visit\novereverything.org/projects",
            "ein": "863560448",
            "name": "Over Everything",
            "profileUrl": "https://www.every.org/overeverything",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/rs6tfeqi9kyzt9o58zfv",
            "logoCloudinaryId": "profile_pics/rs6tfeqi9kyzt9o58zfv",
            "matchedTerms": []
        },
        {
            "description": "Artisan Global is a 501(c)(3) nonprofit that develops sustainable jobs, strategies, and vocational workspaces in Uganda.. We are working together with local entrepreneurs in Uganda to develop the creative industries and address cycles of extreme poverty. Our global team (Uganda and the U.S.) designed the first creative workspace for innovation & impact in Northern Uganda.",
            "ein": "824458472",
            "name": "Artisan Global",
            "profileUrl": "https://www.every.org/artisanglobal",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/roqeujb6dqwg55hccjrn",
            "logoCloudinaryId": "profile_pics/roqeujb6dqwg55hccjrn",
            "matchedTerms": []
        },
        {
            "description": "The International Beethoven Project celebrates Beethoven's music, life & legacy for the benefit of all. IBP has been NFP ca 2009. . ​​The mission of the International Beethoven Project is threefold: \n\n1) to celebrate Beethoven's music and humanist legacy\n\n2) to make classical music more engaging, exciting and meaningful for all people\n\n3) to serve as an educational resource \n\nBy showcasing Beethoven as the revolutionary musician he was, we believe we can inspire new generations of listeners, performers and arts administrators to appreciate and engage with this art form. To do this, IBP has used many different approaches, from producing numerous events to making films, recordings and educational media.\n\nLaunching the \"International Beethoven Day\" initiative in 2021, IBP seeks to engage even more people across the world in carrying Beethoven's legacy of humanism and music forward.\n\nUpcoming projects include a sweeping multi-media traversal of Beethoven's epic 32 piano sonatas that will",
            "ein": "273205988",
            "name": "International Beethoven Project",
            "profileUrl": "https://www.every.org/internationalbeethovenproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/baxcmclghh6orqlgoytc",
            "logoCloudinaryId": "profile_pics/baxcmclghh6orqlgoytc",
            "matchedTerms": []
        },
        {
            "description": "JME inspires, encourages, and provides opportunities to young aspiring entertainment industry professionals. . Jr Music Executive prepares today’s youth for successful futures by exposing them to career options and the skills (along with work ethic) necessary to succeed in a 21st-century workplace.\n\nPrimary Objectives:\nInspire youth to pursue higher education, set goals, and reach their full potential.\nExpose youth to viable STEAM career opportunities in the entertainment industry.\nEnsure that youth desiring a music career are informed and prepared.\nProvide youth from underserved communities with access to resources.",
            "ein": "640961874",
            "name": "Jr Music Executive",
            "profileUrl": "https://www.every.org/jrmusicexec",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/l69bzpoz897bde5zp6dd",
            "logoCloudinaryId": "profile_pics/l69bzpoz897bde5zp6dd",
            "matchedTerms": []
        },
        {
            "description": "Angel City Chorale is the most entertaining and spirited choir in LA. Our music truly reflects the energy and spirit of LA.\n. Now in its 27th year among the premier choral groups in Southern California, Angel City Chorale is proud to represent the spirit and diversity of Los Angeles in its membership, its music, and its outreach activities, thereby fulfilling its mission to “Build Community One Song at a Time.” Celebrated Artistic Director Fink founded the Chorale at world-famous McCabe’s Guitar Shop in 1993 with 18 singers – which has now grown to over 180 talented and dedicated singers, presenting a broad and eclectic repertoire including classical, gospel, jazz, pop and world music.",
            "ein": "203327855",
            "name": "Angel City Chorale",
            "profileUrl": "https://www.every.org/angel-city-chorale",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ahoi4ujuqh2qgx2txsbu",
            "logoCloudinaryId": "profile_pics/ahoi4ujuqh2qgx2txsbu",
            "matchedTerms": []
        },
        {
            "description": "ACMS offers opportunities to learn the joys of music for all ages and skill levels. . The Armstrong Community Music School was founded on the principle that a high-quality music education should be available to everyone, regardless of circumstances. At ACMS you might see a small child attending an Early Childhood Music class while across the hall a grandparent goes to her first ever violin lesson. For 20 years, ACMS has provided Central Texans of all ages and skill levels the opportunity to express themselves through joyful music-making.\n\nIn conjunction with the excellent music instruction provided in-house, ACMS partners with local organizations to offer free programming for a wide variety of populations. Collectively these programs are known as the Harmony Initiative. Each program in the Harmony Initiative is designed by faculty and staff to meet the intellectual and situational needs of the communities they serve, positively impacting the lives of underserved populations with the",
            "ein": "454295757",
            "name": "Armstrong Community Music School",
            "profileUrl": "https://www.every.org/acmsaustin",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wmip3vwkvdwpyaxwr45p",
            "logoCloudinaryId": "profile_pics/wmip3vwkvdwpyaxwr45p",
            "matchedTerms": []
        },
        {
            "description": "ETM-LA restores music to under-resourced schools. We believe all children deserve a well-rounded education that includes music.. Education Through Music-Los Angeles provides sequential comprehensive music as a core subject in under-resourced schools in order to nurture students' social-emotional wellness, academic achievement, motivation for school, creativity, and overall development. We partner with Los Angeles County school districts and leaders to implement school-wide music programs, including music instruments, curriculum, dedicated music teachers, ongoing teacher training, and community engagement for long-term sustainability. ETM-LA commits to furthering racial and social justice through equity in education - ensuring that all children, particularly those from historically marginalized communities, have access to quality music instruction as part of a well-rounded school experience. www.etmla.org",
            "ein": "870776958",
            "name": "ETM-LA (Education Through Music-Los Angeles)",
            "profileUrl": "https://www.every.org/etmla",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/uoglmc4vemz54hip52li",
            "logoCloudinaryId": "faja_profile/uoglmc4vemz54hip52li",
            "matchedTerms": []
        },
        {
            "description": "Empowering young people to build successful futures for themselves through music, technology, and creative employment.. ZUMIX is an East Boston-based nonprofit organization dedicated to building our community through music and creative technology. One of our core beliefs is that music is the most powerful means of developing adolescent self-identity. Our award-winning music and creative technology programming is designed to equip youth with the tools necessary to reach their full potential, while creating a safe space for youth to explore who they are and who they want to be. Through community events, ZUMIX provides access to top-quality arts experiences for a low-income, historically underserved neighborhood.",
            "ein": "043132674",
            "name": "ZUMIX",
            "profileUrl": "https://www.every.org/zumix",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/quh8qstyoggjde6krocw",
            "logoCloudinaryId": "faja_profile/quh8qstyoggjde6krocw",
            "matchedTerms": []
        }
    ],
    "oceans": [
        {
            "description": "We want to make life better for wild animals.. We are dedicated to finding evidence-backed ways to improve the lives of animals in the wild.\n\nWe depend on individual donors to help us make life better for wild animals. To a small nonprofit working hard on a big problem, your support is more crucial now than ever!",
            "ein": "822281466",
            "name": "Wild Animal Initiative",
            "profileUrl": "https://www.every.org/wildanimalinitiative",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wzgsabl4bvjvfl6jezb1",
            "logoCloudinaryId": "profile_pics/wzgsabl4bvjvfl6jezb1",
            "matchedTerms": []
        },
        {
            "description": "Together, we create science-based solutions for a healthy ocean and the wildlife and communities that depend on it.. You love the ocean as much as we do, and we can’t protect it without you.\n\nA healthy ocean means more than beautiful coasts and vibrant ocean wildlife. If the ocean isn’t healthy, neither are we. Because the food we eat, the water we drink and the air we’re breathing this very second comes from our ocean.\n\nOur work is focused on solving some of the greatest threats facing our ocean today. From the Arctic to the Gulf of Mexico, we bring people, science and policy together, to champion innovative solutions and fight for a sustainable ocean.\n\nThat’s why for over forty years we’ve worked to protect vital ecosystems, defend critical legislation, enforce accountability of leaders and legislators and rally the world’s largest effort to remove trash from our beaches. Because a healthy ocean means a healthy planet.",
            "ein": "237245152",
            "name": "Ocean Conservancy",
            "profileUrl": "https://www.every.org/ocean-conservancy",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/pp60avgm8rvzgwkbifel",
            "logoCloudinaryId": "profile_pics/pp60avgm8rvzgwkbifel",
            "matchedTerms": []
        },
        {
            "description": "The Ocean Cleanup designs and develops advanced technologies to rid the world's oceans of plastic.. We develop advanced technologies to rid the oceans of plastic.\nEvery year, millions of tons of plastic enter the oceans, of which the majority spills out from rivers. A portion of this plastic travels to ocean garbage patches, getting caught in a vortex of circulating currents. If no action is taken, the plastic will increasingly impact our ecosystems, health, and economies.",
            "ein": "815132355",
            "name": "The Ocean Cleanup",
            "profileUrl": "https://www.every.org/the-ocean-cleanup",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ouqchceyeek9gckxu5mq",
            "logoCloudinaryId": "faja_profile/ouqchceyeek9gckxu5mq",
            "matchedTerms": []
        },
        {
            "description": "Our Mission is to inform, inspire and incite action to solve plastic pollution.. Plastic Oceans International is a nonprofit organization raising awareness about plastic pollution to inspire behavioral change. \n\nOur origins date back several years, as part of the team that helped distribute the award-winning film A Plastic Ocean, but our current status has been as a fully independent nonprofit organization since 2016. \n\nMore than 300 million tons of plastic are produced annually, yet more than 90% of all plastic is not recycled. \n\nAt least eight million tons of plastic are dumped into the ocean each year—equal to a garbage truck per minute. \n\nStudies find plastic pollutes the air, water and entire food chain, threatening human health, wildlife and the planet. \n\nThrough solutions-focused films and digital content, Plastic Oceans promotes a global movement to rethink plastic.",
            "ein": "813778043",
            "name": "Plastic Oceans",
            "profileUrl": "https://www.every.org/plasticoceans",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/jyng0a2qgafc3mnmjjcb",
            "logoCloudinaryId": "faja_profile/jyng0a2qgafc3mnmjjcb",
            "matchedTerms": []
        },
        {
            "description": "Conserving ecosystems and helping communities on islands throughout the world.. Indigenous people are all too often faced with the dilemma of choosing between protecting their precious natural resources, and economic development. Seacology searches for win-win situations where both the local environment is protected and islanders receive some tangible benefit for doing so.   In Falealupo, Samoa, Seacology built a critically needed school in exchange for the establishment of a 30,000-acre forest reserve. In Vuna Village, Fiji, Seacology is constructing a kindergarten in exchange for the establishment of a 4,752-acre forest preserve and two marine protected areas totaling 3,010 acres.   Because we work closely with islanders right from the beginning, our projects enjoy strong local support and consequently lead to long-term benefits. Our ever-expanding list of projects shows that we are truly making a difference in protecting threatened island biodiversity throughout the world.",
            "ein": "870495235",
            "name": "Seacology",
            "profileUrl": "https://www.every.org/seacology",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/imu520ztppfawey6nqxo",
            "logoCloudinaryId": "faja_profile/imu520ztppfawey6nqxo",
            "matchedTerms": []
        },
        {
            "description": "Reverse the trend of destruction of ocean environments around the world.. The Ocean Foundation is a community of donors who care about our coasts and ocean to grow the financial resources available for marine conservation.",
            "ein": "710863908",
            "name": "The Ocean Foundation",
            "profileUrl": "https://www.every.org/oceanfdn",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/xwu4bwpisr6yz7i1jobz",
            "logoCloudinaryId": "faja_profile/xwu4bwpisr6yz7i1jobz",
            "matchedTerms": []
        },
        {
            "description": "The Dauphin Island Sea Lab Foundation assists in developing resources that ensure the long-term growth of the DISL. . Dauphin Island Sea Lab Foundation Mission \nThe Dauphin Island Sea Lab Foundation supports the Dauphin Island Sea Lab in its mission, “to provide wise stewardship of the marine environment through education and research”. \n The foundation provides funds to sustain the activities of the DI Sea Lab and promotes \n awareness of the DI Sea Lab and environmental issues. \n The Foundation is also building an endowment for the Dauphin Island Sea Lab.\n\nThe Dauphin Island Sea Lab Overview\n\nThe Dauphin Island Sea Lab (DISL) is the state of Alabama’s marine research and education center. DISL was founded in 1971 by the Alabama Legislature, to maximize the state's marine sciences capabilities and minimize program duplication at Alabama colleges and universities.  Four historically black colleges and universities, both public and private, are among the twenty-two Alabama colleges and",
            "ein": "460502262",
            "name": "Dauphin Island Sea Lab Foundation",
            "profileUrl": "https://www.every.org/sealabfoundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/fy2htib72c6ujtym7njt",
            "logoCloudinaryId": "profile_pics/fy2htib72c6ujtym7njt",
            "matchedTerms": []
        },
        {
            "description": "Pelican Harbor Seabird Station is dedicated to the rescue, rehabilitation & release of sick, injured or orphaned native wildlife.. Mission: Pelican Harbor Seabird Station is dedicated to the rescue, rehabilitation and release of sick, injured or orphaned brown pelicans, seabirds and other native wildlife; and the preservation and protection of these species through educational and scientific means.\n\nVision: As a trusted wildlife rehab center, Pelican Harbor Seabird Station embodies professionalism, compassion, and integrity. Through innovation, education, and outreach, we provide the highest quality of patient care while promoting the importance of conservation in the community.",
            "ein": "592137331",
            "name": "Pelican Harbor Seabird Station",
            "profileUrl": "https://www.every.org/pelicanharbor",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/mdk4gjmgd9xavjgp4ykm",
            "logoCloudinaryId": "profile_pics/mdk4gjmgd9xavjgp4ykm",
            "matchedTerms": []
        },
        {
            "description": "Our goal is to restore, improve, and protect the water quality of the ocean off the NY/NJ coast..  Clean Ocean Action is a leading national and regional voice working to protect waterways using science, law, research, education, and citizen action. \n\nClean Ocean Action (COA) is a broad-based coalition of 125 active boating, business, community, conservation, diving, environmental, fishing, religious, service, student, surfing, and women's groups.  These \"Ocean Wavemakers\" work to clean up and protect the waters of the New York Bight.  The groups came together in 1984 to investigate sources, effects, and solutions of ocean pollution.  What follows is a description of the network.",
            "ein": "222897204",
            "name": "Clean Ocean Action",
            "profileUrl": "https://www.every.org/clean-ocean-action",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/cqkdqyjvwz2vogulgdni",
            "logoCloudinaryId": "faja_profile/cqkdqyjvwz2vogulgdni",
            "matchedTerms": []
        },
        {
            "description": "Animal and Wildlife welfare organization destined to save endangered species and conserve wildlife. Grassroots Community Charity.. RedPanda Gives is an Earth welfare charity organization. RedPanda Gives feels it is their obligation to help the Earth. At RedPanda Gives we donate any received funding to these three organizations - Red Panda Network, Oceanic Society, and the Rainforest Trust. These organizations are focused on wildlife education, local communities, and rainforest rehabilitation.\n\nWe are partners with the RedPanda Earth Ethereum Token that is a decentralized and completely volunteer free community.",
            "ein": "863959924",
            "name": "RedPanda Gives Inc",
            "profileUrl": "https://www.every.org/redpanda-gives",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/aoupgb1smwc8r8r7jaid",
            "logoCloudinaryId": "profile_pics/aoupgb1smwc8r8r7jaid",
            "matchedTerms": []
        }
    ],
    "poverty": [
        {
            "description": "Delivering unconditional cash directly to the world's poorest households via secure mobile transfers. . COVID-19 has pushed 150 million more people into extreme poverty worldwide. You can empower them to meet their needs by giving unconditional cash transfers to the poorest households in the US and Africa. Why cash? Because the best way to alleviate poverty is to make people less poor. If the disruption of pandemic taught us anything, we need simple, direct ways to help the most vulnerable. Giving directly is a fast, efficient, proven, and empowering way to do so.",
            "ein": "271661997",
            "name": "GiveDirectly",
            "profileUrl": "https://www.every.org/givedirectly",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/rdbzfnryksvqzdjeqtka",
            "logoCloudinaryId": "faja_profile/rdbzfnryksvqzdjeqtka",
            "matchedTerms": []
        },
        {
            "description": "Sharing God’s love with people living on the streets of the mid-peninsula 💛 (every donation is being matched X2 right now). Sharing God's love with people living on the streets of the mid-peninsula 💛\n\nWe are a community-based, non-profit organization that serves the homeless and at-risk populations of the Mid-Peninsula. We establish environments and build relationships where community volunteers can provide food and clothing, as well as referrals for shelter, addiction recovery, and other personal support.\n\n_____\n\nStreet Life Ministries (or SLM) began in 2001 at the downtown Menlo Park train station. Today, due to the help of many people, it now serves over 35,000 meals a year, five nights a week, in Menlo Park, Palo Alto and Redwood City. For 20 years SLM gatherings have built a reputation as the one consistent place the homeless can count on. Whether it is a holiday, a cloudy or rainy day, SLM never varies from the set schedule, giving the homeless a stable option throughout the yea",
            "ein": "453602635",
            "name": "Street Life Ministries",
            "profileUrl": "https://www.every.org/streetlifeministries",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ovg1fwrlcpd9uma8umya",
            "logoCloudinaryId": "profile_pics/ovg1fwrlcpd9uma8umya",
            "matchedTerms": []
        },
        {
            "description": "We use cash transfers to increase immunization rates in Nigeria.. Childhood vaccines prevent an estimated 2 to 3 million deaths every year. They are recognized as one of the most cost-effective child health interventions in low-income countries. Yet, an estimated 19.4 million infants around the world did not receive routine vaccinations in 2018. In Nigeria, 40% of under-five deaths are from vaccine-preventable diseases – low immunisation rates are a significant contributor to its high under-five mortality rate (120 deaths per 1,000 live births). North West Nigeria, where the program operates, is the region with the lowest vaccination coverage in Nigeria.\n\nSee RCT findings here: https://www.newincentives.org/evidence",
            "ein": "452368993",
            "name": "New Incentives",
            "profileUrl": "https://www.every.org/newincentives",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/newnvy0rlvxdz3yx300o",
            "logoCloudinaryId": "profile_pics/newnvy0rlvxdz3yx300o",
            "matchedTerms": []
        },
        {
            "description": "Fights global poverty by empowering girls and women. Join us.. CARE is a global leader within a worldwide movement dedicated to ending poverty. We are known everywhere for our unshakeable commitment to the dignity of people. We seek a world of hope, inclusion and social justice, where poverty has been overcome and all people live with dignity and security.",
            "ein": "131685039",
            "name": "CARE",
            "profileUrl": "https://www.every.org/care",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/uy2u0sizbe4ze1dvafbz",
            "logoCloudinaryId": "faja_profile/uy2u0sizbe4ze1dvafbz",
            "matchedTerms": []
        },
        {
            "description": "We are a think tank dedicated to figuring out the best ways to make the world a better place.. Rethink Priorities is a research organization that conducts critical research to inform policymakers and major foundations about how to best help people and nonhuman animals in both the present and the long-term future.\n\nOur research spans everything from animal welfare to the threat of nuclear war. We explore neglected but promising areas to improve the world and try to further build the community of researchers working on understanding how to do this most effectively.",
            "ein": "843896318",
            "name": "Rethink Priorities",
            "profileUrl": "https://www.every.org/rethinkpriorities",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/i3iknd276i6cw1exfveu",
            "logoCloudinaryId": "profile_pics/i3iknd276i6cw1exfveu",
            "matchedTerms": []
        },
        {
            "description": "The world's-first funding vehicle to collectively grow our resources to support the long-term flourishing of humanity. \n. This Project focuses on how we can collectively grow our resources to support the long-term flourishing of humanity. It addresses a crucial gap: as a society, we spend much too little on safeguarding and benefiting future generations. In fact, we spend more money on ice cream each year than we do on preventing our own extinction. However, people in the future - who do not have a voice in their future survival or environment - matter. Lots of them may yet come into existence and we have the ability to positively affect their lives now, if only by making sure we avoid major catastrophes that could destroy our common future.\n\nHoused within the Project is the Patient Philanthropy Fund, a philanthropic co-funding vehicle which invests to give and ensures capital is at the ready when extraordinary opportunities to safeguard and improve the long-term future arise.\n\nThe Fu",
            "name": "Founders Pledge Patient Philanthropy Fund",
            "profileUrl": "https://www.every.org/patient-philanthropy-fund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zevurkfrs733iarywsqp",
            "logoCloudinaryId": "profile_pics/zevurkfrs733iarywsqp",
            "matchedTerms": []
        },
        {
            "description": "Support So They Can to ensure that no girl is left behind. To receive a tax receipt for NZ or AU, please donate via sotheycan.org. Every child deserves access to education. It is a basic human right. Yet in Sub-Saharan Africa, over one fifth of primary school aged children are not in school. That’s just not right. \n\nSo They Can is an international NGO on a mission to change this. They work with vulnerable communities and their governments in Kenya and Tanzania to educate and empower children, so they can break the poverty cycle, realise their own potential and meet their own needs. \n\nOver a 7-10 year development cycle, So They Can works closely with a community to understand their needs and implement projects that will best support them. Throughout the cycle, they develop relationships and ensure transfer of knowledge and management skills to these communities to ensure sustainability of the programs. This enables them to eventually shift to a governance role so we can expand our focu",
            "ein": "471079440",
            "name": "So They Can",
            "profileUrl": "https://www.every.org/so-they-can",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ooqkj5vh19i058jrbmzg",
            "logoCloudinaryId": "profile_pics/ooqkj5vh19i058jrbmzg",
            "matchedTerms": []
        },
        {
            "description": "We inspire effective giving in the fight against extreme poverty.. We aim to change the culture of giving in affluent countries while dramatically raising annual donations to highly impactful nonprofits that reduce suffering and premature death for people living in extreme poverty. We aim to change the culture of giving in affluent countries while dramatically raising annual donations to highly impactful nonprofits that reduce suffering and premature death for people living in extreme poverty.",
            "ein": "462100400",
            "name": "The Life You Can Save",
            "profileUrl": "https://www.every.org/lifeyoucansave",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/diucwv9fg2rxaqv8nquc",
            "logoCloudinaryId": "faja_profile/diucwv9fg2rxaqv8nquc",
            "matchedTerms": []
        },
        {
            "description": "Interpreting Freedom Foundation, is a nationally registered 501(c)3, committed to supporting our Afghan Interpreters and Allies.. www.InterpretingFreedom.org Founded in 2018, The Interpreting Freedom Foundation, a National Nonprofit, a registered 501(c)3 organization, committed to supporting our Afghan Interpreters, allies, and families as they transition to their new life as community members of our United States of America.\n \nWe provide comprehensive support services for all US combat interpreters who were engaged in Operation Enduring Freedom. These military and special ops interpreters played a critical role in the battlefield alongside US Armed Forces.\n \nPlease visit our webpage at www.InterpretingFreedom.org. On there, you will see that we are in many ways very different from other nonprofits. We go out of our way to be highly transparent about the stewarding and spending of your generous donor dollars. On our page, you will see a counter which tracks many of the services we hav",
            "ein": "831204288",
            "name": "Interpreting Freedom Foundation",
            "profileUrl": "https://www.every.org/interpreting-freedom-foundation-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/sc6yudflr8akfjlq3c5n",
            "logoCloudinaryId": "profile_pics/sc6yudflr8akfjlq3c5n",
            "matchedTerms": []
        },
        {
            "description": "Global health organization striving to make health care a human right for all people, starting with those who need it most. Partners In Health is a social justice organization that responds to the moral imperative to provide high-quality health care globally to those who need it most. We strive to ease suffering by providing a comprehensive model of care that includes access to food, transportation, housing, and other key components of healing. We bring the benefits of modern medicine to those who have suffered from the overt and subtle injustices of the world, in the past and in the present. We refuse to accept that any life is worth less than another.\n\nOur mission is to provide a preferential option for the poor in health care. By establishing long-term relationships with sister organizations based in settings of poverty, Partners In Health strives to achieve two overarching goals: to bring the benefits of modern medical science to those most in need of them and to serve as an antid",
            "ein": "043567502",
            "name": "Partners In Health",
            "profileUrl": "https://www.every.org/pih",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ugkfeqdmgijxkckuh0gx",
            "logoCloudinaryId": "faja_profile/ugkfeqdmgijxkckuh0gx",
            "matchedTerms": []
        }
    ],
    "racial-justice": [
        {
            "description": "EJI is committed to ending mass incarceration in the US and challenging racial and economic injustice.. Founded in 1989 by Bryan Stevenson, a widely acclaimed public interest lawyer and bestselling author of Just Mercy, EJI is a private, 501(c)(3) nonprofit organization that provides legal representation to people who have been illegally convicted, unfairly sentenced, or abused in state jails and prisons. We challenge the death penalty and excessive punishment and we provide re-entry assistance to formerly incarcerated people.\n\nEJI works with communities that have been marginalized by poverty and discouraged by unequal treatment. We are committed to changing the narrative about race in America. EJI produces groundbreaking reports, an award-winning wall calendar, and short films that explore our nation’s history of racial injustice, and we recently launched an ambitious national effort to create new spaces, markers, and memorials that address the legacy of slavery, lynching, and racial",
            "ein": "631135091",
            "name": "Equal Justice Initiative",
            "profileUrl": "https://www.every.org/eji",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/eji_kdsj1q",
            "logoCloudinaryId": "faja_profile/eji_kdsj1q",
            "matchedTerms": []
        },
        {
            "description": "Reshape America's pretrial system. 100% of online donations are used to post bail and bring people home.. Fight mass incarceration by paying bail for Americans and offering needed support. We believe that paying bail for someone in need is an act of resistance against a system that criminalizes race and poverty and an act of solidarity with local communities and movements for decarceration. Over the next five years, The Bail Project will open dozens sites in high-need jurisdictions with the goal of paying bail for tens of thousands of low-income Americans, all while collecting stories and data that prove money bail is not necessary to ensure people return to court. We won’t stop until meaningful change is achieved and the presumption of innocence is no longer for sale.",
            "ein": "814985512",
            "name": "The Bail Project",
            "profileUrl": "https://www.every.org/bailproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kxegvx3e9ltozlpey3vz",
            "logoCloudinaryId": "faja_profile/kxegvx3e9ltozlpey3vz",
            "matchedTerms": []
        },
        {
            "description": "A virtual non-profit organization & antiracist education brand that promotes justice for all.  . 540 provides an online hub for accessible education that promotes justice for all. We create a cultural shift in perspectives and practice through learning rooted in social justice and anti-racism.",
            "ein": "842870050",
            "name": "540WMain",
            "profileUrl": "https://www.every.org/540wmain",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zlp47evyyinbr4faz3jd",
            "logoCloudinaryId": "profile_pics/zlp47evyyinbr4faz3jd",
            "matchedTerms": []
        },
        {
            "description": "We develop public safety solutions for the District of Columbia that are evidence-driven, community-rooted, and racially just.. DC Justice Lab is a team of law and policy experts researching, organizing, and advocating for large-scale changes to the District’s criminal legal system. \n\nDC Justice Lab envisions a District that:\n- Treats every person as an essential part of our community and no longer subjugates, dehumanizes, or jettisons people who have broken the law.\n- Recognizes that it has historically underserved and overpoliced poor people and Black people, creating and subjugating an undercaste that is system-involved.\n- Takes dramatic measures to rectify and reverse the harm it inflicted.\n- Constantly reexamines its rules and practices to ensure they are calibrated to make us collectively safer, freer, and equal. \n- Ends its reliance on police, prosecutors, and prisons, in favor of solutions that maximize safety and freedom for all.\n- Ensures its criminal legal system cannot be",
            "ein": "843479025",
            "name": "DC Justice Lab",
            "profileUrl": "https://www.every.org/dcjusticelab",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ym8o1ybhgjudrdunez27",
            "logoCloudinaryId": "profile_pics/ym8o1ybhgjudrdunez27",
            "matchedTerms": []
        },
        {
            "description": "Works to exonerate innocent people through DNA testing and reform the criminal justice system to prevent injustice.. The Innocence Project was founded in 1992 by Barry C. Scheck and Peter J. Neufeld at the Benjamin N. Cardozo School of Law at Yeshiva University to assist prisoners who could be proven innocent through DNA testing. More than 350 people in the United States have been exonerated by DNA testing, including 38 who pleaded guilty to crimes they did not commit and 20 who served time on death row. The Innocence Project provided direct representation or critical assistance in more than 200 exonerations.   The Innocence Project’s full-time staff attorneys and Cardozo clinic students provide direct representation or critical assistance in most of these cases. The Innocence Project’s groundbreaking use of DNA technology to free innocent people has provided irrefutable proof that wrongful convictions are not isolated or rare events but instead arise from systemic defects. Now an ind",
            "ein": "320077563",
            "name": "Innocence Project",
            "profileUrl": "https://www.every.org/innocenceproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/hug5fwweu2tn0rsgx7h0",
            "logoCloudinaryId": "profile_pics/hug5fwweu2tn0rsgx7h0",
            "matchedTerms": []
        },
        {
            "description": "We can end police violence in America. Over 1,000 people are killed by police every year in America. We are calling on local, state, and federal lawmakers to take immediate action to adopt data-driven policy solutions to end this violence and hold police accountable.\n\nCampaign ZERO was developed with contributions from activists, protesters and researchers across the nation. This data-informed platform presents comprehensive solutions to end police violence in America. It integrates community demands and policy recommendations from research organizations and President Obama's Task Force on 21st Century Policing.",
            "ein": "813764408",
            "name": "Campaign Zero",
            "profileUrl": "https://www.every.org/campaignzero",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/uopjgyqowihaz715jbko",
            "logoCloudinaryId": "profile_pics/uopjgyqowihaz715jbko",
            "matchedTerms": []
        },
        {
            "description": "Breakout Foundation helps communities thrive by providing unrestricted funding to local changemakers.. Changemakers can't champion change alone. We know those closest to the problems are also closest to the solutions. Breakout is a social-impact experiential agency with a supporting 501c3 foundation committed to driving change.\n\nWe're here to amplify and empower the people, places, and stories that deserve the hype through unrestricted grants (while removing the red tape of traditional giving). Local changemakers deserve a platform they trust and a network of leaders to learn with and lean on.",
            "ein": "811983565",
            "name": "Breakout Foundation",
            "profileUrl": "https://www.every.org/breakout",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/g2zaamihsdylzdbhgdz5",
            "logoCloudinaryId": "profile_pics/g2zaamihsdylzdbhgdz5",
            "matchedTerms": []
        },
        {
            "description": "America’s premier legal organization fighting for racial justice through litigation, advocacy, and public education.. The NAACP Legal Defense and Educational Fund, Inc. is America's premier legal organization fighting for racial justice. Through litigation, advocacy, and public education, LDF seeks structural changes to expand democracy, eliminate disparities, and achieve racial justice in a society that fulfills the promise of equality for all Americans. LDF also defends the gains and protections won over the past 70 years of civil rights struggle and works to improve the quality and diversity of judicial and executive appointments.",
            "ein": "131655255",
            "name": "NAACP Legal Defense Fund",
            "profileUrl": "https://www.every.org/naacp-ldf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kop6pinsnnu57x6mdz71",
            "logoCloudinaryId": "profile_pics/kop6pinsnnu57x6mdz71",
            "matchedTerms": []
        },
        {
            "description": "Trains and mentors black male youth in technology creation, entrepreneurship, and leadership skills.. The Hidden Genius Project trains and mentors black male youth in technology creation, entrepreneurship, and leadership skills to transform their lives and communities.",
            "ein": "460689949",
            "name": "The Hidden Genius Project",
            "profileUrl": "https://www.every.org/hiddengeniusproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/w7mrqwwgijaqpvfpcfks",
            "logoCloudinaryId": "faja_profile/w7mrqwwgijaqpvfpcfks",
            "matchedTerms": []
        },
        {
            "description": "Supporting solar energy for a more equitable world. ☀️. The Honnold Foundation supports solar energy access— solar everywhere, for everyone. \n\nThat means a donation to the Honnold Foundation could help a low-income family in Sacramento cut their energy bill in half, or pay for solar technician job training for a high schooler on the Navajo Nation. Or, your gift could help fund Puerto Rico’s first cooperatively managed, community owned microgrid, pioneering a new way to access and control energy in communities around the world. \n\nNo matter who you are, we believe that energy should be clean, easy to access, and affordable. When you give a gift to the Honnold Foundation, you help us advance solar energy access worldwide.",
            "ein": "830833980",
            "name": "Honnold Foundation",
            "profileUrl": "https://www.every.org/honnoldfoundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/orcjqjcs8tli82grxb0o",
            "logoCloudinaryId": "profile_pics/orcjqjcs8tli82grxb0o",
            "matchedTerms": []
        }
    ],
    "refugees": [
        {
            "description": "IRC responds to the world’s worst humanitarian crises & helps people to survive, recover & gain control of their future.. The International Rescue Committee responds to the world’s worst humanitarian crises and helps people whose lives and livelihoods are shattered by conflict and disaster to survive, recover and gain control of their future. In more than 40 countries and in 26 U.S. cities, our dedicated teams provide clean water, shelter, health care, education and empowerment support to refugees and displaced people.",
            "ein": "135660870",
            "name": "International Rescue Committee",
            "profileUrl": "https://www.every.org/irc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/m4py1igjmt6ufvbkebzt",
            "logoCloudinaryId": "faja_profile/m4py1igjmt6ufvbkebzt",
            "matchedTerms": []
        },
        {
            "description": "We help people in crisis by providing emergency health services, and then promote self-reliance through training.. We are a global humanitarian organization dedicated to saving lives and relieving suffering. Established in 1984 by volunteer doctors and nurses, we are a nonprofit with no political or religious affiliation, and now have more than 7,500 staff members around the world, more than 97% of whom are local. Our mission is to improve the quality of life through health interventions and related activities that strengthen underserved communities worldwide. With the flexibility to respond rapidly to emergencies, we offer medical services and training to people at the highest risk, always working to strengthen local healthcare systems and promote self-reliance.",
            "ein": "953949646",
            "name": "International Medical Corps",
            "profileUrl": "https://www.every.org/international-medical-corps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zwxuhjjxmrayjwbfceg9",
            "logoCloudinaryId": "faja_profile/zwxuhjjxmrayjwbfceg9",
            "matchedTerms": []
        },
        {
            "description": "For over a century, USCRI has worked to protect the rights and address the needs of persons in forced or voluntary migration worldwide and support their transition to a dignified life.. To address the needs and rights of persons in forced or voluntary migration worldwide by advancing fair and humane public policy, facilitating and providing direct professional services, and promoting the full participation of migrants in community life.",
            "ein": "131878704",
            "name": "U.S. Committee for Refugees and Immigrants (USCRI)",
            "profileUrl": "https://www.every.org/uscri",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/nq1kbsv7x9e4sojam8up",
            "logoCloudinaryId": "faja_profile/nq1kbsv7x9e4sojam8up",
            "matchedTerms": []
        },
        {
            "description": "Jews, Christians, Muslims uniting to serve the poor.. Abrahamic Alliance International unites Jews, Christians, and Muslims for poverty relief and active peacebuilding. We began with a simple dream that compassionate collaboration between Jews, Christians, and Muslims can build lasting bridges of understanding and respect between our communities. By uniting to serve the poor in obedience to divine commands, our grassroots movement is showing the world that peaceful coexistence between Jews, Christians, and Muslims is not a naive and distant dream, but a growing and present reality here and now.\n\nWe envision a world where children of Abraham unite to save lives; where Jews, Christians and Muslims enjoy peaceful coexistence and mutual appreciation as our faith is deepened by meaningful encounters with each other; where understanding, humility and respect replace ignorance, arrogance and contempt; where diverse yet faithful worshipers of the God of Abraham move beyond dialogue to coopera",
            "ein": "264704170",
            "name": "Abrahamic Alliance International",
            "profileUrl": "https://www.every.org/abrahamicalliance",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ztbaaeugjlrbhqlcsqnw",
            "logoCloudinaryId": "faja_profile/ztbaaeugjlrbhqlcsqnw",
            "matchedTerms": []
        },
        {
            "description": "Airbnb.org is offering free temporary stays for people fleeing Ukraine. . Our mission is to unlock the power of sharing space, resources, and support in times of need.\n\nFor over 8 years, Airbnb helped people in times of crisis through the Open Homes initiative. Airbnb.org is the next chapter. We’re a 501(c)(3) nonprofit with our own mission and board of directors.",
            "ein": "833135259",
            "name": "Airbnb.org",
            "profileUrl": "https://www.every.org/airbnb",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ix5ypk1qvewflf6mbivx",
            "logoCloudinaryId": "profile_pics/ix5ypk1qvewflf6mbivx",
            "matchedTerms": []
        },
        {
            "description": "In response to the compassionate and welcoming love of Jesus, DASH exist to befriend asylum-seekers, serving both their physical and relational needs..",
            "ein": "814685664",
            "name": "DASH Network",
            "profileUrl": "https://www.every.org/dashnetwork",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ppqargk75ubnzki1g8di",
            "logoCloudinaryId": "faja_profile/ppqargk75ubnzki1g8di",
            "matchedTerms": []
        },
        {
            "description": "We provide comprehensive oral health care for people in need of all ages. Serving 50,000 patients annually at 4 clinics in MN. . Our mission is to provide culturally sensitive community oral health care, preventive education, professional training, and to advocate for access for all. \n\nOur vision is that all people will have access to high quality, affordable dental care to improve their overall health in a convenient, caring, and respectful environment.\n\nWe are a nonprofit organization, and we serve patients from all walks of life and economic circumstances. We want to make high-quality dentistry available to anyone who needs care. We have over 200 dedicated employees, including dentists, hygienists, assistants, and an administrative team who are continually improving care and delivering the best possible dentistry.",
            "ein": "043692982",
            "name": "Community Dental Care",
            "profileUrl": "https://www.every.org/cdentc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wc2xs6i2vwjafjq2gi4h",
            "logoCloudinaryId": "profile_pics/wc2xs6i2vwjafjq2gi4h",
            "matchedTerms": []
        },
        {
            "description": "Established in 1978, Alight is a nonprofit organization focused on international issues in 20 different countries around the world. Established in 1978 by founder Neal Ball, Alight, formerly known as American Refugee Committee, provides health care, clean water, shelter, protection and economic opportunities to more than 3.5 million people in over 20 countries each year. Alight believes in the incredible creativity, potential and ingenuity of the displaced and works to shine a light on their humanity, the tremendous amount of good that's already happening and the possibilities to do more. In 2020, Alight received the prestigious 4-Star Rating from Charity Navigator for the tenth consecutive year, celebrating a decade of impactful work.",
            "ein": "363241033",
            "name": "Alight",
            "profileUrl": "https://www.every.org/wearealight",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/a26cbwsyk8qvyhnkmpgl",
            "logoCloudinaryId": "profile_pics/a26cbwsyk8qvyhnkmpgl",
            "matchedTerms": []
        },
        {
            "ein": "043560262",
            "name": "Gaza Mental Health Foundation Inc",
            "profileUrl": "https://www.every.org/gaza-mental-health-foundation-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/iyjcszh0hvwswtzludif",
            "logoCloudinaryId": "profile_pics/iyjcszh0hvwswtzludif",
            "matchedTerms": []
        },
        {
            "description": "A comprehensive resettlement program for our wartime allies.. Our mission is to provide comprehensive resettlement assistance to endangered wartime allies who served U.S. interests in conflict and war zones.",
            "ein": "851918996",
            "name": "Keeping Our Promise.",
            "profileUrl": "https://www.every.org/keeping-our-promise-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/mtczpvhysluxffnozpcq",
            "logoCloudinaryId": "profile_pics/mtczpvhysluxffnozpcq",
            "matchedTerms": []
        }
    ],
    "religion": [
        {
            "description": "Sharing God’s love with people living on the streets of the mid-peninsula 💛 (every donation is being matched X2 right now). Sharing God's love with people living on the streets of the mid-peninsula 💛\n\nWe are a community-based, non-profit organization that serves the homeless and at-risk populations of the Mid-Peninsula. We establish environments and build relationships where community volunteers can provide food and clothing, as well as referrals for shelter, addiction recovery, and other personal support.\n\n_____\n\nStreet Life Ministries (or SLM) began in 2001 at the downtown Menlo Park train station. Today, due to the help of many people, it now serves over 35,000 meals a year, five nights a week, in Menlo Park, Palo Alto and Redwood City. For 20 years SLM gatherings have built a reputation as the one consistent place the homeless can count on. Whether it is a holiday, a cloudy or rainy day, SLM never varies from the set schedule, giving the homeless a stable option throughout the yea",
            "ein": "453602635",
            "name": "Street Life Ministries",
            "profileUrl": "https://www.every.org/streetlifeministries",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ovg1fwrlcpd9uma8umya",
            "logoCloudinaryId": "profile_pics/ovg1fwrlcpd9uma8umya",
            "matchedTerms": []
        },
        {
            "description": "Establishing a link between all Muslims in the Cleveland area, to promote tolerance and well-being of the whole community.. WCMA provides spiritual and moral support and counseling. We support the preservation of our language and heritage, and promote the social and economic well-being of our members. We are actively engaged in the development of the Cleveland community.",
            "ein": "452314751",
            "name": "West Cleveland Muslim Association",
            "profileUrl": "https://www.every.org/wcmamasjid",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ehegyksa3y5woqnggxpy",
            "logoCloudinaryId": "profile_pics/ehegyksa3y5woqnggxpy",
            "matchedTerms": []
        },
        {
            "description": "Interpreting Freedom Foundation, is a nationally registered 501(c)3, committed to supporting our Afghan Interpreters and Allies.. www.InterpretingFreedom.org Founded in 2018, The Interpreting Freedom Foundation, a National Nonprofit, a registered 501(c)3 organization, committed to supporting our Afghan Interpreters, allies, and families as they transition to their new life as community members of our United States of America.\n \nWe provide comprehensive support services for all US combat interpreters who were engaged in Operation Enduring Freedom. These military and special ops interpreters played a critical role in the battlefield alongside US Armed Forces.\n \nPlease visit our webpage at www.InterpretingFreedom.org. On there, you will see that we are in many ways very different from other nonprofits. We go out of our way to be highly transparent about the stewarding and spending of your generous donor dollars. On our page, you will see a counter which tracks many of the services we hav",
            "ein": "831204288",
            "name": "Interpreting Freedom Foundation",
            "profileUrl": "https://www.every.org/interpreting-freedom-foundation-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/sc6yudflr8akfjlq3c5n",
            "logoCloudinaryId": "profile_pics/sc6yudflr8akfjlq3c5n",
            "matchedTerms": []
        },
        {
            "ein": "900132063",
            "name": "Pray California",
            "profileUrl": "https://www.every.org/pray-california",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/bvabkt9upi7y4zkdx600",
            "logoCloudinaryId": "profile_pics/bvabkt9upi7y4zkdx600",
            "matchedTerms": []
        },
        {
            "description": "A non-denominational evangelical Christian organization providing spiritual and physical aid to hurting people around the world.. Samaritan's Purse  is a nondenominational evangelical Christian organization providing spiritual and physical aid to hurting people around the world. Since 1970, Samaritan's Purse has helped meet needs of people who are victims of war, poverty, natural disasters, disease, and famine with the purpose of sharing God's love through His Son, Jesus Christ. The organization serves the Church worldwide to promote the Gospel of the Lord Jesus Christ.",
            "ein": "581437002",
            "name": "Samaritan's Purse",
            "profileUrl": "https://www.every.org/samaritans-purse",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/e9analbgllukyhrpktua",
            "logoCloudinaryId": "faja_profile/e9analbgllukyhrpktua",
            "matchedTerms": []
        },
        {
            "description": "To provide an environment for contact with Tibetan Buddhism, and to promote awareness about Tibetan and Himalayan culture.  . Chokhor Gepel Ling is a Tibetan Buddhist Center founded by Thupten Rinpoche following the inspiration and guidance of His Holiness, the 14th Dalai Lama.\n\nOur mission is to provide an environment for contact with Tibetan Buddhism \nand to promote awareness about Tibetan and Himalayan culture.  \n\nWhat our name means: Place of Flourishing of the Buddha's Teachings\n\nChokhor- \"dharma wheel\", symbol of the Buddha's teachings \nGepel- flourishing virtue\nLing- place",
            "ein": "711011711",
            "name": "Chokhor Gepel Ling",
            "profileUrl": "https://www.every.org/chokhor-gepel-ling",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/qzan98xpkz33awexiogv",
            "logoCloudinaryId": "profile_pics/qzan98xpkz33awexiogv",
            "matchedTerms": []
        },
        {
            "description": "Creating animated videos that walk through the literary structure of the Bible book-by-book and theme-by-theme.. Our mission is to help people experience the Bible as a unified story that leads to Jesus. The Bible Project is a non-profit creating animated videos that walk through the literary structure of the Bible book-by-book and theme-by-theme.",
            "ein": "464277592",
            "name": "The Bible Project",
            "profileUrl": "https://www.every.org/jointhebibleproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/nle6asuvg0ol3cmtgcwb",
            "logoCloudinaryId": "faja_profile/nle6asuvg0ol3cmtgcwb",
            "matchedTerms": []
        },
        {
            "description": "We are responsible for fundraising on behalf of the Ridhwan School to support the unfolding of the Diamond Approach in the world.. Friends of Ridhwan is a student-run organization designated by the Ridhwan School’s Obsidian Synod as the body responsible for both short-term and future-oriented fundraising on behalf of the School.  It has been created to act cooperatively and to co-evolve with the School and its various manifestations.  Both the Ridhwan Foundation and Friends of Ridhwan serve under the guidance of the Obsidian Synod. \n\nEstablishing a separate legal entity for fund raising activities frees the Ridhwan Foundation to serve fully in its role to support teachers and students in the School, train and ordain teachers, and present programs to the public.  It creates a desired separation between the teaching and the activities of seeking and receiving charitable gifts.",
            "ein": "473365579",
            "name": "Friends of Ridhwan",
            "profileUrl": "https://www.every.org/friends-of-ridhwan",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/vravfhpx2hazcgofviu8",
            "logoCloudinaryId": "profile_pics/vravfhpx2hazcgofviu8",
            "matchedTerms": []
        },
        {
            "description": "Bountiful Children is serving malnourished children in 17 countries.  100% of your donation goes to help children in need.. Bountiful Children is helping malnourished children who aren't receiving proper nutrients.  Screenings are done every 6 months.  Children that have moderate or acute malnutrition begin receiving support from Bountiful.  They are given nutritional supplements and their families are given health lessons to help in their efforts to keep their children healthy.  \n\nThe first 1000 days are so vital to a child's physical and mental health.  A child who receives proper nutrition can go on to reach their full potential and lead productive lives.  For as little as $8/month, a child can receive proper nutrition.   100% of every dollar is used to help children in need without regard to race, religion, or ethnic origin.\n\nWe are helping approximately 10% of children in need.  Can you help us reach more children?",
            "ein": "953576538",
            "name": "The Bountiful Children's Foundation",
            "profileUrl": "https://www.every.org/bountifulchildren",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dtwcagc03zbg6rwyoyua",
            "logoCloudinaryId": "profile_pics/dtwcagc03zbg6rwyoyua",
            "matchedTerms": []
        },
        {
            "ein": "842367156",
            "name": "Erebuni Armenian School",
            "profileUrl": "https://www.every.org/erebuniarmenianschool",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/frxpwjmiihqaxo1nulrw",
            "logoCloudinaryId": "profile_pics/frxpwjmiihqaxo1nulrw",
            "matchedTerms": []
        }
    ],
    "reproductive-justice": [
        {
            "description": "The Afiya Center works to Transform the lives, health, and overall wellbeing of Black womxn and girls.. The Afiya Center is a woman-centered organization that addresses the unique needs of Black womxn and transgender/gender non-conforming people (TGNC) through public health education, policy advocacy, and leadership development. We unapologetically advocate in the areas of HIV, maternal morality, abortion access and the decriminalization of Black bodies. Using a reproductive justice framework, we work to dismantle harmful policies and systems that directly impact the lives of Black womxn and girls.",
            "ein": "364625704",
            "name": "The Afiya Center",
            "profileUrl": "https://www.every.org/theafiyacenter",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/gbedildsxnzq87dd9mt7",
            "logoCloudinaryId": "profile_pics/gbedildsxnzq87dd9mt7",
            "matchedTerms": []
        },
        {
            "description": "The National Network of Abortion Funds is a network of orgs that are funding abortion and building power to fight for cultural & political change.. The National Network of Abortion Funds builds power with members to remove financial and logistical barriers to abortion access by centering people who have abortions and organizing at the intersections of racial, economic, and reproductive justice.",
            "ein": "043236982",
            "name": "National Network of Abortion Funds",
            "profileUrl": "https://www.every.org/abortionfunds",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/cl9kldgtpjvet4tmpnkq",
            "logoCloudinaryId": "profile_pics/cl9kldgtpjvet4tmpnkq",
            "matchedTerms": []
        },
        {
            "description": "We help TX teens get abortions & birth control.\n24/7 Hotline: 866-999-5263 | 📲 Text 8am-11pm. Jane’s Due Process helps young people in Texas navigate parental consent laws and confidentially access abortion and birth control. We provide free legal support, 1-on-1 case management, and stigma-free information on sexual and reproductive health. \n\nOur work includes:\n- Legal support and 1-on-1 case management for Texas teens obtaining judicial bypass.\n- Text line for young people needing information on birth control and family planning services without parental involvement. \n- Advocating for and centering the voices of young people in the fight for  reproductive rights.\n\nWe are working towards a future where young people in Texas have full reproductive freedom and autonomy over their healthcare decisions.",
            "ein": "752917844",
            "name": "Janes Due Process",
            "profileUrl": "https://www.every.org/janesdueprocess",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/iaouokkgmie7maitwngv",
            "logoCloudinaryId": "profile_pics/iaouokkgmie7maitwngv",
            "matchedTerms": []
        },
        {
            "description": "Whole Woman’s Health Alliance is working to strategically shift the stigma around abortion in our culture.. Whole Woman’s Health Alliance is a non-profit organization committed to providing holistic reproductive care for our patients, including abortion care and advocacy to eradicate abortion stigma. We believe every woman deserves the compassion, respect, and dignity of being able to safely and legally end a pregnancy.\n\nOur patients choose Whole Woman’s Health Alliance because they know we will put them first. We honor women’s decisions: from the moment a patient walks into our doors, to the moment she walks out, into the next phase of a life transformed because she got the quality care she deserved.",
            "ein": "465318393",
            "name": "Whole Woman's Health Alliance",
            "profileUrl": "https://www.every.org/whole-womans-advocacy-alliance",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/w7frqpzcjmmtdci8owji",
            "logoCloudinaryId": "profile_pics/w7frqpzcjmmtdci8owji",
            "matchedTerms": []
        },
        {
            "description": "Assists Texas residents with lodging and transportation expenses to abortion clinics in and out of state.. The Dallas-based nonprofit Fund Texas Choice assists Texas residents with lodging and transportation expenses to abortion clinics in and out of state. It also provides information on organizations that can help with funding the procedure.",
            "ein": "463372095",
            "name": "Fund Texas Choice",
            "profileUrl": "https://www.every.org/fund-texas-choice",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/vcufhbqunjx2fihmh1iu",
            "logoCloudinaryId": "profile_pics/vcufhbqunjx2fihmh1iu",
            "matchedTerms": []
        },
        {
            "description": "Provide practical, responsive support for abortion services and reproductive healthcare resources for Central Texans.. Our mission is to provide practical, responsive support for abortion services and reproductive healthcare resources for Central Texans. By mobilizing the power of volunteers, we strive to bridge the gap to ensure that all Central Texans have equal access to abortion care.",
            "ein": "383892724",
            "name": "Bridge Collective",
            "profileUrl": "https://www.every.org/bridge-collective",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/urezszj94fcfmtf2evoi",
            "logoCloudinaryId": "profile_pics/urezszj94fcfmtf2evoi",
            "matchedTerms": []
        },
        {
            "description": "An abortion fund for the Rio Grande Valley // un fondo de aborto para el Valle del Río Grande. Frontera Fund Is United Under One Fundamental Mission: To provide financial support and a sense of community for those seeking abortions in the Rio Grande Valley. We also assist local Rio Grande Valley residents who need to travel to clinics across Texas and beyond for the reproductive care they require.",
            "ein": "474137116",
            "name": "National Network Of Abortion Funds",
            "profileUrl": "https://www.every.org/fronterafundrgv",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/n0jfqiuzgjyw12w7nm1s",
            "logoCloudinaryId": "profile_pics/n0jfqiuzgjyw12w7nm1s",
            "matchedTerms": []
        },
        {
            "description": "TEA Fund helps low-income people in northern Texas who want an abortion and cannot afford it.. Texas Equal Access Fund believes that when it comes to abortion, there is no choice if there is no access. Restrictions on abortion access and funding are discriminatory because they especially burden people with low incomes, young people, people in rural areas, and people of color. We oppose all efforts to restrict abortion rights and are committed to fighting for access to abortion for all. We believe that abortion is a fundamental feature of health care, and that it is the responsibility of government to cover abortion as part of social safety net programs. However, in the absence of government funding, we believe it is our duty to act now to support those who want abortions and cannot afford them.\n\nTEA Fund provides financial assistance to people living in north, east, and west Texas who want an abortion and cannot afford it. Almost half of our clients are already parenting at least one",
            "ein": "113736286",
            "name": "Texas Equal Access Fund",
            "profileUrl": "https://www.every.org/teafund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ex3f4xzqigbfwnl1rve3",
            "logoCloudinaryId": "profile_pics/ex3f4xzqigbfwnl1rve3",
            "matchedTerms": []
        },
        {
            "description": "We provide safe, free assistance to anyone seeking an abortion in Houston.. Do you need a ride to your abortion? Do you need someone to talk to? \nGive us a call or text at 281-947-2276. Our hotline operates Monday through Friday , 8am-7pm CST, for new callers.",
            "ein": "463995595",
            "name": "Clinic Access Support Network",
            "profileUrl": "https://www.every.org/clinicaccess",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/o1iqvivvwffbee9oyzte",
            "logoCloudinaryId": "profile_pics/o1iqvivvwffbee9oyzte",
            "matchedTerms": []
        },
        {
            "description": "We provide financial assistance and emotional support while building community spaces for people who need abortions in Texas..",
            "ein": "743008249",
            "name": "Lilith Fund",
            "profileUrl": "https://www.every.org/lilithfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/khw6fpw4mwugtc2zvfok",
            "logoCloudinaryId": "profile_pics/khw6fpw4mwugtc2zvfok",
            "matchedTerms": []
        }
    ],
    "research": [
        {
            "description": "Our research-based matching system motivates people to donate to highly effective charities at givingmultiplier.org.. Giving Multiplier is a Harvard University research project that matches donations to any charity of your choice and promotes the world's most effective charities.\n\nTo make a donation that gets matched, go to http://givingmultiplier.org. To become a matching funder, go to http://givingmultiplier.org/matching. (If you donate on this page here, your donation will also go into our matching system.)",
            "name": "Giving Multiplier",
            "profileUrl": "https://www.every.org/givingmultiplier",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/daxxskzbbazjbvciu9d6",
            "logoCloudinaryId": "profile_pics/daxxskzbbazjbvciu9d6",
            "matchedTerms": []
        },
        {
            "description": "The Multidisciplinary Association for Psychedelic Studies supports psychedelic and cannabis research, education and policy reform.. Founded in 1986, the Multidisciplinary Association for Psychedelic Studies (MAPS) is a visionary 501(c)(3) non-profit organization ushering the safe and ethical use of psychedelics as tools for healing and growth on individual, familial, societal, and planetary levels.\n\nMAPS’ top priority is ethically introducing global access to MDMA-assisted therapy as a treatment for posttraumatic stress disorder (PTSD) through regulatory approvals and training certification for therapy providers, as well as public education, policy reform, and building community support networks.\n\nHow Your Donation Will Help\n\nWhile the MDMA drug development program is the main priority of MAPS, the organization's programs include research into other psychedelic compounds and provide critical resources for researchers around the world interested in studying psychedelics. These resource",
            "ein": "592751953",
            "name": "MAPS",
            "profileUrl": "https://www.every.org/maps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/o7qkdrwh9jsjwv3inrph",
            "logoCloudinaryId": "profile_pics/o7qkdrwh9jsjwv3inrph",
            "matchedTerms": []
        },
        {
            "description": "Delivering unconditional cash directly to the world's poorest households via secure mobile transfers. . COVID-19 has pushed 150 million more people into extreme poverty worldwide. You can empower them to meet their needs by giving unconditional cash transfers to the poorest households in the US and Africa. Why cash? Because the best way to alleviate poverty is to make people less poor. If the disruption of pandemic taught us anything, we need simple, direct ways to help the most vulnerable. Giving directly is a fast, efficient, proven, and empowering way to do so.",
            "ein": "271661997",
            "name": "GiveDirectly",
            "profileUrl": "https://www.every.org/givedirectly",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/rdbzfnryksvqzdjeqtka",
            "logoCloudinaryId": "faja_profile/rdbzfnryksvqzdjeqtka",
            "matchedTerms": []
        },
        {
            "description": "Research and data to make progress against the world's largest problems. Poverty, disease, hunger, climate change, war, existential risks, and inequality: The world faces many great and terrifying problems. Our World in Data focuses on communicating the best research and data that helps us understand and find solutions to the world’s largest problems.\n\nOur World in Data publishes an open-access publication where users can understand the state of the world today, where we are making progress and where we are falling behind. Through interactive data visualizations we can see how the world has changed; by summarizing the scientific literature we can understand why. We cover everything from global poverty to natural disasters, education and health, democracy; we have over 3500 charts across 300 topics.\n\nOur World in Data is free, open-source and provided as a public good. It has millions of users every month, and is cited in research and media across the world every day. This allows milli",
            "name": "Our World in Data",
            "profileUrl": "https://www.every.org/ourworldindata",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/owid_xlm9f3",
            "logoCloudinaryId": "owid_xlm9f3",
            "matchedTerms": []
        },
        {
            "description": "The GiveWell Maximum Impact Fund supports evidence-backed giving opportunities that save or improve lives most per dollar donated.. [GiveWell](https://www.givewell.org/) - We find and recommend outstanding giving opportunities and publish our research to help donors give more effectively and with greater confidence.\n\nAll donations here support our Maximum Impact Fund. Learn more and view past grants at [givewell.org/maximum-impact-fund](https://www.givewell.org/maximum-impact-fund).",
            "ein": "208625442",
            "name": "GiveWell",
            "profileUrl": "https://www.every.org/givewell",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/q35etlfzwwki0jlhz0rd",
            "logoCloudinaryId": "profile_pics/q35etlfzwwki0jlhz0rd",
            "matchedTerms": []
        },
        {
            "description": "Lil BUB is a one of a kind space cat. Since landing on Earth, she's raised over $500,000 for homeless pets.. Lil BUB’s Big Fund exists to advocate for special needs companion animals and build a community that celebrates and fosters the human animal bond. With a focus on animals who are the most difficult to adopt, the most expensive to care for, and who are at a high risk of euthanasia. Lil BUB’s Big Fund provides grants to shelters nationwide and partners with shelters to create special needs foster program initiatives. We visit schools to promote kindness and inclusion. Through our work, we share BUB’s message of overcoming adversity and the knowledge that the things that make us different are worthy of being seen and appreciated.",
            "ein": "844229672",
            "name": "Lil BUB's Big Fund",
            "profileUrl": "https://www.every.org/lilbubsbigfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dsor2nxk97p87umlwhvt",
            "logoCloudinaryId": "profile_pics/dsor2nxk97p87umlwhvt",
            "matchedTerms": []
        },
        {
            "description": "TerraPraxis designs and implements strategies that leverage science, technology and energy innovation for a prosperous planet. We co-founded TerraPraxis to design and implement strategies that leverage science, technology and energy innovation for a prosperous planet. \n\nOur special focus is on enabling high-impact rapid transitions for neglected parts of the decarbonization challenge. \n\nWe work with an extensive global network to define, incubate and initiate scalable strategies that fulfil the twin missions of prosperity and decarbonization.",
            "name": "TerraPraxis",
            "profileUrl": "https://www.every.org/terrapraxis",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ozuhckx9egnja86ukvja",
            "logoCloudinaryId": "profile_pics/ozuhckx9egnja86ukvja",
            "matchedTerms": []
        },
        {
            "description": "The Fungi Foundation is a global organization that works for the Fungi, their habitats, and the people who depend on them.. Launched in 2012, the Fungi Foundation is the first NGO dedicated to the fungi kingdom. Since its inception, it has achieved numerous milestones while dedicating itself to exploring the fungi world in view of increasing knowledge of their diversity, educating about their applications, and recommending public policy for their conservation. As part of our ongoing 3F initiative, the foundation played a key role in enabling Chile to become the first country in the world to include protection of fungi in its environmental legislation. More recently, the foundation proudly announced the Fantastic Fungi Education Curriculum, the world's first mycological set of courses designed for schools.\n\nIn short, the Fungi Foundation envisions a healthy planet in which Fungi are recognized, protected, and embraced as the interconnectors of nature; a mission that would be impossible",
            "ein": "851478153",
            "name": "Fungi Foundation",
            "profileUrl": "https://www.every.org/ffungi",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wq14eif08jx3kka2ixau",
            "logoCloudinaryId": "profile_pics/wq14eif08jx3kka2ixau",
            "matchedTerms": []
        },
        {
            "description": "Developing the roadmap for a sustainable, secure, and just global protein supply 🧫🌱. We work with scientists, investors, and entrepreneurs to make groundbreaking good food a reality. We focus on clean meat and plant-based alternatives to animal products—foods that are more delicious, safer to eat, and better for the planet than their outdated counterparts.\n\nWe provide marketing, design, legal, business, media, and other support to a select number of early-stage companies producing clean and plant-based products. For established companies, we help their products succeed in the marketplace by mobilizing millions of supportive consumers to encourage their sale in stores, restaurants, and foodservice outlets.\n\n To help launch the next generation of innovators, we connect students, scientists, and entrepreneurs with opportunities in the academic and for-profit sectors. We connect jobs, funding, and scientific positions with those who want to put their passion and skills to use to create a",
            "ein": "810840578",
            "name": "The Good Food Institute",
            "profileUrl": "https://www.every.org/gfi",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/j7pfmjuvafvflihgbaf3",
            "logoCloudinaryId": "faja_profile/j7pfmjuvafvflihgbaf3",
            "matchedTerms": []
        },
        {
            "description": "We do foundational mathematical research to ensure smarter-than-human artificial intelligence has a positive impact.. The Machine Intelligence Research Institute is a research nonprofit studying the mathematical underpinnings of intelligent behavior. Our mission is to develop formal tools for the clean design and analysis of general-purpose AI systems, with the intent of making such systems safer and more reliable when they are developed.\n\nThe field of AI has a reputation for overselling its progress. In the “AI winters” of the late 1970s and 1980s, researchers’ failures to make good on ambitious promises led to a collapse of funding and interest in AI. Although the field is now undergoing a renaissance, overconfidence is still a major fear; discussion of the possibility of human-equivalent general intelligence is still largely relegated to the science fiction shelf.\n\nAt the same time, researchers largely agree that AI is likely to begin outperforming humans on most cognitive tasks in",
            "ein": "582565917",
            "name": "Machine Intelligence Research Institute",
            "profileUrl": "https://www.every.org/miri",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/jryeqfpmyj3yefniqjdk",
            "logoCloudinaryId": "profile_pics/jryeqfpmyj3yefniqjdk",
            "matchedTerms": []
        }
    ],
    "science": [
        {
            "description": "We do foundational mathematical research to ensure smarter-than-human artificial intelligence has a positive impact.. The Machine Intelligence Research Institute is a research nonprofit studying the mathematical underpinnings of intelligent behavior. Our mission is to develop formal tools for the clean design and analysis of general-purpose AI systems, with the intent of making such systems safer and more reliable when they are developed.\n\nThe field of AI has a reputation for overselling its progress. In the “AI winters” of the late 1970s and 1980s, researchers’ failures to make good on ambitious promises led to a collapse of funding and interest in AI. Although the field is now undergoing a renaissance, overconfidence is still a major fear; discussion of the possibility of human-equivalent general intelligence is still largely relegated to the science fiction shelf.\n\nAt the same time, researchers largely agree that AI is likely to begin outperforming humans on most cognitive tasks in",
            "ein": "582565917",
            "name": "Machine Intelligence Research Institute",
            "profileUrl": "https://www.every.org/miri",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/jryeqfpmyj3yefniqjdk",
            "logoCloudinaryId": "profile_pics/jryeqfpmyj3yefniqjdk",
            "matchedTerms": []
        },
        {
            "description": "We want to make life better for wild animals.. We are dedicated to finding evidence-backed ways to improve the lives of animals in the wild.\n\nWe depend on individual donors to help us make life better for wild animals. To a small nonprofit working hard on a big problem, your support is more crucial now than ever!",
            "ein": "822281466",
            "name": "Wild Animal Initiative",
            "profileUrl": "https://www.every.org/wildanimalinitiative",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wzgsabl4bvjvfl6jezb1",
            "logoCloudinaryId": "profile_pics/wzgsabl4bvjvfl6jezb1",
            "matchedTerms": []
        },
        {
            "description": "801 Labs is a Salt Lake City based hackerspace created by local information security enthusiasts.. \nWhat is 801 Labs?\n\n801 Labs is a Salt Lake City based hackerspace created by local information technology, electronics, and information security enthusiasts. 801 Labs is a physical space designed to be a center for peer learning and knowledge sharing in the form of workshops, presentations, and lectures. We also offer regular activities to the community, where people can gather to work on their own projects, exchange ideas, and learn from each other. Since 801 Labs is intended to be a shared community resource, almost all of our events are free and open to the public.\n\nWhat will I learn at 801 Labs?\n\n801 Labs runs a wide variety of classes that cover topics ranging from designing and building electronics, to information security, to programming, to 3D printing and 3D modeling, and more. Since we are a community run organization, our class offerings are based on what members of the local",
            "ein": "464280893",
            "name": "801 Labs",
            "profileUrl": "https://www.every.org/801labs",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/mzao1ndkfhp7foj6mn7f",
            "logoCloudinaryId": "profile_pics/mzao1ndkfhp7foj6mn7f",
            "matchedTerms": []
        },
        {
            "description": "Podsie is an edtech nonprofit dedicated to empowering teachers and improving student learning outcomes.. Podsie is an edtech nonprofit dedicated to empowering teachers and improving student learning outcomes. We've built a a free learning tool for teachers that helps their students remember what they've learned. We make it easy for teachers and students to review in a personalized and efficient way that's backed by learning science principles.",
            "ein": "862787137",
            "name": "Podsie",
            "profileUrl": "https://www.every.org/podsie",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/bbfo02xl1fea4ir4u5g4",
            "logoCloudinaryId": "profile_pics/bbfo02xl1fea4ir4u5g4",
            "matchedTerms": []
        },
        {
            "description": "To empower and mentor those most underrepresented in tech, to be tech innovators through hands-on computer science training.. CodeCrew directly addresses the diversity and access gap in tech. We offer educational opportunities that 1) teach children and adults to code while mentoring them toward careers in tech fields, and 2) provide educators the tools to increase computer science knowledge for all students, we are introducing an entire generation to the 21st century skills foundational to individual success.  \n\nCodeCrew is directly addressing that access gap in Memphis. By offering educational opportunities that 1) teach children and adults to code while mentoring them toward careers in tech fields, and 2) provide educators the tools to increase computer science knowledge for all students, we are introducing an entire generation to the 21st century skills foundational to individual success.  \n\nOur tech education programs do not just teach students how to write code or produce softwa",
            "ein": "474691807",
            "name": "CodeCrew",
            "profileUrl": "https://www.every.org/code-crew",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/s9amsslpopdz7qdcfwum",
            "logoCloudinaryId": "profile_pics/s9amsslpopdz7qdcfwum",
            "matchedTerms": []
        },
        {
            "description": "We train young people to solve the world's biggest problems using tech. Our goal is to help billions by unlocking human potential.. Are you interested in shaping the future of education? According to the World Economic Forum (WEF), education systems have grown increasingly disconnected from the realities and needs of global economies… With your help, we can change that. \n\nUnlike traditional education, The Knowledge Society (TKS) doesn’t care about conventional metrics like grades or extracurriculars. We care about curiosity, ambition and the desire to make a big impact in the world. We then equip these young change-makers with the knowledge, skills, and an environment of encouragement to solve some of the most important problems of our times, transforming these ordinary teens into “tech superheroes”. TKS has been recognized by WEF as a School of the Future. \n\nHow do we do it? Students from across North America participate in a 10-month accelerator program with weekly sessions on emerg",
            "ein": "843741568",
            "name": "The Knowledge Society",
            "profileUrl": "https://www.every.org/tksworld",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/vkpudn8sv2yf21lmpshp",
            "logoCloudinaryId": "profile_pics/vkpudn8sv2yf21lmpshp",
            "matchedTerms": []
        },
        {
            "description": "Developing open source privacy technology that protects free expression.. Long before we knew that it would be called Signal, we knew what we wanted it to be. Instead of teaching the rest of the world cryptography, we wanted to see if we could develop cryptography that worked for the rest of the world. At the time, the industry consensus was largely that encryption and cryptography would remain unusable, but we started Signal with the idea that private communication could be simple.\n\nSince then, we’ve made some progress. We’ve built a service used by millions, and software used by billions. The stories that make it back to us and keep us going are the stories of people discovering each other in moments where they found they could speak freely over Signal, of people falling in love over Signal, of people organizing ambitious plans over Signal. When we ask friends who at their workplace is on Signal and they respond “every C-level executive, and the kitchen staff.” When we receive a sub",
            "ein": "824506840",
            "name": "Signal Technology Foundation",
            "profileUrl": "https://www.every.org/signal",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/signaprof_fpmcsd",
            "logoCloudinaryId": "signaprof_fpmcsd",
            "matchedTerms": []
        },
        {
            "description": "Support impactful organizations solving the world’s biggest challenges with cutting edge research and policy.. ## The Founders Pledge Perspective\n\nScience and technology have created amazing advances in human civilization, from agriculture to industry and beyond. Yet they have also created new challenges, both foreseen and unforeseen: the threat of engineered pandemics more deadly than any naturally occuring virus, the risk of artificial intelligence unaligned with conventional human values, the mental health implications of lives lived online, and others we may not yet recognize.\n\nTo address these challenges, improve the lives of people today, and protect future generations from natural and man-made risks, Founders Pledge has identified a short-list of charities working at the cutting edge of global risk response and human wellbeing. These organizations convene stakeholders, conduct research, and advocate for better national and global policies based on the best available evidence.",
            "name": "Science & Technology Index",
            "profileUrl": "https://www.every.org/science.technology.fund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wmkvoumgfdwhnzo6l1wz",
            "logoCloudinaryId": "profile_pics/wmkvoumgfdwhnzo6l1wz",
            "matchedTerms": []
        },
        {
            "description": "We have partnered with Dr. Bronner's, which will match all donations up to $50,000! Be the good in a good trip and donate today!. Fireside Project is a nonprofit on a mission to help people reduce the risks and fulfill the potential of their psychedelic experiences. We are creating systemic change in the field of psychedelics in the domains of safety, diversity & equitable access. \n\nWhy donate to Fireside Project?\n\n1. We save lives and reduce 911 calls and emergency room visits. Tripping alone and without proper support can be risky. Through our Psychedelic Peer Support Line, we have created a nationwide safety net for people during and after their psychedelic experiences that has substantially decreased 911 calls and hospitalizations and reduced physical and emotional harms while democratizing access to high-quality care.\n\n2. We are creating a safer, more inclusive psychedelic community. Through our Equity Initiative, we will train cohorts of volunteers from historically oppressed co",
            "name": "Fireside Project",
            "profileUrl": "https://www.every.org/fireside-project",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/h6aeaihwwdgjan6kwewu",
            "logoCloudinaryId": "profile_pics/h6aeaihwwdgjan6kwewu",
            "matchedTerms": []
        },
        {
            "description": "Universal access to all knowledge. Non-profit library of millions of free books, movies, software, music, websites, and more.. The Internet Archive, a 501(c)(3) non-profit, is building a digital library of Internet sites and other cultural artifacts in digital form. Like a paper library, we provide free access to researchers, historians, scholars, the print disabled, and the general public. Our mission is to provide Universal Access to All Knowledge.\n\nWe began in 1996 by archiving the Internet itself, a medium that was just beginning to grow in use. Like newspapers, the content published on the web was ephemeral - but unlike newspapers, no one was saving it. Today we have 20+ years of web history accessible through the Wayback Machine and we work with 625+ library and other partners through our Archive-It program to identify important web pages.",
            "ein": "943242767",
            "name": "Internet Archive",
            "profileUrl": "https://www.every.org/archive",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ldpmbw4q5nfkaisc93pp",
            "logoCloudinaryId": "faja_profile/ldpmbw4q5nfkaisc93pp",
            "matchedTerms": []
        }
    ],
    "seniors": [
        {
            "description": "Jews, Christians, Muslims uniting to serve the poor.. Abrahamic Alliance International unites Jews, Christians, and Muslims for poverty relief and active peacebuilding. We began with a simple dream that compassionate collaboration between Jews, Christians, and Muslims can build lasting bridges of understanding and respect between our communities. By uniting to serve the poor in obedience to divine commands, our grassroots movement is showing the world that peaceful coexistence between Jews, Christians, and Muslims is not a naive and distant dream, but a growing and present reality here and now.\n\nWe envision a world where children of Abraham unite to save lives; where Jews, Christians and Muslims enjoy peaceful coexistence and mutual appreciation as our faith is deepened by meaningful encounters with each other; where understanding, humility and respect replace ignorance, arrogance and contempt; where diverse yet faithful worshipers of the God of Abraham move beyond dialogue to coopera",
            "ein": "264704170",
            "name": "Abrahamic Alliance International",
            "profileUrl": "https://www.every.org/abrahamicalliance",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ztbaaeugjlrbhqlcsqnw",
            "logoCloudinaryId": "faja_profile/ztbaaeugjlrbhqlcsqnw",
            "matchedTerms": []
        },
        {
            "description": "Uplifting spirits across the globe by delivering inspiring handmade cards.. Cardz for Kidz is dedicated to uplifting the spirits of people of all ages across the globe by delivering inspiring handmade cards. We've been able to partner with independent artists, nonprofits, corporations, and schools to create over 300,000 cards that have been sent around the world. We partner with other global nonprofits (e.g. Ronald McDonald House Charities, Make-A-Wish, Amnesty International), as well as donating cards to local hospitals, nonprofits, and schools impacted by tragedy. Please join in if you're interested in making a difference.",
            "ein": "461594296",
            "name": "Cardz for Kidz",
            "profileUrl": "https://www.every.org/cardzforkidz",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/respdi6tjnmwiqvy1nrv",
            "logoCloudinaryId": "profile_pics/respdi6tjnmwiqvy1nrv",
            "matchedTerms": []
        },
        {
            "description": "We empower & promote the health & independence of people with special challenges through the therapeutic power of horses.. Horses of Hope / Caballos de Esperanza Inc., is a therapeutic riding center, located in beautiful Isabela, Puerto Rico. We are both a 501c3 nonprofit and a Puerto Rico certified charity (EIN # 66-0907166; PR caso # 2019-1101.01-6.\n\nOur mission is to engage the therapeutic power of our horses to nurture the special abilities of people with disabilities, help heal those suffering from trauma, and empower our clients to improve the quality of their lives, their families' lives, and their community. We provide life-changing therapeutic riding, equine education, and equine-assisted activities and have programs suitable for children (4 years and up) to adults of all ages. \n\nOur therapeutic riding instructors are certified through the Professional Association of Therapeutic Horsemanship, International (PATH, Int'l). We follow their standards of safety, which are the high",
            "ein": "660907166",
            "name": "Horses Of Hope-Caballos De Esperanza Inc",
            "profileUrl": "https://www.every.org/horses-of-hope",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/hrwc1jizu3ntyfa5gqru",
            "logoCloudinaryId": "profile_pics/hrwc1jizu3ntyfa5gqru",
            "matchedTerms": []
        },
        {
            "description": "Serves in partnership with our stakeholders to support quality of life for seniors - allowing them the choice of safely aging in place with dignity and independence.. Silver Key Senior Services is a local, non-profit organization dedicated to providing services to keep seniors living the lives they want--with safety, independence, and quality of life.",
            "ein": "237109922",
            "name": "Silver Key Senior Services",
            "profileUrl": "https://www.every.org/silverkey",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ynh6atj3euf4lqvergnm",
            "logoCloudinaryId": "faja_profile/ynh6atj3euf4lqvergnm",
            "matchedTerms": []
        },
        {
            "description": "Habitat for Humanity NWMA is a nonprofit org serving Cobb, Douglas, & Paulding GA, giving a hand up through decent shelter.. In 1985, Chrys and John Street met Millard Fuller, who challenged them to start an affiliate of Habitat for Humanity in Cobb County, GA. They distributed brochures to local churches and gathered 12 people to form a Board of Directors. On April 1, 1986, Cobb County Habitat for Humanity was officially incorporated as an affiliate of Habitat for Humanity International. In 2008, the organization expanded to include Douglas and Paulding counties and the name changed to Habitat for Humanity of Northwest Metro Atlanta. Since 1986, over 500 homes have been built, rehabilitated, or repaired as part of our pursuit to provide decent, affordable housing in Cobb, Douglas, and Paulding counties. \n\nWe are driven by the vision that everyone deserves a decent place to live, and our mission states that: \"Seeking to put God’s love into action, Habitat for Humanity brings people to",
            "ein": "581686320",
            "name": "Habitat For Humanity of Northwest Metro Atlanta",
            "profileUrl": "https://www.every.org/habitatnwma",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yegjikoq1hwv6cgs9xss",
            "logoCloudinaryId": "profile_pics/yegjikoq1hwv6cgs9xss",
            "matchedTerms": []
        },
        {
            "description": "Providing vital onsite health, education, and employment services to families living in affordable housing communities.. Founding in 1999, Project Access has been operating Family & Senior Resource Centers onsite in affordable housing communities. At these Centers, we provide access to tools, knowledge, and opportunities that cultivates strong communities, positive changes, and hopeful futures. \n\nOur Resource Centers serve as a “one-stop-shop” to help families, children, and seniors cultivate strong communities, positive changes, and hopeful futures. This model of service delivery allows Project Access to directly impact the lives of families while eliminating service barriers by bringing services directly to resident communities, meeting residents where they are. \n\nBy addressing multiple factors that contribute to poverty, Project Access works to improve the quality of life of disadvantaged families and empower them to achieve economic self-sufficiency. In 2022, Project Access is pos",
            "ein": "330834635",
            "name": "Project Access",
            "profileUrl": "https://www.every.org/project-access",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kvbsc5v6mapgr9nonbwd",
            "logoCloudinaryId": "profile_pics/kvbsc5v6mapgr9nonbwd",
            "matchedTerms": []
        },
        {
            "description": "Project BEE provides client-centered care for rural communities.. Project BEE provides client-centered care for rural communities. We are committed to providing equity through our anti-poverty programs and wrap-around services. Every person deserves dignity and respect.",
            "ein": "450227018",
            "name": "Project BEE",
            "profileUrl": "https://www.every.org/projectbee",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xuze01einhtyogndpist",
            "logoCloudinaryId": "profile_pics/xuze01einhtyogndpist",
            "matchedTerms": []
        },
        {
            "description": "Jacob's House helps support families who have a loved one in the hospital. . Jacob’s House is a home of refuge where families and loved ones of those in hospitalized traumatic medical need can find hope, comfort, peace and inspiration.  We are a community resource dedicated to serve families in crisis.  We do this by providing a shelter for the physical, emotional and spiritual support. Learn more at www.jacobshousetemecula.org",
            "ein": "261183832",
            "name": "Jacob's House",
            "profileUrl": "https://www.every.org/jacobshouse",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/h7n1tlknnemuticl2pyy",
            "logoCloudinaryId": "faja_profile/h7n1tlknnemuticl2pyy",
            "matchedTerms": []
        },
        {
            "description": "We are a volunteer-run non-profit celebrating the ideals of Islam thru education and charitable works in the developing world. Ibn Asheer supports international medical relief projects by collecting durable/reusable medical equipment and other donated supplies from health care entities in the US and shipping them to developing countries.  We also direct water development projects, primarily in the Middle East and Africa, to provide running water for small villages.  We do not spend any funds raised on administrative cost, so all of your donation goes towards the specified cause of the relief projects we run.",
            "ein": "593811307",
            "name": "Ibn Asheer Institute Of Islam",
            "profileUrl": "https://www.every.org/ibn-asheer-institute-of-islam",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/jxbfpgi2vcpdmsnijskz",
            "logoCloudinaryId": "profile_pics/jxbfpgi2vcpdmsnijskz",
            "matchedTerms": []
        },
        {
            "description": "Studio Zero develops programming and resources on the subjects of meditation, philosophy, theology and the contemplative life.. In the past ten years we have helped hundreds of people to find greater serenity in their lives through meditation practice.\n\nWe have sponsored over 100 days of residential retreat practice.\n\nA surprisingly large part of our impact has been among seniors, who have benefited from our gentle techniques.\n\nMany have found our services to be supportive of longterm recovery from addiction.\n\nOur non-sectarian approach to spiritual development has been beneficial to people both inside and outside of traditional religious communities.",
            "ein": "203922281",
            "name": "Studio Zero Inc",
            "profileUrl": "https://www.every.org/studio-zero",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/vz5w32en9dihocwovfqf",
            "logoCloudinaryId": "profile_pics/vz5w32en9dihocwovfqf",
            "matchedTerms": []
        }
    ],
    "space": [
        {
            "description": "From microbes to alien intelligence, the SETI Institute is the only organization dedicated to the search for life beyond Earth.. Have you ever looked at the stars and wondered if humans are alone in the universe?\n\nThe SETI Institute is a non-profit dedicated to the exploration and understanding of life on Earth and beyond. Our researchers are working to understand humanity's beginnings and our place among the stars. \n\nThe SETI Institute runs the Allen Telescope Array, the first observatory built from the ground up to search for signals from technologically advanced societies in nearby star systems. Since federal funding for SETI research like this is limited, our donors have carried the torch for humanity in searcing the universe for other intelligent species. \n\nBut life comes in all sizes, and just because there aren't other intelligent species in our solar system, doesn't mean there isn't microbial life on Mars or under the ice of Europa. Our scientists study extreme environments an",
            "ein": "942951356",
            "name": "SETI Institute",
            "profileUrl": "https://www.every.org/seti",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/logo_d4ap84",
            "logoCloudinaryId": "logo_d4ap84",
            "matchedTerms": []
        },
        {
            "description": "Dedicated to protecting the planet from asteroid impacts.. B612 is an organization that works towards protecting the Earth from asteroid impacts and informing and forwarding world-wide decision-making on planetary defense issues. B612 provides a non-governmental voice on the risks, options, and implications of asteroid data while advancing the technical means by which that data is acquired. We work to make interpretation of asteroid data open and accessible, and we serve as an informed source for an international community of policy makers and scientists who can best help to achieve these goals.",
            "ein": "542078469",
            "name": "B612 Foundation",
            "profileUrl": "https://www.every.org/b612foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/bghlygpczzn8kskcgvmx",
            "logoCloudinaryId": "faja_profile/bghlygpczzn8kskcgvmx",
            "matchedTerms": []
        },
        {
            "description": "The world's largest space advocacy non-profit organization dedicated to the human exploration and settlement of Mars.. Established by Dr. Robert Zubrin and others in 1998, the group works to educate the public, the media and the government on the benefits of exploring Mars and creating a permanent human presence on the Red Planet.\nIn order to accomplish this, the organization actively seeks to:\n1. Organize public outreach with the aim of fostering a deep interest in Mars,\n2. Promote broad international support for government-funded Mars research and exploration, and\n3. Advocate the establishment of commercial space ventures that will help achieve Mars exploration and settlement.\nSociety activities include Mars analog simulations in the Utah desert and the Canadian Arctic, public outreach and educational programs such as the MarsVR virtual reality simulations, the annual University Rover Challenge, political advocacy efforts, privately-funded research, chapter meetings and activities i",
            "ein": "311585646",
            "name": "Mars Society",
            "profileUrl": "https://www.every.org/mars-society",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ollheiz0z1rkrnze9eef",
            "logoCloudinaryId": "profile_pics/ollheiz0z1rkrnze9eef",
            "matchedTerms": []
        },
        {
            "description": "The Space Science Institute (SSI) is a nonprofit, public benefit 501(c)(3) corporation founded in 1992. SSI is on the leading edge of creating new, affordable, ...efficient, and far-reaching models for earth and space science research and science, technology, engineering, and mathematics (STEM) education. Meer weergeven.",
            "ein": "841215290",
            "name": "Space Science Institute",
            "profileUrl": "https://www.every.org/spacescience",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/gwypx5z5a1apajsncwkc",
            "logoCloudinaryId": "faja_profile/gwypx5z5a1apajsncwkc",
            "matchedTerms": []
        },
        {
            "description": "\"One People, One Sky\".",
            "ein": "680649259",
            "name": "Astronomers Without Borders",
            "profileUrl": "https://www.every.org/astronomers-without-borders",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/sj88ejey8buiah05gb6o",
            "logoCloudinaryId": "faja_profile/sj88ejey8buiah05gb6o",
            "matchedTerms": []
        },
        {
            "description": "NYC's Intrepid Sea, Air & Space Museum Complex is acentered on the aircraft carrier Intrepid. Honor. Educate. Inspire. . New York City’s Intrepid Sea, Air & Space Museum Complex is an educational and cultural non-profit institution centered on the aircraft carrier Intrepid. The mission of the Museum is to promote the awareness and understanding of history, science and service through its collections, exhibitions and programming in order to honor our heroes, educate the public and inspire our youth. Join us for a dynamic, interactive and educational journey for all ages.",
            "ein": "133062419",
            "name": "Intrepid Sea, Air & Space Museum",
            "profileUrl": "https://www.every.org/intrepidmuseum",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/t90woeszmccrubnvrw8f",
            "logoCloudinaryId": "faja_profile/t90woeszmccrubnvrw8f",
            "matchedTerms": []
        },
        {
            "description": "Institute of Science is an international community engaged in building a sustainable future & nurturing scientific interest among the public. Our mission is to explore life as a universal phenomenon & empower the next generation.. Blue Marble Space Institute of Science is an international community engaged in building a sustainable future & nurturing scientific interest among the public. Our mission is to explore life as a universal phenomenon & empower the next generation.",
            "ein": "270184094",
            "name": "Blue Marble Space Institute of Science",
            "profileUrl": "https://www.every.org/bluemarblespace",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/l2nof3gngaczvvnqemtp",
            "logoCloudinaryId": "faja_profile/l2nof3gngaczvvnqemtp",
            "matchedTerms": []
        },
        {
            "description": "Founded in 2019, STEMpump is dedicated to making STEAM education accessible to all. By students, for students. And 100% free.. STEMpump is an educational organization dedicated to creating a global platform for contribution, collaboration, and expression. We aim to transform traditional education by offering a modernized teaching environment that gives students a medium to learn and contribute to our mission of free education for all. \n\nSTEMpump was founded in September 2019 by a group of high schoolers as a series of in-person camps that aimed to level the playing field of STEAM among students. We're 100% student-led. Like completely student-led. From technology to content, student-driven innovation is at our core. We're taking the ways we learned, and giving everyone access.\n\nThe fact is, educational resources and content on STEAM topics are hard to come by. Some resources are locked behind paywalls. Some resources are outdated and haven't been updated in forever. Some resources are",
            "ein": "852118475",
            "name": "STEMpump",
            "profileUrl": "https://www.every.org/stempump",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/hbawjrhsoo3frgcwiwcw",
            "logoCloudinaryId": "profile_pics/hbawjrhsoo3frgcwiwcw",
            "matchedTerms": []
        },
        {
            "description": "Menjadikan kami sebagai Total Solution untuk konsumen. Download Company Profile ASTRO Total Solution : https://cvastro.com/tentang-kami",
            "ein": "421529477",
            "name": "ASTRO Total Solution",
            "profileUrl": "https://www.every.org/cvastro",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/dnxpt52iqu8jsuisrs3s",
            "logoCloudinaryId": "faja_profile/dnxpt52iqu8jsuisrs3s",
            "matchedTerms": []
        },
        {
            "description": "One of 11 US Air Force field museums, the Peterson Museum's mission is to preserve and portray the rich aviation and space history of Colorado Springs and Peterson Air Force Base. It is located within an 8.3 acre Colorado State Historic District..",
            "ein": "841145311",
            "name": "Peterson Air and Space Museum",
            "profileUrl": "https://www.every.org/petemuseum",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/potww4dj2kxg6ac0uln4",
            "logoCloudinaryId": "faja_profile/potww4dj2kxg6ac0uln4",
            "matchedTerms": []
        }
    ],
    "theater": [
        {
            "description": "Soul of American Culture. The Apollo Theater is a commissioner and presenter; catalyst for new artists, audiences, and creative workforce; and partner in the projection of the African American narrative and its role in the development of American and global culture.\n\nThe Apollo Theater envisions a new American cannon centered on contributions to the performing arts by artists of the African diaspora, in America and beyond.",
            "ein": "133630066",
            "name": "Apollo Theater",
            "profileUrl": "https://www.every.org/apollo-theater",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/czzqkvk5bd28t7eebg0c",
            "logoCloudinaryId": "faja_profile/czzqkvk5bd28t7eebg0c",
            "matchedTerms": []
        },
        {
            "description": "The International Beethoven Project celebrates Beethoven's music, life & legacy for the benefit of all. IBP has been NFP ca 2009. . ​​The mission of the International Beethoven Project is threefold: \n\n1) to celebrate Beethoven's music and humanist legacy\n\n2) to make classical music more engaging, exciting and meaningful for all people\n\n3) to serve as an educational resource \n\nBy showcasing Beethoven as the revolutionary musician he was, we believe we can inspire new generations of listeners, performers and arts administrators to appreciate and engage with this art form. To do this, IBP has used many different approaches, from producing numerous events to making films, recordings and educational media.\n\nLaunching the \"International Beethoven Day\" initiative in 2021, IBP seeks to engage even more people across the world in carrying Beethoven's legacy of humanism and music forward.\n\nUpcoming projects include a sweeping multi-media traversal of Beethoven's epic 32 piano sonatas that will",
            "ein": "273205988",
            "name": "International Beethoven Project",
            "profileUrl": "https://www.every.org/internationalbeethovenproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/baxcmclghh6orqlgoytc",
            "logoCloudinaryId": "profile_pics/baxcmclghh6orqlgoytc",
            "matchedTerms": []
        },
        {
            "description": "Develops and presents contemporary theater that explores relevant social/political themes rooted in the South Asian experience while providing a platform for the community to experience and grow personally and professionally through the arts.. EnActe Arts develops and presents contemporary theater, which explores relevant social and political themes rooted in the South Asian experience while providing a platform for the community to experience and grow personally and professionally through the arts.",
            "ein": "455339203",
            "name": "Enacte Arts Inc.",
            "profileUrl": "https://www.every.org/enacte",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/gsyan30uoqcljas0rt2x",
            "logoCloudinaryId": "faja_profile/gsyan30uoqcljas0rt2x",
            "matchedTerms": []
        },
        {
            "description": "Inspiring children of all ages to reach their full potential.. We help children build confidence, character, and creativity through our unique music and theater productions while instilling the value of community outreach and philanthropy.\n\nThe heart of the PPF is about giving back to those in need, our community, and the world while also enriching the lives of our participants through music and theater.\n\nParticipants in our various productions learn confidence, creativity, empathy, and how to help others. All the while, becoming part of a loving and supportive environment; one that helps foster positive self-image and lifelong friendships.",
            "ein": "208117567",
            "name": "Peter Pan Foundation",
            "profileUrl": "https://www.every.org/peterpanfoundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ojnuztgleieeqca5voer",
            "logoCloudinaryId": "profile_pics/ojnuztgleieeqca5voer",
            "matchedTerms": []
        },
        {
            "description": "Buntport Theater Company is a wee group of theater-making humans based in Denver.. We’ve worked together for over 2 decades, making new stuff.* We work collaboratively—without ‘official’ writers, directors, designers, janitors. We do all the stuff. Because we love it.\n\n*Our ‘new stuff’ is often based on other people’s stuff. We are not delusional about our place in history. We are ever grateful to the hundreds and hundreds of people who inspire us/that we steal from.",
            "ein": "841559858",
            "name": "Buntport Theater Company",
            "profileUrl": "https://www.every.org/buntport",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/bjq7d67jen3htdljyinv",
            "logoCloudinaryId": "profile_pics/bjq7d67jen3htdljyinv",
            "matchedTerms": []
        },
        {
            "description": "Central VA's longest running community theater that is largely run by volunteers and supported by donations.. Four County Players is Central Virginia’s longest continuously operating community theater. A nonprofit organization, Four County Players relies on community volunteers for most of its operations.  Additionally, ticket sales only cover 65% of the cost of running the theater and providing high-quality productions to the area.  Dedicated members and generous donors make up that difference.",
            "ein": "237251751",
            "name": "Four County Players",
            "profileUrl": "https://www.every.org/fourcp",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/gyj3ey8ziblvutmajz0e",
            "logoCloudinaryId": "profile_pics/gyj3ey8ziblvutmajz0e",
            "matchedTerms": []
        },
        {
            "description": "MAP works to unleash the creative voices of kids living in Providence's Olneyville neighborhood through playmaking..",
            "ein": "061725016",
            "name": "The Manton Avenue Project - Afterschool Playwriting in Olneyville",
            "profileUrl": "https://www.every.org/mantonavenueproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/b2n5qpz9rqkuaijo9nrd",
            "logoCloudinaryId": "faja_profile/b2n5qpz9rqkuaijo9nrd",
            "matchedTerms": []
        },
        {
            "description": "SMAPA provides comprehensive, inclusive, developmental training in dance and related theater arts for children, teens, and adults.. Based in Montclair, NJ since 1997,  SMAPA is a Black-led nonprofit arts organization that offers dance classes in Ballet, Hip Hop, Modern, Jazz, Tap, Salsa, and Afro-Haitian for preschoolers, kids, teens, and adults. Through outreach programs in underserved public schools in Paterson, Newark, and East Orange, NJ, and scholarship programs in their studio, SMAPA brings dance to students who might otherwise lack access to training in the performing arts.",
            "ein": "223484652",
            "name": "Sharron Millers Academy for The Performing Arts",
            "profileUrl": "https://www.every.org/smapa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/l575lvho3arbqjj7nil9",
            "logoCloudinaryId": "profile_pics/l575lvho3arbqjj7nil9",
            "matchedTerms": []
        },
        {
            "description": "Our programs help young performing artists bridge the gap from university training to careers in opera and musical theatre.. Music Theater Bavaria (DBA Musiktheater Bavaria) is a Florida-based nonprofit devoted to performing arts education for emerging professional opera and musical theatre performers between the ages of 19 and 30. Students from throughout the United States (singers, dancers, and pianists) are competitively selected for our summer study-abroad program in Germany, where they train intensively for one month with world-class international faculty and perform in public concerts in either our Opera Studio or our Musical Theater Studio.\n\nOur programs offer our students practical career training beyond what is provided in even very fine university and conservatory music and theater degree programs, giving them an extra edge that can make a difference in successfully launching their professional careers, introducing them to international opportunities they may have never drea",
            "ein": "273753774",
            "name": "Music Theater Bavaria Inc",
            "profileUrl": "https://www.every.org/music-theater-bavaria-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/urmdasrjtcqmnxc1zijt",
            "logoCloudinaryId": "profile_pics/urmdasrjtcqmnxc1zijt",
            "matchedTerms": []
        },
        {
            "description": "An NYC-based organization dedicated to fostering and showcasing today's new voices shaping tomorrow's musicals.. Over two decades, Prospect Theater Company has premiered more than 35 musicals in New York City, in addition to new plays and numerous re-inventions of classic works.   Reflecting its investment in the future of the field, Prospect leads a variety of developmental initiatives: including an annual Musical Theater Lab for emerging writers, and the IGNITE Series of new musical theater in concert. In 2020, Prospect launched the VISION Series of original music-theater works captured on film, created for online streaming. \n\nIn recognition of its enterprising and risk-taking new musical theater, the company has received an OBIE Award grant, and its role as a community anchor for emerging artists that strengthens the quality, diversity, and dynamism of American theater was honored by the American Theatre Wing.\n \nProspect is dedicated to a bright future for the American musical.  We",
            "ein": "582400427",
            "name": "Prospect Theater Company",
            "profileUrl": "https://www.every.org/prospecttheater",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/diawyo6gtzs9fisdccyb",
            "logoCloudinaryId": "profile_pics/diawyo6gtzs9fisdccyb",
            "matchedTerms": []
        }
    ],
    "transgender": [
        {
            "description": "We help LGBTQI people escape persecution and violence around the world. 🏳️‍🌈🌎  You can help save lives.. Can you imagine living in fear of persecution, torture or murder? Can you imagine going to jail for who you are or who you love?\nThat is a reality for so many LGBTQI individuals around the world. Since our founding in 2006, Rainbow Railroad has helped more than 800 individuals find a path to safety to start a new life — free from persecution.",
            "ein": "474896980",
            "name": "Rainbow Railroad",
            "profileUrl": "https://www.every.org/rainbowrailroad",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/meiue59urqiu5rgw9vrt",
            "logoCloudinaryId": "profile_pics/meiue59urqiu5rgw9vrt",
            "matchedTerms": []
        },
        {
            "description": "Dedicated to improving the quality of trans lives by responding to the critical needs of our community.. Trans Lifeline is a national trans-led organization dedicated to improving the quality of trans lives by responding to the critical needs of our community with direct service, material support, advocacy, and education. Our vision is to end trans suicide and improve overall life-outcomes of trans people by facilitating justice-oriented, collective community aid.",
            "ein": "472097494",
            "name": "Trans Lifeline",
            "profileUrl": "https://www.every.org/translifeline",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/crocdzcckmhj9tx3agiq",
            "logoCloudinaryId": "faja_profile/crocdzcckmhj9tx3agiq",
            "matchedTerms": []
        },
        {
            "description": "Maine's only trans advocacy organization, supporting and empowering trans people to create a world where they can thrive.. Our mission is to support and empower transgender people to create a world where they can thrive.\n\nMaineTransNet is a community based organization led by transgender people for transgender people. We provide peer-to-peer support groups, social and community events, advocacy for the transgender community across Maine, and transgender cultural competency training for medical, mental health, and social service providers. We engage transgender people and our allies across Maine in the practice of community building and organizing for mutual liberation. Our work is rooted in a deep desire to care for one another, which leads us to focus our efforts on building systems of mutual support on a bedrock of accessibility, inclusivity, and hospitality. We view structures of power and oppression as interlocking, and believe in finding our leadership from among those people who",
            "ein": "870801370",
            "name": "MaineTransNet",
            "profileUrl": "https://www.every.org/mainetransnet",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wysxouizuleqrnnatafg",
            "logoCloudinaryId": "profile_pics/wysxouizuleqrnnatafg",
            "matchedTerms": []
        },
        {
            "description": "Holy Covenant Church MCC is a LGBTQ+ nonprofit religious organization located in Brookfield, IL. Nonprofit status granted in 1973.. Holy Covenant MCC is an open and affirming Christian community of faith that has been serving the Chicagoland area since March 30, 1975. We celebrate our call to embody the spirit of hospitality. It is in this spirit that we welcome people of all genders, races, sexual orientations, gender identities, ages and socio-economic means to participate in the full life and ministry of our church.\n\nWe explore our faith in a safe, non-judgmental environment. We celebrate the contributions of Christianity and other faith traditions to our understanding and experience of the Divine, Just, and Creative Presence many call “God.”\n\nThe Worship Team nurtures the corporate worship life of our congregation as inspiring, celebratory, and centered on the faithful proclamation of Scripture and communion celebration. We celebrate an open communion, which means you do not have",
            "ein": "363447656",
            "name": "Holy Covenant Church - M C C",
            "profileUrl": "https://www.every.org/holy-covenant-church-m-c-c",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wadzivx5syeg2k2evqav",
            "logoCloudinaryId": "profile_pics/wadzivx5syeg2k2evqav",
            "matchedTerms": []
        },
        {
            "description": "Phoenix Pride unites, educates, and engages people to support and empower the LGBTQ+ community and our allies.. Phoenix Pride unites, educates, and engages people to support and empower the LGBTQ community and our allies.  Phoenix Pride envisions a unified community where diverse individuals are celebrated and able to thrive as their authentic selves.\n\nWe S.E.E. the future.\nAs a community, we’ve come a long way. And we know that progress has been hard fought. At Phoenix Pride, we also recognize that we still have more to accomplish. So we continue moving forward.\n\nPhoenix Pride has distributed more than $1 million in grants and scholarships since the program’s inception in 2008.",
            "ein": "860670912",
            "name": "Phoenix Pride",
            "profileUrl": "https://www.every.org/phoenixprideaz",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/t4q21w4tcmljdgu154bw",
            "logoCloudinaryId": "profile_pics/t4q21w4tcmljdgu154bw",
            "matchedTerms": []
        },
        {
            "description": "Legal services by-and-for queer and trans folks.. Lavender Rights Project (LRP) advances a more just and equitable society by providing low-cost civil legal services and community programming centered in values of social justice for trans and queer low-income people and other marginalized communities.\n\nThrough direct representation and community programming, our by-and-for services aim to radically re-imagine the legal landscape for LGBTQ+ people while building community resilience, encouraging self-advocacy, and asserting the rights of marginalized populations.",
            "ein": "810969007",
            "name": "Lavender Rights Project",
            "profileUrl": "https://www.every.org/lavender-rights-project",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/rvreypzulxkbqkxoevvl",
            "logoCloudinaryId": "profile_pics/rvreypzulxkbqkxoevvl",
            "matchedTerms": []
        },
        {
            "description": "We provide in-depth, highly relational mindfulness education for youth and the parents and professionals who support them.. Young people deserve our best attention and the greatest support we can offer, especially when it comes to teaching them the tools and resources they need to nurture their minds, spirit, and bodies.\n\nMindfulness is our passion. iBme formed from the foundation of a 30-year lineage of teen mindfulness which began with retreats offered in Barre, Massachusetts in 1989. It is from this foundation that Jessica Morey, co-founder and current lead teacher of iBme who attended her first retreat at age 14, was inspired to launch a non-profit dedicated to teaching mindfulness to young people. Since its founding in 2010, iBme has grown from a nonprofit based in Washington, DC to an international organization that holds retreats across the US, Canada, the United Kingdom, and online — all offered with no teen ever turned away for lack of funds. With its core mission of teen min",
            "ein": "273029390",
            "name": "Inward Bound Mindfulness Education (iBme)",
            "profileUrl": "https://www.every.org/ibme",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/fxpqwvrimy3n2wzfp8c3",
            "logoCloudinaryId": "profile_pics/fxpqwvrimy3n2wzfp8c3",
            "matchedTerms": []
        },
        {
            "description": "Devoted to ending discrimination and violence against transgender people.. The National Center for Transgender Equality is a national social justice organization devoted to ending discrimination and violence against transgender people through education and advocacy on national issues of importance to transgender people.   By empowering transgender people and our allies to educate and influence policymakers and others, NCTE facilitates a strong and clear voice for transgender equality in our nation's capital and around the country.",
            "ein": "412090291",
            "name": "National Center for Transgender Equality",
            "profileUrl": "https://www.every.org/transequality",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/blcuzyi4gr1jhykkhw1q",
            "logoCloudinaryId": "faja_profile/blcuzyi4gr1jhykkhw1q",
            "matchedTerms": []
        },
        {
            "description": "1st National nonprofit Organization of African American transmen solely focused on equality, advocacy and empowerment of transmen.. Since 2011, Black Transmen Inc has firmly planted ourselves on the forefront of organizing the modern movement for Black trans equality.  Still too often, black transmen are overshadowed in the fight for social equality.   Founded by Carter & Esperanza Brown, Black Transmen, Inc. (BTMI) takes pride in its role as the first national nonprofit social advocacy organization with a specific focus on empowering African American transgender men by addressing multi-layered issues of injustice faced at the intersections of racial, sexual orientation, and gender identities.\n\nOur Motto: “One Is Not Born A Man HE Becomes One”\n\nBlack Transmen Inc. sponsors a new black trans equality movement, that includes the power and admiration of black transmen living life in spite of societal and/or traditional expectations of gender identity. We affirm and celebrate the beauty,",
            "ein": "451501116",
            "name": "Black Transmen Inc",
            "profileUrl": "https://www.every.org/blacktransmen",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ej2cvwjwi6sr8fe5b6kj",
            "logoCloudinaryId": "profile_pics/ej2cvwjwi6sr8fe5b6kj",
            "matchedTerms": []
        },
        {
            "description": "Critical assistance for low-income and homeless transgender people living in Massachusetts.. Founded in 2008, by Jesse Pack later joined by Chastity Bowick, the Transgender Emergency Fund is the only organization dedicated to supporting low income and homeless Transgender individuals in Massachusetts. The Transgender Emergency Fund assists with homelessness prevention, shelter assistance, nutrition assistance, prescription co-pay assistance, transportation and escort to medical appointments, etc. All services are contingent on the availability of funds. The Transgender Emergency Fund is a nonprofit 501(c)3 organization and is operated solely on donations.",
            "ein": "812527742",
            "name": "Transgender Emergency Fund Of Massachusetts",
            "profileUrl": "https://www.every.org/transemergencyfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/f0lppbbhvsem3jotwi6a",
            "logoCloudinaryId": "profile_pics/f0lppbbhvsem3jotwi6a",
            "matchedTerms": []
        }
    ],
    "ukraine": [
        {
            "description": "Giving children in the U.S. and around the world a healthy start in life, the opportunity to learn and protection from harm.. Save the Children believes every child deserves a future. Since our founding more than 100 years ago, we’ve changed the lives of more than 1 billion children. In the United States and around the world, we give children a healthy start in life, the opportunity to learn and protection from harm. We do whatever it takes for children – every day and in times of crisis – transforming their lives and the future we share.",
            "ein": "060726487",
            "name": "Save the Children",
            "profileUrl": "https://www.every.org/savethechildren",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xugvznpbojeysnwzgyrx",
            "logoCloudinaryId": "profile_pics/xugvznpbojeysnwzgyrx",
            "matchedTerms": []
        },
        {
            "description": "IRC responds to the world’s worst humanitarian crises & helps people to survive, recover & gain control of their future.. The International Rescue Committee responds to the world’s worst humanitarian crises and helps people whose lives and livelihoods are shattered by conflict and disaster to survive, recover and gain control of their future. In more than 40 countries and in 26 U.S. cities, our dedicated teams provide clean water, shelter, health care, education and empowerment support to refugees and displaced people.",
            "ein": "135660870",
            "name": "International Rescue Committee",
            "profileUrl": "https://www.every.org/irc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/m4py1igjmt6ufvbkebzt",
            "logoCloudinaryId": "faja_profile/m4py1igjmt6ufvbkebzt",
            "matchedTerms": []
        },
        {
            "description": "We operate worldwide, helping people affected by conflict and armed violence and promoting the laws that protect victims of war..",
            "ein": "986001029",
            "name": "International Committee Of The Red Cross",
            "profileUrl": "https://www.every.org/icrc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/jzxg1doouuxpysk1b0pi",
            "logoCloudinaryId": "profile_pics/jzxg1doouuxpysk1b0pi",
            "matchedTerms": []
        },
        {
            "description": "We help people in crisis by providing emergency health services, and then promote self-reliance through training.. We are a global humanitarian organization dedicated to saving lives and relieving suffering. Established in 1984 by volunteer doctors and nurses, we are a nonprofit with no political or religious affiliation, and now have more than 7,500 staff members around the world, more than 97% of whom are local. Our mission is to improve the quality of life through health interventions and related activities that strengthen underserved communities worldwide. With the flexibility to respond rapidly to emergencies, we offer medical services and training to people at the highest risk, always working to strengthen local healthcare systems and promote self-reliance.",
            "ein": "953949646",
            "name": "International Medical Corps",
            "profileUrl": "https://www.every.org/international-medical-corps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zwxuhjjxmrayjwbfceg9",
            "logoCloudinaryId": "faja_profile/zwxuhjjxmrayjwbfceg9",
            "matchedTerms": []
        },
        {
            "description": "Supporting Ukrainian people in their pursuit of democracy with dignity, justice, and human rights.. Razom builds a prosperous Ukraine by increasing civic engagement within the country and by amplifying the voices of Ukrainians around the world. Razom (which means “together” in Ukrainian) believes deeply in the enormous potential of dedicated volunteers around the world united by a single goal: a free, democratic & prosperous Ukraine. We work towards our mission by building, amplifying and partnering. Visa mer",
            "ein": "464604398",
            "name": "Razom for Ukraine",
            "profileUrl": "https://www.every.org/razom-for-ukraine",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ziqojggtnvltam48iorl",
            "logoCloudinaryId": "faja_profile/ziqojggtnvltam48iorl",
            "matchedTerms": []
        },
        {
            "description": "Fights global poverty by empowering girls and women. Join us.. CARE is a global leader within a worldwide movement dedicated to ending poverty. We are known everywhere for our unshakeable commitment to the dignity of people. We seek a world of hope, inclusion and social justice, where poverty has been overcome and all people live with dignity and security.",
            "ein": "131685039",
            "name": "CARE",
            "profileUrl": "https://www.every.org/care",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/uy2u0sizbe4ze1dvafbz",
            "logoCloudinaryId": "faja_profile/uy2u0sizbe4ze1dvafbz",
            "matchedTerms": []
        },
        {
            "description": "As conflict escalates in Ukraine, UNICEF is on the ground reaching children with water, health and education services.. UNICEF has saved more children's lives than any of the international children’s charities. Other organizations help children, but UNICEF does more by fighting for children’s rights and delivering the essentials every child needs for an equitable chance in life.",
            "ein": "131760110",
            "name": "UNICEF USA",
            "profileUrl": "https://www.every.org/unicef-usa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/uni_zwi2qg",
            "logoCloudinaryId": "uni_zwi2qg",
            "matchedTerms": []
        },
        {
            "description": "Medical aid where it's needed most — independent, neutral, impartial.. Médecins Sans Frontières/Doctors Without Borders (MSF) is a private international association founded in 1971. The association is made up mainly of doctors and health sector workers and is also open to other professions which might help in achieving its aims. Our mission is to provide lifesaving medical care to those most in need.\n\nAll MSF members agree to honor the following principles:\n\nMSF provides assistance to populations in distress, to victims of natural or man-made disasters, and to victims of armed conflict. They do so irrespective of gender, race, religion, creed, or political convictions.\n\nMSF observes neutrality and impartiality in the name of universal medical ethics and the right to humanitarian assistance. MSF claims full and unhindered freedom in the exercise of its functions.\n\nMembers undertake to respect their professional code of ethics and to maintain complete independence from all political, ec",
            "ein": "133433452",
            "name": "Doctors Without Borders (MSF)",
            "profileUrl": "https://www.every.org/doctors-without-borders",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yce3slcafmjda1xntzwj",
            "logoCloudinaryId": "profile_pics/yce3slcafmjda1xntzwj",
            "matchedTerms": []
        },
        {
            "description": "A hot plate of food when it’s needed most. For people fighting or fleeing disasters, we are here. . Ten years ago, my wife Patricia and I had a big dream to start World Central Kitchen. We envisioned an organization that would create smart solutions to hunger and poverty, and for many years we saw an amazing impact through our clean cookstoves initiative, culinary training programs, and social enterprise ventures that empower communities and strengthen economies. But we had no idea we would one day be answering the call in Puerto Rico and around the world – “Food First Responders” serving millions of meals each year. In the process, we learned that a small NGO can change the world through the power of food.\n\nLast year, WCK activated in response to dozens of disasters — some of them natural, and some man-made. From serving children in the shelters on our border with Mexico to making deliveries by lamplight to those keeping watch over beaches in Indonesia, our fight to feed the hungry h",
            "ein": "273521132",
            "name": "World Central Kitchen",
            "profileUrl": "https://www.every.org/worldcentralkitchen",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ty9azacoven3riyd6z9l",
            "logoCloudinaryId": "faja_profile/ty9azacoven3riyd6z9l",
            "matchedTerms": []
        },
        {
            "description": "We are humanitarian relief organization that places power in the hands of health care workers to save lives across the globe.. Project HOPE places power in the hands of local health care workers to save lives across the globe.   We are a global health and humanitarian relief organization, committed to transforming lives and uplifting communities by empowering healthcare workers to expertly implement and teach innovative lifesaving solutions, in times of need and into the future.",
            "ein": "530242962",
            "name": "Project HOPE",
            "profileUrl": "https://www.every.org/projecthope",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/kq0toekonr6anjzska7u",
            "logoCloudinaryId": "faja_profile/kq0toekonr6anjzska7u",
            "matchedTerms": []
        }
    ],
    "veterans": [
        {
            "description": "Interpreting Freedom Foundation, is a nationally registered 501(c)3, committed to supporting our Afghan Interpreters and Allies.. www.InterpretingFreedom.org Founded in 2018, The Interpreting Freedom Foundation, a National Nonprofit, a registered 501(c)3 organization, committed to supporting our Afghan Interpreters, allies, and families as they transition to their new life as community members of our United States of America.\n \nWe provide comprehensive support services for all US combat interpreters who were engaged in Operation Enduring Freedom. These military and special ops interpreters played a critical role in the battlefield alongside US Armed Forces.\n \nPlease visit our webpage at www.InterpretingFreedom.org. On there, you will see that we are in many ways very different from other nonprofits. We go out of our way to be highly transparent about the stewarding and spending of your generous donor dollars. On our page, you will see a counter which tracks many of the services we hav",
            "ein": "831204288",
            "name": "Interpreting Freedom Foundation",
            "profileUrl": "https://www.every.org/interpreting-freedom-foundation-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/sc6yudflr8akfjlq3c5n",
            "logoCloudinaryId": "profile_pics/sc6yudflr8akfjlq3c5n",
            "matchedTerms": []
        },
        {
            "description": "Outward Bound California changes lives through challenge and discovery, for youth, adults and veterans.. Outward Bound California is a character development school that uses high-impact activities in a wilderness setting to teach human skills: compassion, confidence, teamwork, leadership, resilience and self-awareness.  We lead our students -- teens, adults and veterans -- on character-building expeditions in the High Sierra, Joshua Tree, the Coast Range of Central California, and on one-day experiences on our ropes challenge course in San Francisco.  \n\nOutward Bound California experiences are available to the general public, through group programming for schools and youth service nonprofits, and to veterans.  Over two-thirds of our students receive scholarship support.  \n\nOutward Bound California engages in equity work with the goal of ensuring high-quality outcomes for students and staff across identities (race, socioeconomic status, gender identity, immigration status, and more).\nw",
            "ein": "264206241",
            "name": "Outward Bound California",
            "profileUrl": "https://www.every.org/outward-bound-ca",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ppzdotjcepwrkpijmdm2",
            "logoCloudinaryId": "faja_profile/ppzdotjcepwrkpijmdm2",
            "matchedTerms": []
        },
        {
            "description": "Providing service dogs and training for veterans, most of our dogs are from shelters..  Working Dogs For Vets Mission is to provide service dogs and training to veterans in need, empowering them as they return to civilian life with a new found independence, while simultaneously reducing the overcrowding in animal shelters. Working Dogs For Vets & NO VETERAN LEFT BEHIND goal is to help every VETERAN  in need of a  Service dog.",
            "ein": "472426504",
            "name": "Working dogs for vets",
            "profileUrl": "https://www.every.org/workingdogsforvets",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/l7q40yjm6m6gx8uljfu8",
            "logoCloudinaryId": "faja_profile/l7q40yjm6m6gx8uljfu8",
            "matchedTerms": []
        },
        {
            "description": "Our mission is to honor and empower Wounded Warriors. . Every warrior has unique challenges and goals. That’s why we provide a variety of veteran programs and services to help veterans take the steps that are right for them. What’s more, thanks to the tremendous support of our donors, veterans never pay a penny to get the help they need to build the future they deserve.",
            "ein": "202370934",
            "name": "Wounded Warrior Project",
            "profileUrl": "https://www.every.org/woundedwarriorproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/vxxlwwq6yiuqvtocmb7r",
            "logoCloudinaryId": "faja_profile/vxxlwwq6yiuqvtocmb7r",
            "matchedTerms": []
        },
        {
            "description": "While we can never do enough for our defenders and their loved ones\nwe can always do A LITTLE MORE. . At the Gary Sinise Foundation, we serve our Nation by honoring our defenders, veterans, first responders, their families, and those in need.  We do this by creating and supporting unique programs designed to entertain, educate, inspire, strengthen, and build communities.\n\nOur programs provide: \n\n• Specially adapted smart homes\n• Home modifications, mobility devices and adapted vehicles\n• Mental health\n• Community education and outreach, and so much more",
            "ein": "800587086",
            "name": "Gary Sinise Foundation",
            "profileUrl": "https://www.every.org/gary-sinise-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/l2x3zaxcpqsb4ndzebmu",
            "logoCloudinaryId": "faja_profile/l2x3zaxcpqsb4ndzebmu",
            "matchedTerms": []
        },
        {
            "description": "Uplifting spirits across the globe by delivering inspiring handmade cards.. Cardz for Kidz is dedicated to uplifting the spirits of people of all ages across the globe by delivering inspiring handmade cards. We've been able to partner with independent artists, nonprofits, corporations, and schools to create over 300,000 cards that have been sent around the world. We partner with other global nonprofits (e.g. Ronald McDonald House Charities, Make-A-Wish, Amnesty International), as well as donating cards to local hospitals, nonprofits, and schools impacted by tragedy. Please join in if you're interested in making a difference.",
            "ein": "461594296",
            "name": "Cardz for Kidz",
            "profileUrl": "https://www.every.org/cardzforkidz",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/respdi6tjnmwiqvy1nrv",
            "logoCloudinaryId": "profile_pics/respdi6tjnmwiqvy1nrv",
            "matchedTerms": []
        },
        {
            "description": "Improve the quality of life for the EOD Family by providing educational, financial and emotional support.. The EOD Warrior Foundation (EODWF) serves the EOD community by providing financial assistance and support to Active-Duty, Reserve and National Guard, Retired and Veteran EOD technicians and their families.\n\nOur support includes financial assistance and additional services such as morale events, peer-to-peer support, educational programs, connections to resources, care of the EOD Memorial, and sustained contact with our EOD warriors and their families.\n\n\nThe Foundation believes that the EOD family is for life. Our ongoing mission is to disarm the challenges of the EOD family by providing our support with compassion and caring to every individual we serve.",
            "ein": "208618412",
            "name": "EOD Warrior Foundation",
            "profileUrl": "https://www.every.org/eod-warrior-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/70882929_10157560925127288_8588717089030668288_o_oelq2t",
            "logoCloudinaryId": "70882929_10157560925127288_8588717089030668288_o_oelq2t",
            "matchedTerms": []
        },
        {
            "description": "Dedicated to serving veterans—and to medical research, advocacy and civil rights for all people with disabilities.. Paralyzed Veterans was originally founded by a band of service members who came home from World War II with spinal cord injuries. They returned to a grateful nation, but also to a world with few solutions to the major challenges they faced.\n\nThese wounded heroes made a decision not just to live, but to live with dignity as contributors to society. They created Paralyzed Veterans of America, an organization dedicated to serving veterans—and to medical research, advocacy and civil rights for all people with disabilities.",
            "ein": "131946868",
            "name": "Paralyzed Veterans of America",
            "profileUrl": "https://www.every.org/pva",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/q5qqbhtrbigjnmdeuqsi",
            "logoCloudinaryId": "faja_profile/q5qqbhtrbigjnmdeuqsi",
            "matchedTerms": []
        },
        {
            "description": "Our mission is to preserve and support our veterans from the USAF Pararescue community.. Our mission is to preserve and support the U.S. Air Force Pararescue community of Pararescuemen, Combat Rescue Officers and their Families.\n\nWe execute our mission guided by three goals:\n• Relieve the physical and psychological demands of service\n• Provide tragedy, transition, and education assistance\n• Honor the commitment and sacrifice of those who live by the motto: \"That Others May Live\"",
            "ein": "811692762",
            "name": "Pararescue Foundation",
            "profileUrl": "https://www.every.org/pararescue-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/tbpp81qg8tau8exgyyss",
            "logoCloudinaryId": "profile_pics/tbpp81qg8tau8exgyyss",
            "matchedTerms": []
        },
        {
            "description": "Provides immediate and ongoing support and assistance to the Naval Special Warfare community and its families.. Built on an unparalleled legacy and established in 2000, the Navy SEAL Foundation is a 501(c)(3), tax-exempt, national, non-profit benevolent organization headquartered in Virginia Beach, VA. The Foundation is a resolute cornerstone for the Naval Special Warfare community and their families in times of adversity and triumph. Each of our specialized programs maps directly back to the U.S. Special Operations Command directive and the Naval Special Warfare’s Preservation of the Force and Family Program, a program designed to address the “fraying” of the force caused by the stress of more than 18 years of sustained combat. Our programs are designed to improve health and welfare, build and enhance resiliency, empower and educate their families, and provide critical support during times of illness, injury, and loss.",
            "ein": "311728910",
            "name": "Navy SEAL Foundation",
            "profileUrl": "https://www.every.org/navy-seal-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/latt1xhvqxnpub5gby8w",
            "logoCloudinaryId": "faja_profile/latt1xhvqxnpub5gby8w",
            "matchedTerms": []
        }
    ],
    "visualart": [
        {
            "description": "Breakout Foundation helps communities thrive by providing unrestricted funding to local changemakers.. Changemakers can't champion change alone. We know those closest to the problems are also closest to the solutions. Breakout is a social-impact experiential agency with a supporting 501c3 foundation committed to driving change.\n\nWe're here to amplify and empower the people, places, and stories that deserve the hype through unrestricted grants (while removing the red tape of traditional giving). Local changemakers deserve a platform they trust and a network of leaders to learn with and lean on.",
            "ein": "811983565",
            "name": "Breakout Foundation",
            "profileUrl": "https://www.every.org/breakout",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/g2zaamihsdylzdbhgdz5",
            "logoCloudinaryId": "profile_pics/g2zaamihsdylzdbhgdz5",
            "matchedTerms": []
        },
        {
            "description": "Center for Books Arts is a nonprofit that promotes active explorations of artistic practices related to the book as an art object.. For nearly 50 years, CBA has supported artists and uplifted the book arts by presenting exhibitions, lectures, readings, and performances; providing opportunities for artists, writers, curators and scholars through residencies, fellowships, publishing, and collecting; and empowering the creation of new book art by providing courses on book art related We are committed to providing a nurturing environment for our community in New York City and beyond to grow and learn together. Our studios and virtual educational programming make accessible the equipment and skills needed for artists and writers to take book production into their own hands, and giving creative voices a tool to self amplify without the need to rely on the gallery model or commercial pressures.\n\nFounded in 1974, Center for Book Arts was the first not-for-profit organization of its kind in th",
            "ein": "132842726",
            "name": "Center for Book Arts",
            "profileUrl": "https://www.every.org/centerforbookarts",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/urweliiyrumrkpumznzx",
            "logoCloudinaryId": "profile_pics/urweliiyrumrkpumznzx",
            "matchedTerms": []
        },
        {
            "description": "Artisan Global is a 501(c)(3) nonprofit that develops sustainable jobs, strategies, and vocational workspaces in Uganda.. We are working together with local entrepreneurs in Uganda to develop the creative industries and address cycles of extreme poverty. Our global team (Uganda and the U.S.) designed the first creative workspace for innovation & impact in Northern Uganda.",
            "ein": "824458472",
            "name": "Artisan Global",
            "profileUrl": "https://www.every.org/artisanglobal",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/roqeujb6dqwg55hccjrn",
            "logoCloudinaryId": "profile_pics/roqeujb6dqwg55hccjrn",
            "matchedTerms": []
        },
        {
            "description": "The International Beethoven Project celebrates Beethoven's music, life & legacy for the benefit of all. IBP has been NFP ca 2009. . ​​The mission of the International Beethoven Project is threefold: \n\n1) to celebrate Beethoven's music and humanist legacy\n\n2) to make classical music more engaging, exciting and meaningful for all people\n\n3) to serve as an educational resource \n\nBy showcasing Beethoven as the revolutionary musician he was, we believe we can inspire new generations of listeners, performers and arts administrators to appreciate and engage with this art form. To do this, IBP has used many different approaches, from producing numerous events to making films, recordings and educational media.\n\nLaunching the \"International Beethoven Day\" initiative in 2021, IBP seeks to engage even more people across the world in carrying Beethoven's legacy of humanism and music forward.\n\nUpcoming projects include a sweeping multi-media traversal of Beethoven's epic 32 piano sonatas that will",
            "ein": "273205988",
            "name": "International Beethoven Project",
            "profileUrl": "https://www.every.org/internationalbeethovenproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/baxcmclghh6orqlgoytc",
            "logoCloudinaryId": "profile_pics/baxcmclghh6orqlgoytc",
            "matchedTerms": []
        },
        {
            "description": "We connect communities to land, food and opportunity.. \n\nAlchemist CDC is a mission-driven organization that connects Sacramento area communities to land, food, and opportunity toward a vision in which all neighborhoods are vibrant, equitable, healthy, and diverse.\n\nWe are best known for enhancing the quality of life in under-resourced communities by improving access to nutritious foods, implementing community-supported public green spaces, and fostering economic self-sufficiency through business entrepreneurship.\n\nRecognizing that residents often have the best ideas for improving their neighborhoods and city, we see ourselves as providing a sort of community laboratory. We are committed to creativity and are constantly experimenting with new projects and ideas. Those projects that prove impactful and sustainable may go on to grow into mature programs, whereas others become valuable learning experiences. In every case, we serve as a catalyst for change.",
            "ein": "201891448",
            "name": "Alchemist Community Development Corporation",
            "profileUrl": "https://www.every.org/alchemistcdc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/izjv7em4euy9xlsvh87v",
            "logoCloudinaryId": "faja_profile/izjv7em4euy9xlsvh87v",
            "matchedTerms": []
        },
        {
            "description": "Uplifting spirits across the globe by delivering inspiring handmade cards.. Cardz for Kidz is dedicated to uplifting the spirits of people of all ages across the globe by delivering inspiring handmade cards. We've been able to partner with independent artists, nonprofits, corporations, and schools to create over 300,000 cards that have been sent around the world. We partner with other global nonprofits (e.g. Ronald McDonald House Charities, Make-A-Wish, Amnesty International), as well as donating cards to local hospitals, nonprofits, and schools impacted by tragedy. Please join in if you're interested in making a difference.",
            "ein": "461594296",
            "name": "Cardz for Kidz",
            "profileUrl": "https://www.every.org/cardzforkidz",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/respdi6tjnmwiqvy1nrv",
            "logoCloudinaryId": "profile_pics/respdi6tjnmwiqvy1nrv",
            "matchedTerms": []
        },
        {
            "description": "The Steel Yard offers arts and technical training programs designed to increase opportunities for cultural and artistic expression.. The Steel Yard is a non-profit industrial art center and shared studio located in Providence, RI. We’re an arts maker space and non-traditional craft school offering courses & educational programs in blacksmithing, welding, jewelry, foundry, and ceramics. \n\nOur public projects department fabricates functional, design-driven public-art for installation throughout Southeastern New England. These decorative bike racks, trash cans, benches, and fences are found at businesses and main streets from Western Massachusetts to Block Island, with custom metal sculptures installed along waterways, parks, schools and public spaces across the region.\n\nWe’re a community of artists, makers, and learners. We host an artist residency program for emerging and mid-level artists that provides full access to our studios and equipment. Our welding job training program pays und",
            "ein": "320015513",
            "name": "the Steel Yard",
            "profileUrl": "https://www.every.org/the-steel-yard",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/powhwaeklm56kplpgowp",
            "logoCloudinaryId": "profile_pics/powhwaeklm56kplpgowp",
            "matchedTerms": []
        },
        {
            "description": "Walls offers a bold vision for what's possible in a community, particularly for those impacted by poverty. . The Walls Project leads programs, events, and alliances that work to break through and tear down the societal walls that discourage or prevent people from living safe, healthy, and prosperous lives.  Walls offers a bold vision for what's possible in a community, creating pathways for economic prosperity; lifetime learning and creative expression; and healthy living for all, particularly for those impacted by poverty. \n\nWalls was founded on the belief that the physical, social, and economic conditions of individuals ultimately and collectively inform the overall safety, health and well-being, and economic conditions of communities. Walls offers a bold vision for what's possible in a community, creating pathways for economic prosperity; lifetime learning and creative expression; and healthy living for all, particularly those impacted by poverty. Walls’ work— workforce development",
            "ein": "455485171",
            "name": "The Walls Project",
            "profileUrl": "https://www.every.org/thewallsproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/xxtgaxbq4nh4h2gs4lr1",
            "logoCloudinaryId": "faja_profile/xxtgaxbq4nh4h2gs4lr1",
            "matchedTerms": []
        },
        {
            "description": "The Simple Good is a 501(c)3 non-profit organization that empower youth from around the world through art education. . The Simple Good is a non-profit organization dedicated to connecting the meaning of good from around the world to empower youth to become positive activists through art and discussion. Through mindfulness and social emotional learning (SEL) based art programming and public art projects, our mission is to transcend the message that no matter where you go in the world, good means the same to all of us and that is what connects us as human beings.",
            "ein": "464091597",
            "name": "The Simple Good",
            "profileUrl": "https://www.every.org/the-simple-good",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/s9gvgab45fs5jyzuoh3v",
            "logoCloudinaryId": "faja_profile/s9gvgab45fs5jyzuoh3v",
            "matchedTerms": []
        },
        {
            "description": "Matagiri is dedicated to the vision of Sri Aurobindo and the Mother and the international community of Auroville.. We are in the 150th year since Sri Aurobindo’s birth and doing our best to honor the sacred trust of maintaining and expanding the buildings and grounds of our Center.\n\nOur residential team has worked on landscaping, hosted live concerts and continued our online study circles.\n\nWe hold weekly hatha yoga classes and Pilates mat classes and special Darshan gatherings.\n\nWe maintain a library of over 1200 titles and a bookstore, gallery and boutique with handcrafted gifts from the international community of Auroville. Our gallery features the paintings of Matagiri founder, Sam Spanier. Open by appointment.",
            "ein": "132915643",
            "name": "Matagiri Sri Aurobindo Center Inc",
            "profileUrl": "https://www.every.org/matagiri-sri-aurobindo-center-inc",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/uezv6gennyznrkyhvmpn",
            "logoCloudinaryId": "profile_pics/uezv6gennyznrkyhvmpn",
            "matchedTerms": []
        }
    ],
    "votingrights": [
        {
            "description": "Nonpartisan nonprofit dedicated to empowering people with voting methods that strengthen democracy.. Founded in 2011, The Center for Election Science is a national, nonpartisan nonprofit dedicated to helping the world use better election systems. We study and advance alternative voting methods, with an emphasis on a method called approval voting. We’re passionate about voting methods because the collective decisions we make through voting dramatically impact our day-to-day lives. Smarter collective decisions, whether in government or in private organizations, promise to provide us all with a better quality of life.",
            "ein": "452334002",
            "name": "The Center for Election Science",
            "profileUrl": "https://www.every.org/electionscience",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/40449255_1828630403841079_4647862588091138048_o_ui0ajj",
            "logoCloudinaryId": "40449255_1828630403841079_4647862588091138048_o_ui0ajj",
            "matchedTerms": []
        },
        {
            "description": "Realizing the promise of the Bill of Rights for all - the ACLU dares to create a more perfect union.. The ACLU dares to create a more perfect union — beyond one person, party, or side. Our mission is to realize this promise of the United States Constitution for all and expand the reach of its guarantees.",
            "ein": "136213516",
            "name": "ACLU Foundation",
            "profileUrl": "https://www.every.org/aclu",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/aclu_wtqwdg",
            "logoCloudinaryId": "faja_profile/aclu_wtqwdg",
            "matchedTerms": []
        },
        {
            "description": "America’s premier legal organization fighting for racial justice through litigation, advocacy, and public education.. The NAACP Legal Defense and Educational Fund, Inc. is America's premier legal organization fighting for racial justice. Through litigation, advocacy, and public education, LDF seeks structural changes to expand democracy, eliminate disparities, and achieve racial justice in a society that fulfills the promise of equality for all Americans. LDF also defends the gains and protections won over the past 70 years of civil rights struggle and works to improve the quality and diversity of judicial and executive appointments.",
            "ein": "131655255",
            "name": "NAACP Legal Defense Fund",
            "profileUrl": "https://www.every.org/naacp-ldf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kop6pinsnnu57x6mdz71",
            "logoCloudinaryId": "profile_pics/kop6pinsnnu57x6mdz71",
            "matchedTerms": []
        },
        {
            "description": "Devoted to encouraging political journalists to live up to the highest standards of their profession.. At this point, no one can possibly argue that political journalism has fulfilled its essential missions of creating an informed electorate and holding the powerful accountable.\n\nBut our top newsroom leaders have seen no need for a course change. In particular, they have failed to respond to the growing asymmetry between the political parties, even as one became overtly counter-majoritarian, anti-democratic, and unmoored to reality.\n\nPress Watch agitates for change. It encourages reporters to fight disinformation more enthusiastically and effectively, especially when our democracy and people’s lives are at stake. It identifies best practices that others can emulate. It urges the reality-based parts of the industry to  explicitly condemn Fox News and other far-right propaganda outlets as disinformation operations.",
            "ein": "861518589",
            "name": "Press Watch",
            "profileUrl": "https://www.every.org/presswatch",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/diubkeqvtflmway2kys7",
            "logoCloudinaryId": "profile_pics/diubkeqvtflmway2kys7",
            "matchedTerms": []
        },
        {
            "description": "Nonpartisan champion of electoral reforms that give voters greater choice, a stronger voice, and a representative democracy.. It's time to level the playing field so all voters have a voice in American democracy. \n\nWe believe our government should be of, by, and for the people. The way we vote limits our choices for leaders and fails to hold them accountable to the communities they represent. We need a way to elect candidates who represent the will of the people. The best ideas should decide who wins, not the biggest bank accounts or outdated electoral rules.\n\nFairVote researches and advocates for solutions that give voters more voice and greater choice in their elections.",
            "ein": "541635649",
            "name": "FairVote",
            "profileUrl": "https://www.every.org/fairvote",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/nnl7uqxmie1glwwgolen",
            "logoCloudinaryId": "profile_pics/nnl7uqxmie1glwwgolen",
            "matchedTerms": []
        },
        {
            "description": "VPC Helps Millions of People Register and Vote.. VPC is dedicated to increasing voter registration in the United States among young people, people of color and unmarried women. The organization has helped more than 5.7 million people register and cast ballots.\n\nIf you are an active member of the military you might have different deadlines and processes for casting your ballot.\n\nEven if you’re living outside of the U.S., voting might be easier than you think. Find out how to register your absentee ballot.",
            "ein": "550889748",
            "name": "The Voter Participation Center",
            "profileUrl": "https://www.every.org/voterparticipation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zjmzprkh53pymqqqjzar",
            "logoCloudinaryId": "profile_pics/zjmzprkh53pymqqqjzar",
            "matchedTerms": []
        },
        {
            "description": "Uses technology to simplify political engagement, increase voter turnout, and strengthen American democracy.. The largest nonprofit, non-partisan voting registration and get out the vote (GOTV) technology platform in America. It has registered more than 3.3 million new voters, verified 8.2 million voters’ registration status, and has helped over 30 million website users by providing registration links and deadlines, polling location details, and other essential voting information for each state. Vote.org also leverages its SMS-based GOTV program each year, targeting low-propensity voters in regularly scheduled and special elections.\n\nTo turn out the vote among young people and people of color, Vote.org partners with corporations and other organizations in the civic space, including Gannett Media Group's USA Today, Vote Save America, and The Andrew Goodman Foundation. Vote.org has also launched exciting new partnerships in 2020 with The Webby Awards, NAACP Youth Coalition, GLSEN, wikiH",
            "ein": "262094990",
            "name": "Vote.org",
            "profileUrl": "https://www.every.org/vote.org",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/z22lloncrb7lgufffkcj",
            "logoCloudinaryId": "faja_profile/z22lloncrb7lgufffkcj",
            "matchedTerms": []
        },
        {
            "description": "We are a nonpartisan law and policy institute working to reform and defend our country’s systems of democracy and justice.\n. The Brennan Center for Justice is an independent, nonpartisan law and policy organization that works to reform, revitalize, and when necessary, defend our country’s systems of democracy and justice.   \n\nToday, we are in a great fight for the future of constitutional democracy in the United States. We are committed to the rule of law. We work to craft and advance a transformative reform agenda — solutions that aim to make American democracy work for all.\n\nThe Brennan Center has built a distinct model to advance legal and policy change:\n\nWe’re a think tank, conducting rigorous research to identify problems and craft transformative solutions.\nWe’re an advocacy group, fighting in court and working with elected officials to advance legislation.\nWe’re a cutting-edge communications hub, shaping opinion by taking our message directly to the press and public.\nAt a time o",
            "ein": "133839293",
            "name": "Brennan Center for Justice at NYU Law",
            "profileUrl": "https://www.every.org/brennancenter",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/biohyoxcnoghqcdqxguz",
            "logoCloudinaryId": "faja_profile/biohyoxcnoghqcdqxguz",
            "matchedTerms": []
        },
        {
            "description": "Educates and activates individuals, organizations, and institutions to interrupt racism, bigotry, and prejudice.. The Montana Racial Equity Project, a nonprofit and nonpartisan organization, advocates equity and justice for historically marginalized, disenfranchised, and oppressed peoples in Montana. We educate, train, and activate organizers, individuals, groups, organizations, institutions, and businesses to invest in interrupting racism, bigotry, and prejudice whenever encountered.",
            "ein": "475462992",
            "name": "The Montana Racial Equity Project",
            "profileUrl": "https://www.every.org/themtrep",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/pgmmof72tfm2zf3jtpnw",
            "logoCloudinaryId": "faja_profile/pgmmof72tfm2zf3jtpnw",
            "matchedTerms": []
        },
        {
            "description": "The Equal Vote Coalition is the driving force behind STAR Voting and a leading proponent of better voting methods in general.. The Equal Vote Coalition's mission is to promote true equality in the vote. The Equal Vote Coalition mandate is top-notch research, community education, and coalition building.\n\nOur five core criteria for electoral reform are: Equality, Honesty, Accuracy, Expressiveness, and Simplicity. These criteria form the basis by which we evaluate and advance proposals for better voting.",
            "ein": "824770956",
            "name": "Equal Vote Coalition",
            "profileUrl": "https://www.every.org/equalvote",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/vaxna5vdcmvgrpyw2ibt",
            "logoCloudinaryId": "profile_pics/vaxna5vdcmvgrpyw2ibt",
            "matchedTerms": []
        }
    ],
    "water": [
        {
            "description": "Water + Education + Business/Income + Safe Shelter = Building Self Reliant Communities, One Family, One Village at a time . . .. Our latest business initiative in Kenya is Beehives. We have started two apiaries with 25 hives each in two separate villages. The beehives are a long term investment that we expect to pay big dividends in self reliance for these communities. A purchase of 25 Beehives is about a $4000 investment. We received a generous donation from a donor who wishes to remain anonymous. Would you like to be part of the next 25 hives to start another village on the road to self reliance? Make a donation and designate Beehives in your comments. \n\nThe home for Meleon and her children has been completed and on March 27, 2021 her home was blessed by the local minister. Meleon is very grateful for this blessing of a new home made possible for her and her children through your generous donations. Thank You!\n\n\nGabriel, Caroline and Emmanuel, 3 of our students live with their widow",
            "ein": "844844337",
            "name": "No End To Love Inc.",
            "profileUrl": "https://www.every.org/noendtolove",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/hikg4efvagohajiwodth",
            "logoCloudinaryId": "profile_pics/hikg4efvagohajiwodth",
            "matchedTerms": []
        },
        {
            "description": "We're working every day to reinvent charity while bringing clean drinking water to the 663 million people living without. Join us.. charity: water is a non-profit bringing clean and safe drinking water to people in developing nations. \n\nIn just ten years, we've funded more than 38,000 water projects in 27 developing countries. When complete, these projects will provide clean, safe drinking water for more than 9.6 million people.\n\nNearly 663 million people in our world don’t have access to clean drinking water. Unsafe water and lack of basic sanitation cause 80% of diseases and kill more people every year than all forms of violence, including war.\n\nThe good news: there are simple solutions, from deep drilled wells to water filtration systems. And with the help of 1,000,000+ donors and individual fundraisers, we're forming a strong force against the water crisis.\n\nHELP KEEP FAMILIES HEALTHY AND SAFE\n\nAs COVID-19 spreads, clean and safe water for hand washing is essential. 100% of your d",
            "ein": "223936753",
            "name": "charity: water",
            "profileUrl": "https://www.every.org/charitywater",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/yj2eeoz96ypvdudhb5wk",
            "logoCloudinaryId": "faja_profile/yj2eeoz96ypvdudhb5wk",
            "matchedTerms": []
        },
        {
            "description": "Ensuring access to safe water, sanitation, and hygiene since 2007. . We envision a better world, where all have access to living conditions that allow empowerment and development. Together, we aim to ensure sustainable access to safe water and sanitation for the most vulnerable communities through innovative partnerships, creativity and the power of art.",
            "ein": "263242787",
            "name": "One Drop Foundation",
            "profileUrl": "https://www.every.org/onedrop",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/adtf4n2mjlz7hjndot81",
            "logoCloudinaryId": "profile_pics/adtf4n2mjlz7hjndot81",
            "matchedTerms": []
        },
        {
            "description": "To foster a more peaceful society Terrawatu works in Tanzania creating self-sustainable projects rooted in indigenous communities . Who We Are\n\nCelebrating 20 years this year, Terrawatu is an NGO based in Tanzania that works with local communities to create sustainable development projects, and educates about the importance of environmental conservation, reforestation and the cultivation of plants for both medicinal and nutritional purposes. Our success lies in our ability to unite time-tested ancient wisdom with up-to-date science so that the needs of communities are met appropriately and efficiently.\n\nThe founders of Terrawatu – Dr. Tanya Pergola, an American sociologist and Lekoko Ole Sululu, a Tanzanian Maasai elder – share a love for Tanzania’s land, rich cultures, and its people. Saddened by the ‘brain drain’ and desire of so many young Tanzanians to leave their country in search of perceived ‘greener pastures’ the founders set about to do what they could to educate and improve",
            "ein": "260212786",
            "name": "Terrawatu",
            "profileUrl": "https://www.every.org/terrawatu",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kektm5hrb2fnkifwpwoi",
            "logoCloudinaryId": "profile_pics/kektm5hrb2fnkifwpwoi",
            "matchedTerms": []
        },
        {
            "description": "Serving immediate needs, supporting long-term solutions for strong, self-sufficient Native American communities.  . Partnership With Native Americans is a 501 (c)(3) nonprofit organization committed to championing hope for a brighter future for Native Americans living on remote, isolated and impoverished reservations. Collaborating for nearly 30 years with our reservation partners, we provide consistent aid and services for Native Americans with the highest need in the U.S.\n\nMuch of our work centers around material aid, educational support and community-based services. PWNA also connects outside resources directly to reservations through its distribution network and reservation partnerships. We care about quality of life for Native Americans and respect their self-determined goals for their tribes.\n\nThe only Native-serving charity to work in hundreds of reservation communities year-round, our service area is concentrated in 9 priority states and encompasses Pine Ridge, Rosebud, Navajo",
            "ein": "473730147",
            "name": "Partnership With Native Americans",
            "profileUrl": "https://www.every.org/nativepartnership",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yq7qaxx9h2vihnlzsmgk",
            "logoCloudinaryId": "profile_pics/yq7qaxx9h2vihnlzsmgk",
            "matchedTerms": []
        },
        {
            "description": "Combatting poverty, hunger and climate change by training farmers in regenerative agriculture. Planting trees changes lives!. Trees for the Future's mission is to combat hunger, poverty and the climate crisis by training farmers in regenerative agriculture. \n\nAgriculture is one of the leading causes of climate change, so by educating farmers in the Forest Garden Approach, we're able to change the way agriculture impacts the planet- benefiting the environment and supporting those most vulnerable to the impacts of climate change. \n\nOur approach:\n\nThrough our 4-year Forest Garden Training Program, farmers plant thousands of trees that repair and protect their degraded land while bringing nutrients back to the soil. This allows farmers to cultivate a variety of fruits and vegetables that they can sell on the market and feed their families, providing them with a sustainable source of food and income all year long. \n\nTREES' Forest Garden Approach is proven to be one of the most effective an",
            "ein": "521644869",
            "name": "Trees for the Future",
            "profileUrl": "https://www.every.org/trees-for-the-future",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/rzdgreolqlfj8bsotjhi",
            "logoCloudinaryId": "profile_pics/rzdgreolqlfj8bsotjhi",
            "matchedTerms": []
        },
        {
            "description": "We partner with Congolese communities to build lasting change. Along the way, we're transformining humanitarian aid, for good.. Eastern Congo Initiative (ECI) believes that local, community-based initiatives create transformative impact and lasting development in eastern Congo. That's because no one knows the both the challenges and paths forward better than those who live with them every day. By directly funding this work, we have secured justice for over 2,000 victims of rape, set legal precedent for woman gaining the right to inherit land, and supported clean water and healthcare infrustructure that serves 120,000 people every day. \n\nWe cultivate public and private partnerships alongside strategic advocacy to drive change and increase attention. Our multifaceted approach works to create new, lasting opportunities for the people of eastern Congo. \n\nAnd we know that by investing in local solutions and working shoulder to shoulder with Congolese innovators, we can revolutionize how th",
            "ein": "454103655",
            "name": "Eastern Congo Initiative",
            "profileUrl": "https://www.every.org/easterncongo",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/lh0asyqczsogjk2x1kv2",
            "logoCloudinaryId": "profile_pics/lh0asyqczsogjk2x1kv2",
            "matchedTerms": []
        },
        {
            "description": "Can Do Kids helps kids around the world experience God's love by empowering their communities to meet their most basic needs. .",
            "ein": "271302872",
            "name": "Can Do Kids International",
            "profileUrl": "https://www.every.org/candokids",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/okw02etpiqsoqwbxelnn",
            "logoCloudinaryId": "profile_pics/okw02etpiqsoqwbxelnn",
            "matchedTerms": []
        },
        {
            "description": "A movement of people revolutionizing charitable giving to end extreme poverty.. We motivate people to donate 1% or more of their income to the world’s most cost-effective charities, every month, for life. We update this portfolio every year, so your donations are always as impactful as possible.",
            "ein": "842124550",
            "name": "One For The World Inc",
            "profileUrl": "https://www.every.org/1fortheworld",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/b1wtfyeww747g4n0ukxi",
            "logoCloudinaryId": "profile_pics/b1wtfyeww747g4n0ukxi",
            "matchedTerms": []
        },
        {
            "description": "COTAP mitigates your CO2 footprint with life-changing and certified forestry projects in least-developed countries.. When donating, please specify one of the following three options: 1) Offset To All Projects, 2) Offset: (Choose Nicaragua, Uganda, India, Fiji, Indonesia, or Mexico), or 3) 100% to COTAP’s Operations & Expansion. For more information, please see https://COTAP.org/Crypto.\n\nFounded in 2011, COTAP empowers individuals and organizations in developed countries to simultaneously fight both global poverty and climate change. COTAP connects your carbon footprint with forestry projects in least-developed countries which create life-changing income for the world's poorest people. \n\nAll COTAP projects are certified by the Plan Vivo Foundation Carbon Standard, the world's oldest forest carbon standard and the only standard which requires that projects share 60%+ of carbon revenues with participating communities. Combined with COTAP's transparent, modest, and consistent margin of 10",
            "ein": "274220630",
            "name": "Carbon Offsets To Alleviate Poverty (COTAP)",
            "profileUrl": "https://www.every.org/cotap",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/kiwvynuxylcdvbafh0i8",
            "logoCloudinaryId": "profile_pics/kiwvynuxylcdvbafh0i8",
            "matchedTerms": []
        }
    ],
    "wildfires": [
        {
            "description": "Improve the health and lives of people affected by poverty or emergencies without regard to politics, religion, or ability to pay.. In the U.S., Direct Relief is delivering protective masks – along with exam gloves and isolation gowns – to health care organizations in areas with confirmed COVID-19 cases.\nIn China, Direct Relief has delivered via FedEx more than 30,000 pounds of protective gear — nearly 800,000 N95 and surgical masks, more than 400,000 gloves, and numerous coveralls, face shields, and shoe covers — to frontline health workers.\nDirect Relief is also staging personal protective equipment with regional response agencies across the world, including in the Caribbean and South America through the Pan American Health Organization.",
            "ein": "951831116",
            "name": "Direct Relief",
            "profileUrl": "https://www.every.org/direct-relief",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/yv2axjqvh2pojbralytc",
            "logoCloudinaryId": "faja_profile/yv2axjqvh2pojbralytc",
            "matchedTerms": []
        },
        {
            "description": "Providing emotional and financial assistance to families of fallen firefighters, firefighters and the communities they protect.. The California Fire Foundation, a non-profit 501 (c)(3) organization, provides emotional and financial assistance to families of fallen firefighters, firefighters and the communities they protect. Formed in 1987 by California Professional Firefighters, the California Fire Foundation’s mandate includes an array of survivor and victim assistance projects and community initiatives",
            "ein": "680118991",
            "name": "California Fire Foundation",
            "profileUrl": "https://www.every.org/cafirefoundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zucaz9jio1il8b9fi4zx",
            "logoCloudinaryId": "faja_profile/zucaz9jio1il8b9fi4zx",
            "matchedTerms": []
        },
        {
            "description": "Leading our community to ensure that anyone who needs a healthy meal can get one.. Second Harvest and our partner sites are the only grocery stores for the most vulnerable members of our community and one of few networks open as we \"shelter in place.\"\n\nDuring public health crises like the COVID-19 outbreak, kids and families on the brink of poverty are disproportionately impacted. When schools are closed and hourly wages are scaled back, the service we provide is even more critical. Yet we're facing unprecedented challenges ourselves, with rapid changes to our volunteer workforce and distribution networks.\n\nAs our community responds to the COVID-19 outbreak, Second Harvest of Silicon Valley remains committed to our mission knowing that our most vulnerable community members are deeply and disproportionately impacted by public crises such as this. We are in ongoing communication with our partners, staff and volunteers to maintain safe practices that will ensure nutritious food continues",
            "ein": "942614101",
            "name": "Second Harvest of Silicon Valley",
            "profileUrl": "https://www.every.org/shfb",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/hqj4lwilezvjc6zb1e7q",
            "logoCloudinaryId": "faja_profile/hqj4lwilezvjc6zb1e7q",
            "matchedTerms": []
        },
        {
            "description": "The California Community Foundation leads positive systemic change to strengthen Los Angeles communities.. The California Community Foundation's mission is to lead positive systemic change that strengthens Los Angeles. Since 1915, we have been empowering donors to pursue their passions and collaborate with us in addressing the root causes of challenges in L.A.",
            "ein": "953510055",
            "name": "California Community Foundation",
            "profileUrl": "https://www.every.org/calfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/xr56w90gjjgiblvtwwth",
            "logoCloudinaryId": "faja_profile/xr56w90gjjgiblvtwwth",
            "matchedTerms": []
        },
        {
            "description": "Working to end hunger in Contra Costa and Solano counties.. We distribute food directly to low-income people at community sites and make food available for other nonprofit organizations serving the ill, needy and infants. The Food Bank has developed programs that provide food to meet the demand as well as support the nutritional needs of the people we serve. Programs including Food for Children, Farm 2 Kids, and the School Pantry Program operate throughout the year to help alleviate childhood hunger.",
            "ein": "942418054",
            "name": "Food Bank of Contra Costa and Solano",
            "profileUrl": "https://www.every.org/foodbankccs",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/vfxhg7nuwvwfklhkircs",
            "logoCloudinaryId": "faja_profile/vfxhg7nuwvwfklhkircs",
            "matchedTerms": []
        },
        {
            "description": "We help families of firefighters killed in the line of duty and to assist injured firefighters and their families.. We honor and acknowledge past, present, and future members of the wildland firefighting community, and partner with private and interagency organizations to bring recognition to wildland firefighters.\n\nWildland firefighters represent the diversity of the land they protect.  They are federal, state and local firefighters, private sector firefighters, interface firefighters, and volunteers from rural communities and towns across the United States.  Many are long-time career professionals, some much newer to the job. They’re ordinary people doing an extraordinary job, a community of committed individuals who work and train to protect our private and public lands.",
            "ein": "931266991",
            "name": "Wildland Firefighter Foundation",
            "profileUrl": "https://www.every.org/wffoundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/tjlwcqlutjcbwvolwpso",
            "logoCloudinaryId": "profile_pics/tjlwcqlutjcbwvolwpso",
            "matchedTerms": []
        },
        {
            "description": "Puente connects food, farmers and farm workers in the rural South Coast San Mateo County, CA.. As the region’s only Community Resource Center, Puente serves the San Mateo County South Coast communities of Pescadero, La Honda, Loma Mar, and San Gregorio. Puente both advocates for our communities and leverages resources that foster economic prosperity and security, and that promote individual and community health and wellness. We support local leaders and work together with our neighbors creating solutions for our diverse communities.",
            "ein": "371484262",
            "name": "Puente de la Costa Sur (PUENTE)",
            "profileUrl": "https://www.every.org/mypuente",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/c09v2oylq0exkkllebqt",
            "logoCloudinaryId": "faja_profile/c09v2oylq0exkkllebqt",
            "matchedTerms": []
        },
        {
            "description": "We provide surplus food and essential goods for those in need. \nCheck us out at https://www.notimetowaste.live. With so much excess and so much need in our community, we hope to lessen our global and poverty footprint by using goods, rather than wasting them.\n\nWe have provided 130K lbs of food; 93K meals; 61K sides; 25K essential goods; reduced our CO2 by 44 tons and saved 60M gallons H20.",
            "ein": "274564722",
            "name": "No Time To Waste",
            "profileUrl": "https://www.every.org/no-time-to-waste",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/gaavtc7drvczh0m93d0g",
            "logoCloudinaryId": "profile_pics/gaavtc7drvczh0m93d0g",
            "matchedTerms": []
        },
        {
            "description": "We support services that improve family financial stability throughout Sonoma, Mendocino, Lake, Humboldt and Del Norte counties. . United Way of the Wine Country has been improving lives locally for more than 50 years by focusing on common problems in early childhood education, financial stability, and health and well-being. We remain deeply committed to achieving lasting solutions for our shared communities by serving as a vital link between residents, nonprofit organizations, businesses and government leaders in Sonoma, Mendocino, Lake, Humboldt and Del Norte counties.",
            "ein": "941669646",
            "name": "United Way of the Wine Country",
            "profileUrl": "https://www.every.org/unitedwaywinecountry",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/wft3kfnwc2zmjbk7bqhq",
            "logoCloudinaryId": "faja_profile/wft3kfnwc2zmjbk7bqhq",
            "matchedTerms": []
        },
        {
            "description": "To improve lives by mobilizing the caring power of Jackson County communities.. Values\nCommunity: We bring together our diverse population to discover and deliver solutions to the challenges which impact the health and well being of all of us.\n\nCompassion: We offer opportunity, encouragement and inspiration within our community to care for one another.\n\nEmpowerment: We provide the ability to grow, collaborate and transform for individuals, organizations and communities.\n\nVision: We help people fulfill their potential and improve lives in our community by informing, advocating, convening and facilitating human services.\n\nIntegrity: We are honest and trustworthy providing clarity, consistency and strength in our mission.\n\nInclusion: United Way of Jackson County believes in inclusion.  We promote diversity, equity and inclusion (DEI) in our committees, councils, Board and staff.  We develop leaders who are educated and aware of DEI.  We work to ensure our policies and procedures honor DE",
            "ein": "930576632",
            "name": "United Way of Jackson County",
            "profileUrl": "https://www.every.org/unitedwayofjackson",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/zsvzlnl4q4p3rtjqt3k2",
            "logoCloudinaryId": "profile_pics/zsvzlnl4q4p3rtjqt3k2",
            "matchedTerms": []
        }
    ],
    "wildlife": [
        {
            "description": "The Fungi Foundation is a global organization that works for the Fungi, their habitats, and the people who depend on them.. Launched in 2012, the Fungi Foundation is the first NGO dedicated to the fungi kingdom. Since its inception, it has achieved numerous milestones while dedicating itself to exploring the fungi world in view of increasing knowledge of their diversity, educating about their applications, and recommending public policy for their conservation. As part of our ongoing 3F initiative, the foundation played a key role in enabling Chile to become the first country in the world to include protection of fungi in its environmental legislation. More recently, the foundation proudly announced the Fantastic Fungi Education Curriculum, the world's first mycological set of courses designed for schools.\n\nIn short, the Fungi Foundation envisions a healthy planet in which Fungi are recognized, protected, and embraced as the interconnectors of nature; a mission that would be impossible",
            "ein": "851478153",
            "name": "Fungi Foundation",
            "profileUrl": "https://www.every.org/ffungi",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wq14eif08jx3kka2ixau",
            "logoCloudinaryId": "profile_pics/wq14eif08jx3kka2ixau",
            "matchedTerms": []
        },
        {
            "description": "We are a think tank dedicated to figuring out the best ways to make the world a better place.. Rethink Priorities is a research organization that conducts critical research to inform policymakers and major foundations about how to best help people and nonhuman animals in both the present and the long-term future.\n\nOur research spans everything from animal welfare to the threat of nuclear war. We explore neglected but promising areas to improve the world and try to further build the community of researchers working on understanding how to do this most effectively.",
            "ein": "843896318",
            "name": "Rethink Priorities",
            "profileUrl": "https://www.every.org/rethinkpriorities",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/i3iknd276i6cw1exfveu",
            "logoCloudinaryId": "profile_pics/i3iknd276i6cw1exfveu",
            "matchedTerms": []
        },
        {
            "description": "We want to make life better for wild animals.. We are dedicated to finding evidence-backed ways to improve the lives of animals in the wild.\n\nWe depend on individual donors to help us make life better for wild animals. To a small nonprofit working hard on a big problem, your support is more crucial now than ever!",
            "ein": "822281466",
            "name": "Wild Animal Initiative",
            "profileUrl": "https://www.every.org/wildanimalinitiative",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wzgsabl4bvjvfl6jezb1",
            "logoCloudinaryId": "profile_pics/wzgsabl4bvjvfl6jezb1",
            "matchedTerms": []
        },
        {
            "description": "Conserve nature and reduce the most pressing threats to the diversity of life on Earth.. WWF's mission is to conserve nature and reduce the most pressing threats to the diversity of life on Earth.  Our vision is to build a future where people live in harmony with nature.",
            "ein": "521693387",
            "name": "World Wildlife Fund",
            "profileUrl": "https://www.every.org/wwf",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/wmw5wsfsjhump3ecbsb8",
            "logoCloudinaryId": "faja_profile/wmw5wsfsjhump3ecbsb8",
            "matchedTerms": []
        },
        {
            "description": "Pollinate minds and convey the importance of saving wild honey bees from extinction by integrating them into urban environments.. The mission to save honey bees from extinction–CEO Walter Schumacher’s professed goal–originated from a conversation in 2006. Walter, also known fondly as the “Bee-Czar”, was intrigued when a friend of his explained that the key to saving the world was to save the honey bee. From that point on, Walter took every step towards figuring out how to save bees from unwanted places without endangering their lives. \n\nIn late 2006, Walter created the Central Texas Bee Rescue and personally opened his own property to the bees of local citizens seeking an eco-friendly solution to their unwanted honey bee infestation or swarm issues. Since Colony Collapse Disorder (CCD) had not been diagnosed by that time, there were still many people baffled at why someone, such as Walter, would get in a bee suit in 110 index heat during the summer just to save some pesky wild bees. Y",
            "ein": "463744257",
            "name": "American Honey Bee Protection Agency",
            "profileUrl": "https://www.every.org/ahbpa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/hqnjng1svslz7bevfrx0",
            "logoCloudinaryId": "faja_profile/hqnjng1svslz7bevfrx0",
            "matchedTerms": []
        },
        {
            "description": "East Africa's pioneer endangered species sanctuary. Award-winning catalyst & model for conservation. UNESCO World Heritage Site. . Lewa serves as a safe refuge for the critically endangered black rhino and the endangered Grevy’s zebra, as well as the elephant, lion, giraffe, wild dog and other iconic wildlife species in Kenya. The Conservancy is also home to more than 400 species of birds.\n\nLewa envisions a future where people across Kenya value, protect and benefit from wildlife. This future depends on communities being able to derive their day-to-day livelihoods in ways that are compatible with thriving wildlife habitat. As a result, Lewa invests heavily in the livelihoods of its neighbours through programmes in education, healthcare, water, micro-enterprise, youth empowerment and more.\n\nLewa has combined the techniques of world-class anti-poaching operations, including cutting edge monitoring technology, with the engagement of the surrounding communities as critical partners in con",
            "ein": "870572187",
            "name": "Lewa Wildlife Conservancy",
            "profileUrl": "https://www.every.org/lewa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/rgim618wfr7z8kmzcmum",
            "logoCloudinaryId": "faja_profile/rgim618wfr7z8kmzcmum",
            "matchedTerms": []
        },
        {
            "description": "We are dedicated to improving the welfare of factory farm animals in Illinois and beyond.. Crate Free Illinois is dedicated to reducing the suffering of animals on factory farms. Our approach includes consumer activism, retail campaigns, and public policy advocacy.\n\nThrough our efforts we aim to: create awareness of the extreme and inhumane confinement of food animals on factory farms; educate consumers on how to remove meat from their diet or reduce the meat they consume and know where to purchase factory-free meat, dairy and eggs; and advocate for legislation to eliminate extreme confinement practices",
            "ein": "473161083",
            "name": "Crate Free Illinois",
            "profileUrl": "https://www.every.org/cratefreeusa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/uqsaisxrdz5j1c6ijyq2",
            "logoCloudinaryId": "profile_pics/uqsaisxrdz5j1c6ijyq2",
            "matchedTerms": []
        },
        {
            "description": "SOS is a registered Non Profit Charity in India, USA and UK.. All of us have one life, and it’s not very long. In the short period that we have, each one of us must make a difference! All along, mankind has exploited wildlife, forests and natural resources in the name of development and growth. It’s now time for us to give something back to nature. Our motto is “Give Back To Nature”. With your support we can help wildlife in the fight for survival.",
            "ein": "203274638",
            "name": "Wildlife S.O.S",
            "profileUrl": "https://www.every.org/wildlifesos",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/dog8gkcvlhmjflsrujjl",
            "logoCloudinaryId": "faja_profile/dog8gkcvlhmjflsrujjl",
            "matchedTerms": []
        },
        {
            "description": "WCS saves wildlife and wild places worldwide through science, conservation action, education, and inspiring people to value nature.. The Wildlife Conservation Society saves wildlife and wild places worldwide. We do so through science, global conservation, education and the management of the world's largest system of urban wildlife parks, led by the flagship Bronx Zoo. Together these activities change attitudes towards nature and help people imagine wildlife and humans living in harmony. WCS is committed to this mission because it is essential to the integrity of life on Earth.",
            "ein": "131740011",
            "name": "Wildlife Conservation Society",
            "profileUrl": "https://www.every.org/wcs",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/jguylapnthc9leugh7qc",
            "logoCloudinaryId": "faja_profile/jguylapnthc9leugh7qc",
            "matchedTerms": []
        },
        {
            "description": "Chimpanzee Sanctuary Northwest is all about second chances for deserving chimpanzees.  Follow our daily blog! ChimpsNW.org. Chimpanzee Sanctuary Northwest provides lifetime quality care for chimpanzees and works to educate the public about the plight of primates worldwide. The sanctuary is located on 90 acres of  farm and forested land in the Cascade mountains, 90 miles east of Seattle. CSNW is one of only a handful of sanctuaries in the country that cares for chimpanzees.\n\nThe organization was founded in 2003 to provide sanctuary for chimpanzees discarded from the entertainment and biomedical testing industries. On June 13, 2008, Annie, Burrito, Foxie, Jamie, Jody, Missy, and Negra arrived from a private biomedical facility in Pennsylvania. Some of the chimpanzees were kept as pets and used in entertainment when they were young. Some of them were captured in Africa as infants. All of them were used by the biomedical research industry to test hepatitis vaccines. Most of the females we",
            "ein": "680552915",
            "name": "Chimpanzee Sanctuary Northwest",
            "profileUrl": "https://www.every.org/chimpsnw",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ziyuutxvlfrx6pmu1bgk",
            "logoCloudinaryId": "faja_profile/ziyuutxvlfrx6pmu1bgk",
            "matchedTerms": []
        }
    ],
    "women-led": [
        {
            "description": "The Fungi Foundation is a global organization that works for the Fungi, their habitats, and the people who depend on them.. Launched in 2012, the Fungi Foundation is the first NGO dedicated to the fungi kingdom. Since its inception, it has achieved numerous milestones while dedicating itself to exploring the fungi world in view of increasing knowledge of their diversity, educating about their applications, and recommending public policy for their conservation. As part of our ongoing 3F initiative, the foundation played a key role in enabling Chile to become the first country in the world to include protection of fungi in its environmental legislation. More recently, the foundation proudly announced the Fantastic Fungi Education Curriculum, the world's first mycological set of courses designed for schools.\n\nIn short, the Fungi Foundation envisions a healthy planet in which Fungi are recognized, protected, and embraced as the interconnectors of nature; a mission that would be impossible",
            "ein": "851478153",
            "name": "Fungi Foundation",
            "profileUrl": "https://www.every.org/ffungi",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/wq14eif08jx3kka2ixau",
            "logoCloudinaryId": "profile_pics/wq14eif08jx3kka2ixau",
            "matchedTerms": []
        },
        {
            "description": "Hoop For All is a 501(c)3 nonprofit that uses sports to create health awareness and financially aid patients during treatment.. Our five health focuses are cancer, cardiovascular disease, diabetes, mental health, and HIV/aids. We create awareness by executing sporting events that provide resources on prevention, diagnosis, and treatment. Our events also serve as a platform to financially aid affected patients during the treatment and recovery process. In 2018, we launched the Hoop For All Ambassador Program to train and mentor students interested in careers within the sports, health, and entertainment industry.",
            "ein": "812658409",
            "name": "Hoop For All Foundation",
            "profileUrl": "https://www.every.org/hoopforall",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/b8ua3o4lag20cs6phnpa",
            "logoCloudinaryId": "profile_pics/b8ua3o4lag20cs6phnpa",
            "matchedTerms": []
        },
        {
            "description": "Empowering young women of color ages 7-17 to embrace the current tech marketplace as builders + creators.. Black Girls CODE is devoted to showing the world that black girls can code, and do so much more. By reaching out to the community through workshops and after school programs, Black Girls CODE introduces computer coding lessons to young girls from underrepresented communities in programming languages such as Scratch or Ruby on Rails. Black Girls CODE has set out to prove to the world that girls of every color have the skills to become the programmers of tomorrow. By promoting classes and programs we hope to grow the number of women of color working in technology and give underprivileged girls a chance to become the masters of their technological worlds. Black Girls CODE's ultimate goal is to provide African-American youth with the skills to occupy some of the 1.4 million computing job openings expected to be available in the U.S. by 2020, and to train 1 million girls by 2040.",
            "ein": "454930539",
            "name": "Black Girls CODE",
            "profileUrl": "https://www.every.org/blackgirlscode",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_cover/bgc_i9r95m",
            "logoCloudinaryId": "faja_cover/bgc_i9r95m",
            "matchedTerms": []
        },
        {
            "description": "We use cash transfers to increase immunization rates in Nigeria.. Childhood vaccines prevent an estimated 2 to 3 million deaths every year. They are recognized as one of the most cost-effective child health interventions in low-income countries. Yet, an estimated 19.4 million infants around the world did not receive routine vaccinations in 2018. In Nigeria, 40% of under-five deaths are from vaccine-preventable diseases – low immunisation rates are a significant contributor to its high under-five mortality rate (120 deaths per 1,000 live births). North West Nigeria, where the program operates, is the region with the lowest vaccination coverage in Nigeria.\n\nSee RCT findings here: https://www.newincentives.org/evidence",
            "ein": "452368993",
            "name": "New Incentives",
            "profileUrl": "https://www.every.org/newincentives",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/newnvy0rlvxdz3yx300o",
            "logoCloudinaryId": "profile_pics/newnvy0rlvxdz3yx300o",
            "matchedTerms": []
        },
        {
            "description": "Water + Education + Business/Income + Safe Shelter = Building Self Reliant Communities, One Family, One Village at a time . . .. Our latest business initiative in Kenya is Beehives. We have started two apiaries with 25 hives each in two separate villages. The beehives are a long term investment that we expect to pay big dividends in self reliance for these communities. A purchase of 25 Beehives is about a $4000 investment. We received a generous donation from a donor who wishes to remain anonymous. Would you like to be part of the next 25 hives to start another village on the road to self reliance? Make a donation and designate Beehives in your comments. \n\nThe home for Meleon and her children has been completed and on March 27, 2021 her home was blessed by the local minister. Meleon is very grateful for this blessing of a new home made possible for her and her children through your generous donations. Thank You!\n\n\nGabriel, Caroline and Emmanuel, 3 of our students live with their widow",
            "ein": "844844337",
            "name": "No End To Love Inc.",
            "profileUrl": "https://www.every.org/noendtolove",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/hikg4efvagohajiwodth",
            "logoCloudinaryId": "profile_pics/hikg4efvagohajiwodth",
            "matchedTerms": []
        },
        {
            "description": "Focused on the engagement, education and empowerment of girls and women.. Girls in Tech (GIT) is a global non-profit focused on the engagement, education and empowerment of girls and women who are passionate about technology. Our aim is to accelerate the growth of innovative women who are entering into the high-tech industry and building successful startups.",
            "ein": "454106759",
            "name": "Girls in Tech",
            "profileUrl": "https://www.every.org/girlsintech",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/j66vpwl6dvlp5yzv8yyb",
            "logoCloudinaryId": "profile_pics/j66vpwl6dvlp5yzv8yyb",
            "matchedTerms": []
        },
        {
            "description": "We develop public safety solutions for the District of Columbia that are evidence-driven, community-rooted, and racially just.. DC Justice Lab is a team of law and policy experts researching, organizing, and advocating for large-scale changes to the District’s criminal legal system. \n\nDC Justice Lab envisions a District that:\n- Treats every person as an essential part of our community and no longer subjugates, dehumanizes, or jettisons people who have broken the law.\n- Recognizes that it has historically underserved and overpoliced poor people and Black people, creating and subjugating an undercaste that is system-involved.\n- Takes dramatic measures to rectify and reverse the harm it inflicted.\n- Constantly reexamines its rules and practices to ensure they are calibrated to make us collectively safer, freer, and equal. \n- Ends its reliance on police, prosecutors, and prisons, in favor of solutions that maximize safety and freedom for all.\n- Ensures its criminal legal system cannot be",
            "ein": "843479025",
            "name": "DC Justice Lab",
            "profileUrl": "https://www.every.org/dcjusticelab",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ym8o1ybhgjudrdunez27",
            "logoCloudinaryId": "profile_pics/ym8o1ybhgjudrdunez27",
            "matchedTerms": []
        },
        {
            "description": "We’re America’s most trusted provider of reproductive health care.. The mission of Planned Parenthood is to provide comprehensive reproductive and complementary health care services in settings that preserve and protect the essential privacy and rights of each individual, to advocate public policies that guarantee these rights and ensure access to such services, to provide educational programs that enhance understanding of individual and societal implications of human sexuality, to promote research and the advancement of technology in reproductive health care and encourage understanding of their inherent bioethical, behavioral, and social implications.\n\nFounded in 1916, Planned Parenthood is a trusted health care provider, educator, and passionate advocate here in the U.S. as well as a strong partner to health and rights organizations around the world. Each year, Planned Parenthood delivers vital sexual and reproductive health care, sex education, and information to millions of people",
            "ein": "131644147",
            "name": "Planned Parenthood",
            "profileUrl": "https://www.every.org/plannedparenthood",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ozgwfkleoyvzjxfapnnx",
            "logoCloudinaryId": "profile_pics/ozgwfkleoyvzjxfapnnx",
            "matchedTerms": []
        },
        {
            "description": "Working for a world where all girls can learn and lead without fear.. With more than 130 million girls out of school today, here’s how we’re breaking down barriers that hold girls back.\n\nThrough our Education Champion Network, we invest in local educators and advocates — the people who best understand girls in their communities — in regions where the most girls are missing out on secondary school.\n\nWe advocate — at local, national and international levels — for resources and policy changes needed to give all girls a secondary education. The girls we serve have high goals for themselves — and we have high expectations for leaders who can help them.\n\nWe believe girls should speak for themselves and tell leaders what they need to learn and achieve their potential. We amplify girls’ voices and share their stories through Assembly, our digital publication and newsletter.",
            "ein": "811397590",
            "name": "Malala Fund",
            "profileUrl": "https://www.every.org/malala",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/sctah8ythklwo1am29ns",
            "logoCloudinaryId": "faja_profile/sctah8ythklwo1am29ns",
            "matchedTerms": []
        },
        {
            "description": "UN & civil society partnership supporting women working to build peace & respond to crises on the frontlines.. The Women’s Peace & Humanitarian Fund is an innovative partnership empowering local women to be a force for crisis response and lasting peace.\n\nWe galvanize support from across the globe to support the efforts of women working on the frontlines of the world’s most intractable conflicts. \n\nHumanitarian crises and threats to peace are more common than ever before. Studies show that when women are empowered to meaningfully participate in conflict resolution, it undeniably results in more lasting peace. \n\nWomen’s inclusion in peace processes makes humanitarian assistance more effective, strengthens the efforts of peacekeepers, prevents radicalization and the spread of extremism, and accelerates the economic recovery of conflict-affected communities.\n\nDonate today to support the women's vital work to prevent conflict, respond to crises, and accelerate peace in their communities.",
            "name": "Women's Peace & Humanitarian Fund",
            "profileUrl": "https://www.every.org/wphfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/nonakqqaxoboo6gzeqoh",
            "logoCloudinaryId": "profile_pics/nonakqqaxoboo6gzeqoh",
            "matchedTerms": []
        }
    ],
    "womens-health": [
        {
            "description": "The Multidisciplinary Association for Psychedelic Studies supports psychedelic and cannabis research, education and policy reform.. Founded in 1986, the Multidisciplinary Association for Psychedelic Studies (MAPS) is a visionary 501(c)(3) non-profit organization ushering the safe and ethical use of psychedelics as tools for healing and growth on individual, familial, societal, and planetary levels.\n\nMAPS’ top priority is ethically introducing global access to MDMA-assisted therapy as a treatment for posttraumatic stress disorder (PTSD) through regulatory approvals and training certification for therapy providers, as well as public education, policy reform, and building community support networks.\n\nHow Your Donation Will Help\n\nWhile the MDMA drug development program is the main priority of MAPS, the organization's programs include research into other psychedelic compounds and provide critical resources for researchers around the world interested in studying psychedelics. These resource",
            "ein": "592751953",
            "name": "MAPS",
            "profileUrl": "https://www.every.org/maps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/o7qkdrwh9jsjwv3inrph",
            "logoCloudinaryId": "profile_pics/o7qkdrwh9jsjwv3inrph",
            "matchedTerms": []
        },
        {
            "description": "We help people in crisis by providing emergency health services, and then promote self-reliance through training.. We are a global humanitarian organization dedicated to saving lives and relieving suffering. Established in 1984 by volunteer doctors and nurses, we are a nonprofit with no political or religious affiliation, and now have more than 7,500 staff members around the world, more than 97% of whom are local. Our mission is to improve the quality of life through health interventions and related activities that strengthen underserved communities worldwide. With the flexibility to respond rapidly to emergencies, we offer medical services and training to people at the highest risk, always working to strengthen local healthcare systems and promote self-reliance.",
            "ein": "953949646",
            "name": "International Medical Corps",
            "profileUrl": "https://www.every.org/international-medical-corps",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/zwxuhjjxmrayjwbfceg9",
            "logoCloudinaryId": "faja_profile/zwxuhjjxmrayjwbfceg9",
            "matchedTerms": []
        },
        {
            "description": "We’re America’s most trusted provider of reproductive health care.. The mission of Planned Parenthood is to provide comprehensive reproductive and complementary health care services in settings that preserve and protect the essential privacy and rights of each individual, to advocate public policies that guarantee these rights and ensure access to such services, to provide educational programs that enhance understanding of individual and societal implications of human sexuality, to promote research and the advancement of technology in reproductive health care and encourage understanding of their inherent bioethical, behavioral, and social implications.\n\nFounded in 1916, Planned Parenthood is a trusted health care provider, educator, and passionate advocate here in the U.S. as well as a strong partner to health and rights organizations around the world. Each year, Planned Parenthood delivers vital sexual and reproductive health care, sex education, and information to millions of people",
            "ein": "131644147",
            "name": "Planned Parenthood",
            "profileUrl": "https://www.every.org/plannedparenthood",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ozgwfkleoyvzjxfapnnx",
            "logoCloudinaryId": "profile_pics/ozgwfkleoyvzjxfapnnx",
            "matchedTerms": []
        },
        {
            "description": "UN & civil society partnership supporting women working to build peace & respond to crises on the frontlines.. The Women’s Peace & Humanitarian Fund is an innovative partnership empowering local women to be a force for crisis response and lasting peace.\n\nWe galvanize support from across the globe to support the efforts of women working on the frontlines of the world’s most intractable conflicts. \n\nHumanitarian crises and threats to peace are more common than ever before. Studies show that when women are empowered to meaningfully participate in conflict resolution, it undeniably results in more lasting peace. \n\nWomen’s inclusion in peace processes makes humanitarian assistance more effective, strengthens the efforts of peacekeepers, prevents radicalization and the spread of extremism, and accelerates the economic recovery of conflict-affected communities.\n\nDonate today to support the women's vital work to prevent conflict, respond to crises, and accelerate peace in their communities.",
            "name": "Women's Peace & Humanitarian Fund",
            "profileUrl": "https://www.every.org/wphfund",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/nonakqqaxoboo6gzeqoh",
            "logoCloudinaryId": "profile_pics/nonakqqaxoboo6gzeqoh",
            "matchedTerms": []
        },
        {
            "description": "The largest health movement for Black women.. GirlTrek, the largest public health nonprofit for African-American women and girls in the United States. With nearly 100,000 neighborhood walkers, GirlTrek encourages women to use walking as a practical first step to inspire healthy living, families, and communities. As women organize walking teams, they mobilize community members to support monthly advocacy efforts and lead a civil rights-inspired health movement.\n\nBeyond walking, GirlTrek’s active members support local and national policy to increase physical activity through walking, improve access to safe places to walk, protect and reclaim green spaces, and improve the walkability and built environments of 50 high-need communities across the United States.\n\nWith Partnership for a Healthier America, The Centers for Disease Control, Stanford Prevention Research Center, The American Council on Exercise, Safe Routes to School National Partnership, and The Sierra Club, GirlTrek has develop",
            "ein": "061811886",
            "name": "GirlTrek: Healthy Black Women and Girls",
            "profileUrl": "https://www.every.org/girltrek",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/m733uyhzdyvslyfsaqcs",
            "logoCloudinaryId": "profile_pics/m733uyhzdyvslyfsaqcs",
            "matchedTerms": []
        },
        {
            "description": "Support So They Can to ensure that no girl is left behind. To receive a tax receipt for NZ or AU, please donate via sotheycan.org. Every child deserves access to education. It is a basic human right. Yet in Sub-Saharan Africa, over one fifth of primary school aged children are not in school. That’s just not right. \n\nSo They Can is an international NGO on a mission to change this. They work with vulnerable communities and their governments in Kenya and Tanzania to educate and empower children, so they can break the poverty cycle, realise their own potential and meet their own needs. \n\nOver a 7-10 year development cycle, So They Can works closely with a community to understand their needs and implement projects that will best support them. Throughout the cycle, they develop relationships and ensure transfer of knowledge and management skills to these communities to ensure sustainability of the programs. This enables them to eventually shift to a governance role so we can expand our focu",
            "ein": "471079440",
            "name": "So They Can",
            "profileUrl": "https://www.every.org/so-they-can",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ooqkj5vh19i058jrbmzg",
            "logoCloudinaryId": "profile_pics/ooqkj5vh19i058jrbmzg",
            "matchedTerms": []
        },
        {
            "description": "We empower women to eclipse poverty and inequality.  We support Sustainable Development Goals: Quality Education&Gender Equality.. Our mission is to stop violence against women, and empower underprivileged women to rise above poverty and inequality through encouragement, basic education, and vocational skills training.  \n\nWe are aligned and committed to U.N. Sustainable Development Goals (SDGs):\n#4 Quality Education \n#5 Gender Equality\n\nInvesting in girls' education is one of the most effective ways to reduce poverty.  Investments in secondary school education for girls yields especially high dividends.  Girls who have been educated are likely to marry later and to have smaller and healthier families. Educated women can recognize the importance of health care and know how to seek it for themselves and their children. Education helps girls and women to know their rights and to gain confidence to claim them.\n\nWe do this by helping girls stay in school, and complete secondary education.",
            "ein": "454708552",
            "name": "Educate & Empower Girls",
            "profileUrl": "https://www.every.org/s-c-foundation",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/gachyoepwa2cchcklvkx",
            "logoCloudinaryId": "faja_profile/gachyoepwa2cchcklvkx",
            "matchedTerms": []
        },
        {
            "description": "\"Providing relief and recovery in the wake of major disasters, traumatic events and social injustice.\" -AWB. Acupuncturists Without Borders (AWB) provides immediate disaster relief and recovery to communities that are in crisis resulting from disaster or human conflict. AWB is committed to creating alliances with local community based organizations and treating all who have been affected - survivors, first responders, emergency personnel and other care providers.  AWB uses community-style acupuncture to provide caring, compassionate treatment in a group setting. This model of treatment allows everyone treated to experience relief from stress and trauma together. When the entire group feels calm and quiet, hope, determination and resilience rises powerfully within it.",
            "ein": "542190889",
            "name": "Acupuncturists Without Borders",
            "profileUrl": "https://www.every.org/acuwithoutborders",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/nzcszgppsapamjdwpmxh",
            "logoCloudinaryId": "profile_pics/nzcszgppsapamjdwpmxh",
            "matchedTerms": []
        },
        {
            "description": "We give small mills everything they need to add vital nutrients into the food that millions of malnourished people eat the most.. Sanku combats hidden hunger and saves lives by giving small mills the tools needed to fortify maize flour, an East African staple. Our mission: Guarantee that every meal consumed by every mother & child contains vital nutrients, forever. \n\nWorldwide, 8,000 children die every day and 2 billion suffer from preventable illness because their diets lack basic vitamins and minerals. Fortification (adding life-saving micronutrients to processed foods) is the most cost-effective nutrition intervention, but it has failed to reach the 6.5 billion people in developing countries who rely on small, often rural, mills for most of their food.\n\nSanku developed a technology and business model to enable the small mills that feed the most malnourished people to conveniently and affordably fortify staple grains. Our technology adds precise levels of nutrients into flour during",
            "ein": "830396815",
            "name": "Project Healthy Children",
            "profileUrl": "https://www.every.org/project-healthy-children",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/y517sbeq4qehkksjclsw",
            "logoCloudinaryId": "profile_pics/y517sbeq4qehkksjclsw",
            "matchedTerms": []
        },
        {
            "description": "We empower patients of color with the knowledge and trust to pursue clinical trials that can save or extend their lives.\n.",
            "name": "Karen's Club",
            "profileUrl": "https://www.every.org/karensclub",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/rykiguqpbftxzqzk8dp2",
            "logoCloudinaryId": "profile_pics/rykiguqpbftxzqzk8dp2",
            "matchedTerms": []
        }
    ],
    "youth": [
        {
            "description": "Giving children in the U.S. and around the world a healthy start in life, the opportunity to learn and protection from harm.. Save the Children believes every child deserves a future. Since our founding more than 100 years ago, we’ve changed the lives of more than 1 billion children. In the United States and around the world, we give children a healthy start in life, the opportunity to learn and protection from harm. We do whatever it takes for children – every day and in times of crisis – transforming their lives and the future we share.",
            "ein": "060726487",
            "name": "Save the Children",
            "profileUrl": "https://www.every.org/savethechildren",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/xugvznpbojeysnwzgyrx",
            "logoCloudinaryId": "profile_pics/xugvznpbojeysnwzgyrx",
            "matchedTerms": []
        },
        {
            "description": "Empowering young women of color ages 7-17 to embrace the current tech marketplace as builders + creators.. Black Girls CODE is devoted to showing the world that black girls can code, and do so much more. By reaching out to the community through workshops and after school programs, Black Girls CODE introduces computer coding lessons to young girls from underrepresented communities in programming languages such as Scratch or Ruby on Rails. Black Girls CODE has set out to prove to the world that girls of every color have the skills to become the programmers of tomorrow. By promoting classes and programs we hope to grow the number of women of color working in technology and give underprivileged girls a chance to become the masters of their technological worlds. Black Girls CODE's ultimate goal is to provide African-American youth with the skills to occupy some of the 1.4 million computing job openings expected to be available in the U.S. by 2020, and to train 1 million girls by 2040.",
            "ein": "454930539",
            "name": "Black Girls CODE",
            "profileUrl": "https://www.every.org/blackgirlscode",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_cover/bgc_i9r95m",
            "logoCloudinaryId": "faja_cover/bgc_i9r95m",
            "matchedTerms": []
        },
        {
            "description": "As conflict escalates in Ukraine, UNICEF is on the ground reaching children with water, health and education services.. UNICEF has saved more children's lives than any of the international children’s charities. Other organizations help children, but UNICEF does more by fighting for children’s rights and delivering the essentials every child needs for an equitable chance in life.",
            "ein": "131760110",
            "name": "UNICEF USA",
            "profileUrl": "https://www.every.org/unicef-usa",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/uni_zwi2qg",
            "logoCloudinaryId": "uni_zwi2qg",
            "matchedTerms": []
        },
        {
            "description": "SIPA enriches and empowers generations of Pilipino Americans and others in Historic Filipinotown and throughout Los Angeles.. SIPA is a 501(c)3 nonprofit organization serving Historic Filipinotown and other neighborhoods throughout Greater Los Angeles County. SIPA produces programs for youth and families including case management and counseling, after school programs, senior programs, small business development, cultural enrichment, and affordable housing.",
            "ein": "952879339",
            "name": "Search To Involve Pilipino Americans",
            "profileUrl": "https://www.every.org/sipacares",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/m4oe7clznkvtilq7he78",
            "logoCloudinaryId": "profile_pics/m4oe7clznkvtilq7he78",
            "matchedTerms": []
        },
        {
            "description": "YTB is Youth TimeBanking: Youth-Adult partnership of giving & receiving opportunities to support community & build strengths.. Definition: Youth TimeBanking is a community service practice for supporting youth to increase awareness of community organizations and expand their network of social supports.  YTB is experiential learning in the interests of building community connections.  YTB also introduces youth to principles of co-production and servant leadership.  When youth are involved with community they strengthen their connections to their community and learn about Civic Engagement.  As youth continue with YTB they experience co-production -- a model in which each person contributes to the plan, process, practice, and outcome.\n\nVision: YTB's Vision is that all youth transition to adulthood with the experience of demonstrating responsibility for service with others and connections to their community.  YTB is a system of service exchange that leverages the talents, capabilities, an",
            "ein": "843685123",
            "name": "YTBRN.org Youth TimeBanking",
            "profileUrl": "https://www.every.org/ytbrn",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/v6bwcispxn7rcijxar0u",
            "logoCloudinaryId": "profile_pics/v6bwcispxn7rcijxar0u",
            "matchedTerms": []
        },
        {
            "description": "Our mission is to provide quality college mentorship for all. . About Us.\nFor Students. By Students.\n\nAs recent graduates, we've gone through the challenge of juggling AP classes, standardized testing, college applications, financial aid, and searching for scholarships - all within the same semester. It can be tough, especially if you don't have anyone to help you. That's where we come in.\n\n\nWe started Take on College in 2019 because we noticed the lack of mentorship resources available for those who would become first-generation college students. The average college counselor can cost upwards of $100 per meeting - and as college students who can't afford that, we want to help.\n\n \n\nThrough Take on College, we provide an accessible program for students to learn from others who have just gone through the same process. Each one of our mentors has experience in mentoring and college essay editing. Enjoy our services; learn about our take on essays, resumes, cover letters, and more!",
            "ein": "851528191",
            "name": "Take on College",
            "profileUrl": "https://www.every.org/take-on-college",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/yieljmdaxb0c3dvtr4wl",
            "logoCloudinaryId": "profile_pics/yieljmdaxb0c3dvtr4wl",
            "matchedTerms": []
        },
        {
            "description": "We educate, empower, and support families and communities to better understand and care for the mental health of our youth.. In these extremely unsettling times, it is more important than ever to do all we can to support the mental health of our youth. The impact of the pandemic on the mental health of our young people has led to a very serious public health crisis. As our youth are struggling with unprecedented uncertainty and isolation, their parents have had to become mental health counselors, as well as teachers and caregivers. Studies are already showing that the rates of adverse mental health conditions are on the rise, particularly among young adults and caregivers. \n\nWhen people are as aware of their mental health as their physical health, that knowledge translates into more caring communities overall, and empowers individuals in the community to look out for each other by being able to provide community and regional resources, as well as valuable peer support. Our educational",
            "ein": "812079516",
            "name": "The Youth Mental Health Project",
            "profileUrl": "https://www.every.org/ymhproject",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/gfg80mdwtbnme3jooxp0",
            "logoCloudinaryId": "faja_profile/gfg80mdwtbnme3jooxp0",
            "matchedTerms": []
        },
        {
            "description": "Works to educate, inspire, and equip young women with the skills and resources to pursue academic and career opportunities in computing fields.. Girls Who Code is a national nonprofit working to close the gender gap in the technology sector. Its programs work to educate, inspire, and equip high school girls with the skills and resources to pursue opportunities in computing fields.",
            "ein": "300728021",
            "name": "Girls Who Code",
            "profileUrl": "https://www.every.org/girls-who-code",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/eztdbrvc566cl5usw80a",
            "logoCloudinaryId": "faja_profile/eztdbrvc566cl5usw80a",
            "matchedTerms": []
        },
        {
            "description": "To catalyze a nationwide movement of impact-driven leaders expanding educational opportunity to all children in Armenia.. Our movement to end educational inequity is like the kochari. Communities across Armenia have their own special dances, yet each kochari shares similar movements. Each kochari emphasizes the importance of building community by moving together in unison. With hands linked, we move together to signify that we are united in our cultural heritage. Similarly, Teach For Armenia’s kochari is a collection of unifying concepts that help to synchronize our collective movement. In short, our efforts across Armenia and Artsakh ought to reflect the uniqueness of each community while revolving around a shared vision.",
            "ein": "472833171",
            "name": "Friends of Teach For Armenia",
            "profileUrl": "https://www.every.org/teach-for-armenia",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/yqk1tcmutdwfft2bscaq",
            "logoCloudinaryId": "faja_profile/yqk1tcmutdwfft2bscaq",
            "matchedTerms": []
        },
        {
            "description": "Our mission is to improve the lives of children diagnosed with cancer in Armenia.. City of Smile, USA's mission is to improve the lives of children diagnosed with cancer in Armenia by raising awareness and funds to provide life-saving treatments as well as emotional, nutritional and psychological support for affected children and their families.",
            "ein": "833226265",
            "name": "City Of Smile - USA",
            "profileUrl": "https://www.every.org/cityofsmile",
            "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/ewiaamxje0lnh5iudwpb",
            "logoCloudinaryId": "profile_pics/ewiaamxje0lnh5iudwpb",
            "matchedTerms": []
        }
    ]
}
  return {
    props: {
      charities,
    },
  };
}