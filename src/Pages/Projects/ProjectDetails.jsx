import { useContext, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import { useParams } from "react-router-dom";


const ProjectDetails = () => {
  const { projectList } = useContext(AuthContext);
  const projectPathId = useParams();
  const projectId = projectPathId.id;
  const projectFinal = projectList.filter(project => projectId === project.id);
  console.log(projectFinal[0]);
  const { img, title, description, rating, sourceURL, liveURL, features } = projectFinal[0];

  const [showFullImg, setShowFullImg] = useState(1)


  return (
    <div className="max-w-7xl md:my-12 my-10 md:mx-auto mx-5">
      <h1 className="md:text-5xl text-2xl text-center font-semibold pb-20">Project Details</h1>

      <div className="flex md:my-0 -my-20 justify-center md:flex-row flex-col gap-5">

        {/* img container  */}
        <div className=" md:w-1/2 md:block hidden md:my-0 my-10 hover:shadow-2xl transition-all duration-500 overflow-hidden hover:cursor-pointer">
          <img className="hover:scale-125 duration-700 transition-all" src={img} alt="" />
        </div>


        <div onClick={() => setShowFullImg(!showFullImg)} className={showFullImg ? "md:w-1/2 md:hidden max-h-56 overflow-hidden md:my-0 my-10 hover:shadow-2xl transition-all duration-500 hover:cursor-pointer" : "md:w-1/2 min-h-56 overflow-hidden md:my-0 my-10 hover:shadow-2xl transition-all duration-500 hover:cursor-pointer"}>
          <img className="hover:scale-125 duration-700 transition-all" src={img} alt="" />
        </div>

        {/* details container */}
        <div className=" relative p-5 md:w-1/2">
          <div className="sticky top-0 md:space-y-8 space-y-5">

            <div className="flex items-center justify-between mb-3">
              <h5 className="block font-sans md:text-5xl text-2xl antialiased font-medium leading-snug tracking-normal text-blue-600">{title}</h5>
              <p className="flex items-center gap-1.5 font-sans text-xl font-normal leading-relaxed text-blue-gray-900 antialiased">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  className="-mt-0.5 h-5 w-5 text-yellow-700">
                  <path fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"></path>
                </svg>
                {rating}
              </p>
            </div>

            <h1 className="md:text-xl ">{description}</h1>

            <div className="md:text-lg text-sm">
              <h1 className="text-blue-600">Features</h1>

              <ul className="ml-8 mt-5">
                {features.map((feature, idx) => <li className="marker:" key={idx}>*{feature}</li>)}
              </ul>
            </div>

            <div className=" pt-3 flex justify-between md:text-md text-xs items-center gap-10">
              <a href={sourceURL} target="_blank"
                className="bg-black hover:bg-transparent hover:text-black  text-white text-center font-semibold w-full py-3.5 px-6 rounded-xl cursor-pointer hover:shadow-xl active:shadow-none active:scale-95 transition-all "
                type="button">
                Source Code
              </a>
              <a href={liveURL} target="_blank"
                className="bg-black hover:bg-transparent hover:text-black text-white text-center font-semibold w-full py-3.5 px-7 rounded-xl cursor-pointer hover:shadow-xl active:shadow-none active:scale-95 transition-all "
                type="button">
                Live Demo
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails