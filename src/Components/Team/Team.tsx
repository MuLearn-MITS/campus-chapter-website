import styles from "./Team.module.css";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import { useRef,useEffect,useState } from "react";

const Team = () => {

    let row1 = [
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
        {
            image:'./assets-mulearnmits/team/Joel Basil Kurian - Campus Lead.png',
            name:"Joel Basil Kurian",
            Position:'campus Lead',
        },
    ]

    const gridBox = useRef(null!)
    const [lines, setlines] = useState<string[]>([])

    useEffect(()=>{
        console.log(row1.length)
        window.addEventListener("resize",()=>{
            const gridColumnStyle = window.getComputedStyle(gridBox.current).getPropertyValue('grid-template-rows');
            console.log(gridColumnStyle.split(' '));
            setlines(gridColumnStyle.split(' '))
        })

    },[])

    return (
        <div className={`styles.teamWrapper flex flex-col items-center w-full relative`} id="team">
            <h1 className="p-5 text-3xl">Our Team</h1>
            <div className="w-full pt-14 bg-red-">
                 <div ref={gridBox} className="grid grid-cols-2 md:grid-cols-3 lg:grid- relative">
                                {
                                    lines.map((e,i)=>{
                                        return (
                                            <img src={i%2==0?line:line2} alt="" className="absolute translate-y-[150%] -z-10" style={{ top: `calc(${e} * ${i})`}}/>
                                        )
                                    })
                                }

                    {
                        row1.map((item, i) => {
                            return (
                                <div className={`-translate-y-${i%2==0?0:6} flex flex-col items-center justify-center bg-red- p-2 px-5`} key={i}>
                                    <img className="rounded-full" src={item.image} alt="" />
                                    <div className="flex flex-col items-center">
                                        <h2>{item.name}</h2>
                                        <p>{item.Position}</p>
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