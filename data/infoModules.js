import {
  NissanAgentObjective,
  WhoIsMaslo,
  MasloDna,
  MasloAgentApproach,
  MasloAi,
  TheFutureAutomotiveExperience,
  CustomAgentPersonification,
  MindPerceptionInDigitalAgents,
  NextSteps,
  HalfOrb,
} from '../config/images';

export const infoModules = {
  NissanMaslo: {
    title: 'About Nissan x Maslo',
    subtitle:
      'Companions meet you where you are and help you get to where you want to be.',
    bio: (
      <p className="main-content-wrapper">
        <p>
          A companion is a personal being that helps people set goals, grow, and
          learn. We do this for our partners in several categories related to
          deep fundamental human needs.
        </p>
        <p></p>
      </p>
    ),
    options: [
      {
        title: 'Nissan Agent Objective',
        icon: '',
        action: 'pages',
        page: 'NissanAgentObjective',
      },
      {
        title: 'Who is Maslo',
        icon: '',
        action: 'pages',
        page: 'WhoIsMaslo',
      },
      {
        title: 'Maslo Dna',
        icon: '',
        action: 'pages',
        page: 'MasloDna',
      },
      {
        title: 'Maslo Agent Approach',
        icon: '',
        action: 'pages',
        page: 'MasloAgentApproach',
      },
      {
        title: 'Maslo Ai',
        icon: '',
        action: 'pages',
        page: 'MasloAi',
      },
      {
        title: 'The Future Automotive Experience',
        icon: '',
        action: 'pages',
        page: 'TheFutureAutomotiveExperience',
      },
      {
        title: 'Custom Agent Personification',
        icon: '',
        action: 'pages',
        page: 'CustomAgentPersonification',
      },
      {
        title: 'Mind Perception In Digital Agents',
        icon: '',
        action: 'pages',
        page: 'MindPerceptionInDigitalAgents',
      },
      {
        title: 'Next Steps',
        icon: '',
        action: 'pages',
        page: 'NextSteps',
      },
    ],
    NissanAgentObjective: {
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: NissanAgentObjective,
          items: [],
        },
      ],
    },
    WhoIsMaslo: {
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: WhoIsMaslo,
          items: [],
        },
      ],
    },
    MasloDna: {
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: MasloDna,
          items: [],
        },
      ],
    },
    MasloAgentApproach: {
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: MasloAgentApproach,
          items: [],
        },
      ],
    },
    MasloAi: {
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: MasloAi,
          items: [],
        },
      ],
    },
    TheFutureAutomotiveExperience: {
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: TheFutureAutomotiveExperience,
          items: [],
        },
      ],
    },
    CustomAgentPersonification: {
      title: 'Custom Agent Personification',
      subtitle: ' ',
      icon: HalfOrb,
      type: 'standard',
      subtitleColor: '#922F27',
      titleColor: '#3C0603',
      bio: (
        <p className="main-content-wrapper">
          <p>
            We will work with you to come up with the best personification of
            your digital agent depending on the qualities that you find most
            valuable.
          </p>
          <p></p>
        </p>
      ),
      button: {
        title: 'Inventing the Maslo Persona',
        action: {
          type: 'url',
          path: 'https://medium.com/maslo/art-ex-machina-bbbfb605b7b7',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: CustomAgentPersonification,
          items: [],
        },
      ],
    },
    MindPerceptionInDigitalAgents: {
      title: 'Mind Perception In Digital Agents',
      subtitle: 'Co-learning / Co-creation Research',
      icon: HalfOrb,
      type: 'standard',
      subtitleColor: '#922F27',
      titleColor: '#3C0603',
      bio: (
        <p className="main-content-wrapper">
          <p>
            A study by researchers at Maslo and the University of British
            Columbia found that younger users with more experience interacting
            with digital agents were much more likely to perceive qualities of
            mind and develop trusting relationships with machines.
          </p>
          <p></p>
        </p>
      ),
      button: {
        title: 'view the research study',
        action: {
          type: 'url',
          path: 'https://psyarxiv.com/p49g7/download',
        },
      },
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: MindPerceptionInDigitalAgents,
          items: [],
        },
      ],
    },
    NextSteps: {
      sections: [
        {
          type: 'standalone',
          title: '',
          contentDirection: 'row',
          bg: 'light',
          image: NextSteps,
          items: [],
        },
      ],
    },
  },
};
