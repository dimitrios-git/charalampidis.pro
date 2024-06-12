// @/app/ui/asides/myNextUIAside.tsx

import { useTranslations } from 'next-intl';
import React from 'react';
import { Tooltip } from '@nextui-org/react';
import { MdOutlineCode } from 'react-icons/md';
import { TbBrandNextjs } from 'react-icons/tb';
import { TbBrandVite } from 'react-icons/tb';
import { TbBrandTailwind } from 'react-icons/tb';
import { TbBrandBootstrap } from 'react-icons/tb';
import { TbBrandTypescript } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiReact } from 'react-icons/si';
import { SiVuedotjs } from 'react-icons/si';
import { TbBrandHtml5 } from 'react-icons/tb';
import { TbBrandCss3 } from 'react-icons/tb';
import { SiVisualstudiocode } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';
import { SiPostgresql } from 'react-icons/si';
import { SiMariadb } from 'react-icons/si';
import { SiAdminer } from 'react-icons/si';
import { SiWordpress } from 'react-icons/si';
import { TbBrandNodejs } from 'react-icons/tb';
import { TbBrandPython } from 'react-icons/tb';
import { SiJupyter } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { SiNginx } from 'react-icons/si';
import { SiApache } from 'react-icons/si';
import { TbBrandDocker } from 'react-icons/tb';
import { SiPortainer } from 'react-icons/si';
import { TbBrandAnsible } from 'react-icons/tb';
import { SiGnubash } from 'react-icons/si';
import { SiVim } from 'react-icons/si';
import { SiLinux } from 'react-icons/si';
import { SiUbuntu } from 'react-icons/si';
import { SiDebian } from 'react-icons/si';
import { SiRedhat } from 'react-icons/si';
import { SiSuse } from 'react-icons/si';
import { SiArchlinux } from 'react-icons/si';
import { SiGentoo } from 'react-icons/si';
import { SiPinescript } from 'react-icons/si';
import { SiTradingview } from 'react-icons/si';
import { SiMicrosoftexcel } from 'react-icons/si';
import { SiWindows11 } from 'react-icons/si';

interface ResumeAsideProps {
  className?: string;
}

const ResumeAside: React.FC<ResumeAsideProps> = ({ className }) => {
  const t = useTranslations('ResumeAside');

  return (
    <aside className={`p-4 ${className}`}>
      <h2 className="text-md font-bold flex items-center">
        <span className="pe-1">
          <MdOutlineCode />
        </span>
        {t('Title')}
      </h2>
      <p className="m-2">{t('Paragraph1')}</p>
      <div className="flex flex-wrap">
        <Tooltip content="Next.js">
          <TbBrandNextjs className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Vite">
          <TbBrandVite className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Tailwind CSS">
          <TbBrandTailwind className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Bootstrap">
          <TbBrandBootstrap className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="TypeScript">
          <TbBrandTypescript className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="JavaScript">
          <TbBrandJavascript className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="React">
          <SiReact className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Vue.js">
          <SiVuedotjs className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="HTML5">
          <TbBrandHtml5 className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="CSS3">
          <TbBrandCss3 className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Visual Studio Code">
          <SiVisualstudiocode className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="MySQL">
          <TbBrandMysql className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="PostgreSQL">
          <SiPostgresql className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="MariaDB">
          <SiMariadb className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Adminer">
          <SiAdminer className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="WordPress">
          <SiWordpress className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Node.js">
          <TbBrandNodejs className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Python">
          <TbBrandPython className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Jupyter">
          <SiJupyter className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="C++">
          <SiCplusplus className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Nginx">
          <SiNginx className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Apache">
          <SiApache className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Docker">
          <TbBrandDocker className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Portainer">
          <SiPortainer className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Ansible">
          <TbBrandAnsible className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="GNU Bash">
          <SiGnubash className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Vim">
          <SiVim className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Linux">
          <SiLinux className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Ubuntu">
          <SiUbuntu className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Debian">
          <SiDebian className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Red Hat">
          <SiRedhat className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="SUSE">
          <SiSuse className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Arch Linux">
          <SiArchlinux className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Gentoo">
          <SiGentoo className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Pine Script">
          <SiPinescript className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="TradingView">
          <SiTradingview className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Microsoft Excel">
          <SiMicrosoftexcel className="text-5xl text-gray-500 p-2" />
        </Tooltip>
        <Tooltip content="Microsoft Windows">
          <SiWindows11 className="text-5xl text-gray-500 p-2" />
        </Tooltip>
      </div>
    </aside>
  );
};

export default ResumeAside;
