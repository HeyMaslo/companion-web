import {
  BabeApp,
  CareerApp,
  CareerIcon,
  CheckinIcon,
  ClinicalIcon,
  CompanionKitApp,
  CompanionKitIcon,
  CompanionKitOrb,
  CompanionServerIcon,
  CompanionServerInfoGraphic,
  DeeApp,
  EducationIcon,
  EvaApp,
  ObservingIcon,
  ResilienseIcon,
  ServerIcon,
  SignalIcon,
  TaggingIcon,
  ToosIcon,
  UseCasesDashboard,
  CompanionWebIcon,
  EvaOrb,
  SigbeeOrb,
  CareerCompanionOrb,
  StellaOrb,
  OptiOrb,
  MaslolandIcon,
  MasloPlatformIcon,
  TimeIcon,
  NewsIcon,
  omIcon,
  ArtMachineIcon,
  ProphetIcon,
  OrageIcon,
  theprojectofthecenturyIcon,
  SequencerIcon,
  HyperObjectWebIcon,
  PaiperIcon,
  PaiperOrb,
  TheAvatarIcon,
  Masloland,
  MasloPlatform,
  Time,
  News,
  om,
  ArtMachine,
  Prophet,
  Orage,
  theprojectofthecentury,
  Sequencer,
  HyperObjectWeb,
  Paiper,
  TheAvatar,
  CANBINDOrb,
  EmilyOrb,
  ResearchPaperIcon,
  BabeOrb,
  HealthOrb,
  BabeMainIcon,
  BabeGraphic,
  CanBindGraphic,
  EvaMainIcon,
  EvaGtaphic,
  EmilyMainIcon,
  EmilyGraphic,
  SigbeeMainIcon,
  SigbeeGraphic,
  OptiMainIcon,
  OptiGraphic,
  StellaMainIcon,
  StellaGraphic,
  CareerMainIcon,
  CareerGraphic,
  CanBindMainIcon,
  PaiperMainIcon,
  PaiperGraphic,
  HealthMainIcon,
  HealthGraphic,
} from '../config/images';

