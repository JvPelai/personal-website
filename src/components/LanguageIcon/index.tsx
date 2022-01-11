import Image from 'next/image';

interface ILanguageIconProps {
  langName: string;
}

const LanguageIcon = (props: ILanguageIconProps) => {
  const { langName } = props;
  const langIcons = [
    {
      name: 'JavaScript',
      icon: 'javascript',
    },
    {
      name: 'HTML',
      icon: 'html5',
    },
    {
      name: 'CSS',
      icon: 'css3',
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
    },
    {
      name: 'Java',
      icon: 'java',
    },
    {
      name: 'Python',
      icon: 'python',
    },
    {
      name: 'Ruby',
      icon: 'ruby',
    },
    {
      name: 'C++',
      icon: 'cplusplus',
    },
    {
      name: 'C',
      icon: 'c',
    },
    {
      name: 'Makefile',
      icon: 'bash',
    },
    {
      name: 'Dockerfile',
      icon: 'docker',
    },
  ];
  const langIcon = langIcons.find((i) => i.name === langName);
  return (
    <>
      {langIcon ? (
        <Image
          src={`/assets/icons/${langIcon.icon}` + '-original.svg'}
          alt={langIcon.name}
          width="24"
          height="24"
        />
      ) : (
        <Image
          src="/assets/icons/devicon-original.svg"
          alt="dev"
          width="24"
          height="24"
        />
      )}
    </>
  );
};

export { LanguageIcon };
