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
  },
};