export const infoModules = {
  openSource: {
    title: 'Open Source',
    subtitle: 'Maslo is Open source',
    bio: (
      <p className="main-content-wrapper">
        <p>
          The open-sourced toolkits enable product developers to create
          solutions based on the analysis of data from various sources to
          encourage new and sustained behavior changes in their core audiences.
        </p>
        <p>
          In addition, Maslo's open source tools will give business and
          developers access to entirely new possibilities.
        </p>
      </p>
    ),
    button: {
      title: 'more on github',
      action: {
        type: 'url',
        path: 'https://github.com/HeyMaslo',
      },
    },
    options: [
      {
        title: 'Companion Kit',
        icon: CompanionKitIcon,
        action: 'pages',
        page: 'companionkit',
      },
      {
        title: 'Companion Server',
        icon: CompanionServerIcon,
        action: 'pages',
        page: 'companionserver',
      },
    ],
    companionkit: {
      title: 'Open Source',
      subtitle: 'Companion Kit',
      icon: CompanionKitOrb,
      bio: (
        <p className="main-content-wrapper">
          <p>
            With Companion Kit, businesses and researchers can easily release
            customized companion apps on iOS and Android, making it possible for
            any company to quickly deliver a Companion for their use case.
          </p>
          <p>
            The Companion Kit also includes an optional web dashboard for
            administrators to get deeper insights into the signals users are
            expressing.
          </p>
        </p>
      ),
      button: {
        title: 'Check it on GitHub',
        action: {
          type: 'url',
          path: 'https://github.com/HeyMaslo/companion-kit',
        },
      },
      sections: [
        {
          type: 'standard',
          title: 'A Companion For Every Aspect Of Life',
          contentDirection: 'row',
          image: '',
          bg: 'dark',
          items: [
            {
              type: 'image',
              alt: 'Companion-kit',
              bottonTitle: 'Companion-kit',
              bottomTitleClass: 'light',
              image: CompanionKitApp,
              class: 'column',
              imgClass: 'full-heigth',
            },
            {
              type: 'image',
              alt: 'Coaching',
              bottonTitle: 'Coaching',
              image: EvaApp,
              bottomTitleClass: 'light',
              class: 'column',
              imgClass: 'full-heigth',
            },
            {
              type: 'image',
              alt: 'Careers',
              bottonTitle: 'Careers',
              image: CareerApp,
              bottomTitleClass: 'light',
              class: 'column',
              imgClass: 'full-heigth',
            },
            {
              type: 'image',
              alt: 'Behavioral Health',
              bottonTitle: 'Behavioral Health',
              image: BabeApp,
              bottomTitleClass: 'light',
              class: 'column',
              imgClass: 'full-heigth',
            },
            {
              type: 'image',
              alt: 'Healthcare',
              bottonTitle: 'Healthcare',
              bottomTitleClass: 'light',
              image: DeeApp,
              class: 'column',
              imgClass: 'full-heigth',
            },
          ],
        },
        {
          type: 'horizontal_title',
          title: 'Use Cases',
          contentDirection: 'column',
          bg: 'light',
          items: [
            {
              type: 'image',
              class: 'row',
              alt: `Check-in companion for therapists and their clients`,
              bottonTitle:
                'Check-in companion for therapists and their clients',
              image: CheckinIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Resilience building companion for coaches and their clients`,
              bottonTitle:
                'Resilience building companion for coaches and their clients',
              image: ResilienseIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Clinical trials companion for researchers and their participants`,
              bottonTitle:
                'Clinical trials companion for researchers and their participants',
              image: ClinicalIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Education companion for self-guided and directed personalized learning`,
              bottonTitle:
                'Education companion for self-guided and directed personalized learning',
              image: EducationIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Career companion for finding jobs and building skills`,
              bottonTitle:
                'Career companion for finding jobs and building skills',
              image: CareerIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
          ],
        },
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: UseCasesDashboard,
          items: [],
        },
      ],
    },
    companionserver: {
      title: 'Open Source',
      subtitle: 'Companion Server',
      icon: CompanionKitOrb,
      bio: (
        <p className="main-content-wrapper">
          <p>
            Maslo Companion Server is a self contained signal processing and
            machine learning server deployable to major cloud providers and
            private data centers or to your local computer.
          </p>
          <p>
            With Companion Server, developers are able to pass in unstructured
            signals for the machine to observe. The server then returns insights
            about human interactions that can be incorporated into enhanced
            products.
          </p>
        </p>
      ),
      button: {
        title: 'Check it on GitHub',
        action: {
          type: 'url',
          path: 'https://github.com/HeyMaslo/companionserver',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: CompanionServerInfoGraphic,
          items: [],
        },
        {
          type: 'horizontal_title',
          title: 'Use Cases',
          contentDirection: 'column',
          bg: 'light',
          items: [
            {
              type: 'image',
              class: 'row',
              alt: `Providing signal processing for use by Companion Kit and other empathetic surfaces`,
              bottonTitle: `Providing signal processing for use by Companion Kit and other empathetic surfaces`,
              image: SignalIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Observing and understanding human context in analyzed data`,
              bottonTitle: `Observing and understanding human context in analyzed data`,
              image: ObservingIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Server-side prototyping prior to edge-deployed models`,
              bottonTitle: `Server-side prototyping prior to edge-deployed models`,
              image: ServerIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Tagging large corpus of existing content`,
              bottonTitle: `Tagging large corpus of existing content`,
              image: TaggingIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Providing data science tools to empower empathetic product design`,
              bottonTitle: `Providing data science tools to empower empathetic product design`,
              image: ToosIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
          ],
        },
      ],
    },
    companionweb: {
      title: 'OpenSource',
      subtitle: "That's me!",
      bio: (
        <p className="main-content-wrapper">
          <p>
            A Companion’s existence gives us a reason to express ourselves, go
            on adventures, and learn who we are. With Companion Web, businesses
            and researchers can easily release customized companions on the web
            making it possible to learn about their users and motivations.
          </p>
        </p>
      ),
      button: {
        title: 'Soon on Github',
        action: {
          type: 'url',
          path: '',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: CompanionServerInfoGraphic,
          items: [],
        },
        {
          type: 'horizontal_title',
          title: 'Use Cases',
          contentDirection: 'column',
          bg: 'light',
          items: [
            {
              type: 'image',
              class: 'row',
              alt: `Providing signal processing for use by Companion Kit and other empathetic surfaces`,
              bottonTitle: `Providing signal processing for use by Companion Kit and other empathetic surfaces`,
              image: SignalIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Observing and understanding human context in analyzed data`,
              bottonTitle: `Observing and understanding human context in analyzed data`,
              image: ObservingIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Server-side prototyping prior to edge-deployed models`,
              bottonTitle: `Server-side prototyping prior to edge-deployed models`,
              image: ServerIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Tagging large corpus of existing content`,
              bottonTitle: `Tagging large corpus of existing content`,
              image: TaggingIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
            {
              type: 'image',
              class: 'row',
              alt: `Providing data science tools to empower empathetic product design`,
              bottonTitle: `Providing data science tools to empower empathetic product design`,
              image: ToosIcon,
              bottomTitleClass: 'dark list',
              imgClass: '',
            },
          ],
        },
      ],
    },
  },
  masloCompanions: {
    title: 'Companions',
    subtitle:
      'Companions meet you where you are and help you get to where you want to be.',
    bio: (
      <p className="main-content-wrapper">
        <p>
          A companion is a personal being that helps people set goals, grow, and
          learn. We do this for our partners in several categories related to
          deep fundamental human needs.
        </p>
        <p>
          Maslo has many different established companionships. Check the latest
          companions.
        </p>
      </p>
    ),
    options: [
      {
        title: 'Babe - Behavioral Health Companion',
        icon: BabeOrb,
        action: 'pages',
        page: 'babe',
      },
      {
        title: 'EVA - Coaching Companion',
        icon: EvaOrb,
        action: 'pages',
        page: 'eva',
      },
      {
        title: 'Emily - Breastfeeding & Mothers Companion ',
        icon: EmilyOrb,
        action: 'pages',
        page: 'emily',
      },
      {
        title: 'SigBee - Foster Care Companion',
        icon: SigbeeOrb,
        action: 'pages',
        page: 'sigbeefamily',
      },
      {
        title: 'Opti - Personal Treatment Companion',
        icon: OptiOrb,
        action: 'pages',
        page: 'opti',
      },
      {
        title: 'Stella - Fasting Companion',
        icon: StellaOrb,
        action: 'pages',
        page: 'stella',
      },
      {
        title: 'Carree - Career Companion',
        icon: CareerCompanionOrb,
        action: 'pages',
        page: 'careercompanion',
      },
      {
        title: 'Canbe - Depression Companion',
        icon: CANBINDOrb,
        action: 'pages',
        page: 'canbind',
      },
      {
        title: 'Paiper - Creative Companion',
        icon: PaiperOrb,
        action: 'pages',
        page: 'paiper',
      },
      {
        title: 'Public Health Companion',
        icon: HealthOrb,
        action: 'pages',
        page: 'health',
      },
    ],
    babe: {
      title: 'Companions | Babe',
      subtitle: 'Your Behavioral Health companion',
      subtitleColor: '#F1B6C1',
      icon: BabeMainIcon,
      bio: (
        <p className="main-content-wrapper">
          <p>
            Maslo takes an integrated approach to design, machine learning,
            behaviors, & data science.
          </p>
          <p>
            We created Babe, an invitation-only client engagement and
            communication tool designed to make it easier for clinicians to
            gather behavioral health information from their client in between
            therapy sessions.{' '}
          </p>
          <p>
            Babe is built on top of the Maslo platform and can be white labeled
            or licensed as is.
          </p>
        </p>
      ),
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: BabeGraphic,
          items: [],
        },
      ],
    },
    eva: {
      title: 'Companions | Eva',
      subtitle: 'Your Leadership Accountability Companion',
      subtitleColor: '#24807B',
      icon: EvaMainIcon,
      bio: (
        <p className="main-content-wrapper">
          <p>
            Maslo created EVA, an empathetic coaching companion designed to
            foster self-reflection and accountability towards goals and
            commitments.
          </p>
          <p>
            With EVA, coaches and their clients can track progress over time,
            and encourage a deeper connection with more frequency and fluidity
            between sessions.
          </p>
        </p>
      ),
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: EvaGtaphic,
          items: [],
        },
      ],
    },
    emily: {
      title: 'Companions | Emily',
      subtitle: 'Your Breastfeeding and Wellness Companion',
      icon: EmilyMainIcon,
      subtitleColor: '#F9945D',
      bio: (
        <p className="main-content-wrapper">
          <p>
            Maslo ai and Lactation Lab, the first at-home full-spectrum breast
            milk analysis solution, have collaborated to create ‘Emily.’
          </p>
          <p>
            Emily is the first AI-based empathetic computing companion app that
            allows breastfeeding mothers to track their own wellness (mental and
            physical) via daily journaling/tracking and the nutritional make up
            of their breast milk including vitamin content, proteins and
            environmental toxins.
          </p>
        </p>
      ),
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: EmilyGraphic,
          items: [],
        },
      ],
    },
    sigbeefamily: {
      title: 'Companions | SigBee',
      subtitle: 'Foster Care Companion for Families and Caseworkers',
      icon: SigbeeMainIcon,
      subtitleColor: '#FDC300',
      bio: (
        <p className="main-content-wrapper">
          <p>
            The SigBee Family Companion promotes engaging interactions that help
            case workers and families alike gauge their situations in greater
            detail than ever before.
          </p>
        </p>
      ),
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: SigbeeGraphic,
          items: [],
        },
      ],
    },
    opti: {
      title: 'Companions | Opti',
      subtitle: 'Your Personalized Treatment Companion',
      subtitleColor: '#D69A9E',
      icon: OptiMainIcon,
      bio: (
        <p className="main-content-wrapper">
          <p>
            Your personalized companion for treatment-resistant depression by
            helping people find cutting edge treatments, and feel confident that
            their new treatment works.
          </p>
        </p>
      ),
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: OptiGraphic,
          items: [],
        },
      ],
    },
    stella: {
      title: 'Companions | Stella',
      subtitle: 'Your Fasting Companion',
      icon: StellaMainIcon,
      subtitleColor: '#66B6BD',
      bio: (
        <p className="main-content-wrapper">
          <p>
            Your fasting and progress-tracking companion designed to assist in
            finding the fasting plan for your liffestyle, and encouraging
            consistency through check-ins.
          </p>
        </p>
      ),
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: StellaGraphic,
          items: [],
        },
      ],
    },
    careercompanion: {
      title: 'Companions | Carree',
      subtitle: 'Your Career Companion',
      icon: CareerMainIcon,
      subtitleColor: '#2D124F',
      bio: (
        <p className="main-content-wrapper">
          <p>
            A career-building companion created to support and assist active
            job-seekers in collaboration with ThisWay Global.
          </p>
        </p>
      ),
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: CareerGraphic,
          items: [],
        },
      ],
    },
    canbind: {
      title: 'Companions | Canbe',
      subtitle: 'Your Depression Companion',
      icon: CanBindMainIcon,
      subtitleColor: '#0E3B73',
      bio: (
        <p className="main-content-wrapper">
          <p>
            Engagement and communication companion designed to make it easier to
            gather information from patients with behavioral health conditions
            to send to research staff.
          </p>
        </p>
      ),
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: CanBindGraphic,
          items: [],
        },
      ],
    },
    paiper: {
      title: 'Companions | Paiper',
      subtitle: 'Your Creative Companion',
      icon: PaiperMainIcon,
      subtitleColor: '#565656',
      bio: (
        <p className="main-content-wrapper">
          <p>
            A drawing and writing companion designed co-learn and co-creaate
            alongside you. Developed as a proof of concept for Moleskine.
          </p>
        </p>
      ),
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: PaiperGraphic,
          items: [],
        },
      ],
    },
    health: {
      title: 'Companions | Public',
      subtitle: 'Public Health Companion',
      icon: HealthMainIcon,
      subtitleColor: '#0A0A33',
      bio: (
        <p className="main-content-wrapper">
          <p>
            A personalized AI COVID-19 companion that offers invaluable
            objective window into the thoughts, feelings, activity patterns,
            biomarkers and other behavioral markers of COVID-19 patients at
            different stages of their illness.
          </p>
          <p>
            THE PHC is aimed at getting a better understanding of the
            progression of the disease and patient health over the course of the
            illness. The goal is to have accurate data that can better inform
            clinical interventions and public policy, and just as critically,
            mass media.
          </p>
        </p>
      ),
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: HealthGraphic,
          items: [],
        },
      ],
    },
  },
  researchProjects: {
    title: 'Maslo Research',
    subtitle: 'Explore our research',
    bio: (
      <p className="main-content-wrapper">
        <p>
          We constantly challenge our work and our vision. We are invested in
          the open-source research on artificial intelligence and empathetic
          computing and invite you to interact with our work and ourselves to
          help us understand what the world of today needs.
        </p>
        <p>Join the research on computational life!</p>
      </p>
    ),
    button: {
      title: 'Join Github',
      action: {
        type: 'url',
        path: 'https://github.com/HeyMaslo',
      },
    },
    options: [
      {
        title: 'Depression Research',
        icon: ResearchPaperIcon,
        action: 'pages',
        page: 'paper01',
      },
      {
        title: 'Bipolar Disorder Research',
        icon: ResearchPaperIcon,
        action: 'pages',
        page: 'paper02',
      },
      {
        title: 'Paiper',
        icon: PaiperIcon,
        action: 'pages',
        page: 'paiper',
      },
      {
        title: 'Pandemic Mental Health ',
        icon: ResearchPaperIcon,
        action: 'pages',
        page: 'paper03',
      },
      {
        title: 'The Avatar',
        icon: TheAvatarIcon,
        action: 'pages',
        page: 'theavatar',
      },
      {
        title: 'Mind Perception in Digital Beings',
        icon: ResearchPaperIcon,
        action: 'pages',
        page: 'paper04',
      },
      {
        title: 'HyperObjectWeb',
        icon: HyperObjectWebIcon,
        action: 'pages',
        page: 'hyperobjectweb',
      },
      {
        title: 'Art and AI ',
        icon: ResearchPaperIcon,
        action: 'pages',
        page: 'paper05',
      },
      {
        title: 'Sentiment Analysis',
        icon: ResearchPaperIcon,
        action: 'pages',
        page: 'paper06',
      },

      {
        title: 'Orage',
        icon: OrageIcon,
        action: 'pages',
        page: 'orage',
      },
      {
        title: 'the project of the century',
        icon: theprojectofthecenturyIcon,
        action: 'pages',
        page: 'theprojectofthecentury',
      },
      {
        title: 'Sequencer',
        icon: SequencerIcon,
        action: 'pages',
        page: 'sequencer',
      },
      {
        title: 'Prophet',
        icon: ProphetIcon,
        action: 'pages',
        page: 'prophet',
      },
      {
        title: 'Masloland',
        icon: MaslolandIcon,
        action: 'pages',
        page: 'masloland',
      },
      {
        title: 'Maslo Platform',
        icon: MasloPlatformIcon,
        action: 'pages',
        page: 'masloplatform',
      },
      {
        title: 'Time',
        icon: TimeIcon,
        action: 'pages',
        page: 'time',
      },
      {
        title: 'News',
        icon: NewsIcon,
        action: 'pages',
        page: 'news',
      },
      {
        title: 'om',
        icon: omIcon,
        action: 'pages',
        page: 'om',
      },
      {
        title: 'Art Machine',
        icon: ArtMachineIcon,
        action: 'pages',
        page: 'artmachine',
      },
    ],
    paper01: {
      title: 'Can-Bind',
      subtitle: 'Depression Research',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            The global COVID-19 pandemic and its subsequent economic and social
            consequences has affected millions of people who suffer from
            depression. The CAN-BIND team is always looking for new treatment
            strategies and Maslo has created innovative new technologies to help
            their patients. With the use of Maslo’s AI-led empathetic computing
            toolkits, CAN-BIND is able to analyze each individual’s behaviour in
            the real-world and their trajectory towards improvement. Maslo’s
            technology for ecological assessment can help us to better
            understand what’s happening in a patient’s life, which is the basis
            for personalizing treatments to help people get well quickly and to
            stay well.
          </p>
        </p>
      ),
      button: {
        title: 'canbind.ca',
        action: {
          type: 'url',
          path: 'http://canbind.ca/',
        },
      },
      sections: [],
    },
    paper02: {
      title: 'CREST.BD',
      subtitle: 'Bipolar Disorder Research',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            TCREST.BD is partnering with Maslo to track and support quality of
            life in people with bipolar disorder. The shared goal is to put
            quality of life assessments in their own hands and to support them
            to make evidence-informed and personalized adjustments to their
            lives to optimize wellbeing.
          </p>
        </p>
      ),
      button: {
        title: 'crestbd.ca',
        action: {
          type: 'url',
          path: 'http://crestbd.ca/',
        },
      },
      sections: [],
    },
    paiper: {
      title: 'Paiper',
      subtitle: 'A mirror for the mind',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            Paiper is the combination of Paper and Piper. It is a generative
            experience of exploring thoughts and ideas in collaborative way with
            the machine. All the signal is organized and reorganized at the same
            level by the AI.
          </p>
          <p>
            This experiment has been made with cables.gl and works best on
            Chrome Desktop.
          </p>
        </p>
      ),
      button: {
        title: 'Play with Paiper',
        action: {
          type: 'url',
          path: 'https://alivemachine.io/paiper09/',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: Paiper,
          items: [],
        },
      ],
    },

    paper03: {
      title: 'X PRIZE Foundation and AI for Good Summit',
      subtitle: 'Pandemic Mental Health',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            {' '}
            The deployment of a COVID-19 depression companion to collect
            follow-up data from patients can further help us follow positive
            trajectories towards healthy recovery and negative trajectories
            towards deterioration from a first-person perspective. This will aid
            insights into treatment opportunities. Moreover, the proposed public
            health companion can help significantly reduce patient monitoring
            costs and reduce treatment’ costs; thereby alleviating burden on the
            swarmed healthcare systems. Most importantly, this application would
            provide an invaluable ecological window into COVID-19’s impact on
            the physical, mental, and emotional wellbeing of the affected
            population.
          </p>
        </p>
      ),
      button: {
        title: 'aiforgood.itu',
        action: {
          type: 'url',
          path: 'https://aiforgood.itu.int/',
        },
      },
      sections: [],
    },
    theavatar: {
      title: 'The Avatar',
      subtitle: 'The Life in the Machine',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            At this moment, this avatar lives on Maslo's Vital Signals. Those
            numbers are indicators of the health of the Being, as in the people,
            the company, the business, the art, the AI. They are input values
            that constitues the reality of our little avatar. Later we will open
            a window for you to interact with our new friend.
          </p>
          <p>
            This experiment has been made with cables.gl and works best on
            Chrome Desktop.
          </p>
        </p>
      ),
      button: {
        title: 'Experience',
        action: {
          type: 'url',
          path: 'https://alivemachine.io/avatar04/',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: TheAvatar,
          items: [],
        },
      ],
    },

    paper04: {
      title: 'University of British Columbia and MITACS',
      subtitle: 'Mind Perception in Digital Beings',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            Dating back to Alan Turing’s era is the question: Can machines
            think? Perhaps more in fashion nowadays is the question: Can
            machines feel? Rather than evaluating this hard problem of robotics
            directly, we examined how humans perceive minds in different
            biological and technological entities...
          </p>
        </p>
      ),
      button: {
        title: 'psyarxiv.com',
        action: {
          type: 'url',
          path: 'https://psyarxiv.com/p49g7/',
        },
      },
      sections: [],
    },
    hyperobjectweb: {
      title: 'The Hyper Object Web',
      subtitle: 'An emotional compass ',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            You are interacting with MorphCast AI. This program is processing
            your visual signals and this page is giving you a rich and dynamic
            visual feedback of this interaction. A cluster of pixels reacting to
            the impression that the program has of you. This impression is very
            uniquely yours. You can tune this impression by changing the range
            of output signal converted into the pixels.
          </p>
          <p>
            This experiment has been made with glitch.com and works best on
            Chrome Desktop.
          </p>
        </p>
      ),
      button: {
        title: 'Experience',
        action: {
          type: 'url',
          path: 'https://thecompass.glitch.me/',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: HyperObjectWeb,
          items: [],
        },
      ],
    },

    paper05: {
      title: 'University of British Columbia and MITACS',
      subtitle: 'Art and AI',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            Art has long been regarded as the pinnacle of human expressivity.
            The rise of machine learning, particularly generative adversarial
            networks (GANs) and creative adversarial networks (CANs), has led to
            AI that is capable of creating art in various forms. Little is
            understood about how human observers perceive AI-generated art. How
            is human perception of art influenced by the human or AI identity of
            the artist? We found that given the same aesthetic features, human
            observers rated artwork as highly enjoyable and valued when the
            artist identity was labeled as human or as AI. Hence, more
            advancements in AI creativity are a fruitful avenue to creating
            artistic masterpieces. Once AI reaches the artistic prowess of human
            expressivity, AI-generated art can as much evoke human appreciation
            and derive as much value as the most influential human artists in
            history thus far.{' '}
          </p>
        </p>
      ),
      button: {
        title: 'Contact us',
        action: {
          type: 'url',
          path: 'https://maslo.ai',
        },
      },
      sections: [],
    },
    paper06: {
      title: 'Insight Data Science',
      subtitle: 'Sentiment Analysis',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            Humans show a myriad of explicit and implicit emotional signals in
            our behaviors. Signals that could help us understand ourselves and
            our emotions traditionally went unnoticed. We set out to gain a
            better understanding of how various behavioral signals relate to
            mood. Predicting mood from behavioral signals can enable
            artificially intelligent beings to make better empathy-led decisions
            and help Maslo develop state-of-the-art empathetic technology.
          </p>
        </p>
      ),
      button: {
        title: 'Catching Feels',
        action: {
          type: 'url',
          path: 'https://medium.com/maslo/catching-feels-162108cd8114',
        },
      },
      sections: [],
    },

    orage: {
      title: 'Orage',
      subtitle: 'A Computational Being',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            “Create a story telling computational entity capable of listening to
            the world and the people/objects in it and then composing,
            illustrate and tell stories about what it has experienced.”
          </p>
          <p>[Self-Creating, Self-Expressing and Self-Explaining AI]</p>
        </p>
      ),
      button: {
        title: 'Explore on Github',
        action: {
          type: 'url',
          path: 'https://github.com/HeyMaslo/Machines/tree/master/born',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: Orage,
          items: [],
        },
      ],
    },
    theprojectofthecentury: {
      title: 'the project of the century',
      subtitle: 'Research on Computational Consciousness',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            "The project in which we have ventured to search for consciousness
            with the help of computation is not what you think it is. Because it
            is not what any of us think it is. It is precisely what we don’t
            think it is. It is a consistently unsettled project with no rules,
            no guidelines. It generates itself through me, you and everybody.
            Though it is not in us, not in the computer, not in the world, not
            in any revolutionary product or powerful idea. It is defined by our
            work at every moment. A movement toward awakening, taking shape
            through our intellectual, emotional, and physical agency,
            altogether..."
          </p>
        </p>
      ),
      button: {
        title: 'Read on Medium',
        action: {
          type: 'url',
          path:
            'https://alivemachine.medium.com/the-project-of-the-century-68036c376530',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: theprojectofthecentury,
          items: [],
        },
      ],
    },
    sequencer: {
      title: 'Sequencer',
      subtitle: 'Moments inside moments',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>Sequences of memories captured by our AI Orage and other AIs.</p>
        </p>
      ),
      button: {
        title: 'Observe',
        action: {
          type: 'url',
          path: 'https://alivemachine.io/sequencer/sequenceLister.html',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: Sequencer,
          items: [],
        },
      ],
    },
    prophet: {
      title: 'Prophet',
      subtitle: 'Study on Sacred Texts',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            GPT-2 machine learning algorithm taught on the translated sacred
            texts: Avesta Yasna, Bhagavad Gita, Bible, Book Of Shadows, Dao De
            Jing, Kojiki, Quran, Seven Valleys and Four Valleys, Siri Guru
            Granth Sahib, Talmud, Tanakh, The Four Vedas, Teachings of Buddha,
            Upanishads
          </p>
        </p>
      ),
      button: {
        title: 'Converse with the AI Prophet',
        action: {
          type: 'url',
          path: 'https://alivemachine.io/prophet/',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: Prophet,
          items: [],
        },
      ],
    },
    masloland: {
      title: 'Masloland',
      subtitle: 'Welcome to the Computational Jungle',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            Computational creatures are numerous in Maslo land. It is a fertile
            world that grows in diversity and possibilities. Explore some of
            it's fauna.
          </p>
          <p>Runs best in Chrome desktop.</p>
        </p>
      ),
      button: {
        title: 'Play',
        action: {
          type: 'url',
          path: 'https://alivemachine.io/om/masloland/door.html',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: Masloland,
          items: [],
        },
      ],
    },
    masloplatform: {
      title: 'Maslo Platform',
      subtitle: 'A Prototype of Home',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            A first concept of double-operator input as a central UI for the
            maslo Homepage.
          </p>
          <p>Runs best in Firefox desktop.</p>
        </p>
      ),
      button: {
        title: 'Experience',
        action: {
          type: 'url',
          path: 'http://alivemachine.io/masloplatform/',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: MasloPlatform,
          items: [],
        },
      ],
    },
    time: {
      title: 'Time',
      subtitle: 'Tik Tok',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>Tik... Tok... Tik... Tok... Tik... Tok...</p>
          <p>Tik... Tok...</p>
        </p>
      ),
      button: {
        title: 'Experience',
        action: {
          type: 'url',
          path: 'https://alivemachine.io/time/',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: Time,
          items: [],
        },
      ],
    },
    news: {
      title: 'News',
      subtitle: 'Digital Impressionism',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            What would it be like to actually surf the web. To actually have a
            sensory impression of the data. Turn the knob!
          </p>
          <p>Runs best on Firefox or Chrome.</p>
        </p>
      ),
      button: {
        title: 'Experience',
        action: {
          type: 'url',
          path: 'https://alivemachine.io/newsradio.html',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: News,
          items: [],
        },
      ],
    },
    news: {
      title: 'News',
      subtitle: 'Digital Impressionism',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>
            What would it be like to actually surf the web. To have a sensory
            impression of the data. Turn the knob!
          </p>
          <p>Runs best on Firefox or Chrome.</p>
        </p>
      ),
      button: {
        title: 'Experience',
        action: {
          type: 'url',
          path: 'https://alivemachine.io/newsradio.html',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: News,
          items: [],
        },
      ],
    },
    om: {
      title: 'om',
      subtitle: 'A Relaxing Web',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p></p>
          <p>Runs best on Firefox or Chrome.</p>
        </p>
      ),
      button: {
        title: 'Experience',
        action: {
          type: 'url',
          path: 'https://alivemachine.io/om/door.html',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: om,
          items: [],
        },
      ],
    },
    artmachine: {
      title: 'Art Machine',
      subtitle: 'An Art Radio',
      icon: '',
      bio: (
        <p className="main-content-wrapper">
          <p>Turn the knob!</p>
          <p>Runs best on Firefox or Chrome.</p>
        </p>
      ),
      button: {
        title: 'Experience',
        action: {
          type: 'url',
          path: 'http://alivemachine.io/artmachine/index.html',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: ArtMachine,
          items: [],
        },
      ],
    },
  },
  blogPosts: {
    title: 'Blog Posts',
    subtitle: 'Your Virtual Self.',
    bio: (
      <p className="main-content-wrapper">
        <p>
          A community of people who are curious about all things technology and
          psychology.
        </p>
        <p>Coming Soon!</p>
      </p>
    ),
    button: {
      title: 'Read on Medium',
      action: {
        type: 'url',
        path: 'https://medium.com/maslo',
      },
    },
    options: [],
  },
};
