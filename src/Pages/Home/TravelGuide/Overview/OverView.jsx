

const OverView = () => {
    return (
        <div className=" items-center md:h-[410px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <iframe className="w-full rounded-lg h-[270px]" src="https://www.youtube.com/embed/d93YRfrX2qg?si=xvj4Q7jD9LHvnRO4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <iframe className="w-full rounded-lg h-[270px]" src="https://www.youtube.com/embed/4K521lgic7I?si=FvjonxDkUCq-WzZA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <iframe className="w-full rounded-lg h-[270px]" src="https://www.youtube.com/embed/Rgfn0zo3clY?si=TSF3t4ezn2zUmKC2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    );
};

export default OverView;