import {MainActionButton} from '../models/main-action-button';

export const mainActionButtons: MainActionButton[] = [
  {
    label: 'Stock Disponivel',
    tooltip: 'Analisa opções disponíveis',
    redirectURL: '/cars',
    section: 'available-cars'
  },
  {
    label: 'Os nossos serviços',
    tooltip: 'Analisa opções disponíveis',
    redirectURL: '/our-services',
    section: 'our-services'

  },
  {
    label: 'Sobre nós',
    tooltip: 'Analisa opções disponíveis',
    redirectURL: '/cars',
    section: 'about-us'

  },
  {
    label: 'Fala connosco',
    tooltip: 'Analisa opções disponíveis',
    redirectURL: '/contact-us',
    section: 'contact-us'

  },
  {
    label: 'Feedback',
    tooltip: 'Analisa opções disponíveis',
    redirectURL: '/car-details',
    section: 'feedback'

  },
];
