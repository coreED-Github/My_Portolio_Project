import { TypeAnimation } from 'react-type-animation';

const TextEfact = () => {
  return (
    <TypeAnimation
      sequence={[

        "Web Devoloper",
         1500,
        "Coder",
        1500,
        'Programmer',
        1500,
        'Fronted Developer',
        1500,
        'Backend Developer',
        1500
      ]}
     
      speed={50}
     className="text-[2rem] md:text-[3rem] text-sky-700 font-bold uppercase"
      repeat={Infinity}
    />
  );
};
export default TextEfact;