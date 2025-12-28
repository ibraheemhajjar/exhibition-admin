import {
  ArchiveIcon,
  BuildingIcon,
  CalendarIcon,
  ChartIcon,
  DocumentIcon,
  GroupIcon,
  HeadphonesIcon,
  HomeIcon,
  SectionsIcon,
  SettingsIcon,
  ThemeIcon,
} from '@/components/icons/navigation-icons';

export const NAVIGATION_ITEMS = {
  navigationButtons: [
    { name: 'الرئيسية', href: '/', icon: HomeIcon },
    { name: 'الأقسام', href: '/sections', icon: SectionsIcon },
    { name: 'التقويم', href: '/schedule', icon: CalendarIcon },
    { name: 'المستندات', href: '/docs', icon: DocumentIcon },
    { name: 'الأبنية', href: '/buildings', icon: BuildingIcon },
    { name: 'المجموعات', href: '/groups', icon: GroupIcon },
    { name: 'الأرشيف', href: '/archive', icon: ArchiveIcon },
    { name: 'الإحصائيات', href: '/statistics', icon: ChartIcon },
    { name: 'الصوتيات', href: '/audio', icon: HeadphonesIcon },
    { name: 'الاعدادات', href: '/settings', icon: SettingsIcon },
  ],
  themeToggle: { name: 'تبديل السمة', href: '/theme', icon: ThemeIcon },
};
