import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "scikit-learn",
    "TensorFlow",
    "NumPy",
    "Pandas",
    "Jupyter",
    "Next.js",
    "cplusplus",
    "azure",
    "csharp",
    "css3",
    "Matplotlib",
    "git",
    "html5",
    "javascript",
    "Java",
    "react",
    "Firebase",
    "tailwindcss",
    "PyTorch",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
