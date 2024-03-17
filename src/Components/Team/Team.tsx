import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import { useRef,useEffect,useState } from "react";
import data from "../../../data.json"

const Team = () => {

    const gridBox = useRef(null!)
    const [lines, setlines] = useState<string[]>([])

    const addLines = ()=>{
        const gridColumnStyle = window.getComputedStyle(gridBox.current).getPropertyValue('grid-template-rows');
        setlines(gridColumnStyle.split(' '))
        console.log(gridColumnStyle.split(' '))
    }
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            addLines()
        })
        addLines()
    },[])

    return (
        <div className={`styles.teamWrapper flex flex-col items-center w-full relative`} id="team">
            <h1 className="py-7 text-3xl font-bold text-[#AF5DFF]">Our Team</h1>
            <div className="w-full  bg-red-">
                 <div ref={gridBox} className="grid gap-0 gap-x-8 relative sm:px-14 mob:px-6 lg:grid-cols-4 md:grid-cols-3 mob:grid-cols-2 mob:gap-x-10
                lg:gap-x-20 sm:gap-x-10
                 ">
                                {
                                    lines.map((e,i)=>{
                                        return (
                                                <img src={i%2==0?line:line2} alt="" className="absolute w-full -z-10 sm:translate-y-[50%] md:translate-y-[100%] lg:translate-y-[50%] mob:translate-y-[200%]" style={{ top:`calc(${lines[0]}*${i})`}} />
                                        )
                                    })
                                }

                    {
                        data.team.map((item, i) => {
                            return (
                                <div className={`${i%2==0?'-translate-y-0':'-translate-y-6'} flex flex-col gap-2 items-center justify-center bg-red- p-2 py-6`} key={i}>
                                    <img className="rounded-full" src={item.image} onLoad={()=>{i==0?addLines():null}} alt="" />
                                    <div className="flex flex-col items-center">
                                        <h2 className="tracking- font-bold mob:text-[80%] sm:text-[100%]">{item.name}</h2>
                                        <p className="tracking- text-[#AF5DFF] mob:text-[75%] sm:text-[90%]">{item.position}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                 </div>
            </div>
            
        </div>
    );
};

export default Team;