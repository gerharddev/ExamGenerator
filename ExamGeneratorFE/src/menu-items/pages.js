// assets
import { IconAlbum } from '@tabler/icons';

// constant
const icons = {
  IconAlbum
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'exam-trainer',
      title: 'Exam trainer',
      type: 'item',
      url: '/exam-trainer',
      icon: icons.IconAlbum,
      breadcrumbs: false
    }
  ]
};

export default pages;
