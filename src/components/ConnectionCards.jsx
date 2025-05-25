import React from 'react'
import { useConnections } from '../hooks/useConnections'
import { FaArrowRight } from 'react-icons/fa';
import ConnectionCard from './ConnectionCard';

function ConnectionCards({ actor1, actor2 }) {

      const { data, loading, error } = useConnections(actor1?.nconst, actor2?.nconst);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;
        if (!data) return null;


                const renderPath = () => {
                     
                        const elements = [];

                        data.path.forEach((step, index) => {
                            const match = step.match(/(nm\d+)\s+\((tt\d+)\)\s+->\s+(nm\d+)/);
                            if (match) {
                            const [, fromActor, movie, toActor] = match;

                            elements.push(
                               <React.Fragment key={`step-${index}`}>
                                    <ConnectionCard type="actor" id={fromActor} />
                                    <FaArrowRight className="arrow" />
                                    <ConnectionCard type="movie" id={movie} />
                                    <FaArrowRight className="arrow" />
                                </React.Fragment>
                            );
                            }
                        });

                        // Son aktör
                        const lastMatch = data.path.at(-1)?.match(/->\s+(nm\d+)/);
                        const lastActor = lastMatch?.[1];

                        if (lastActor) {
                                 elements.push(<ConnectionCard key="last-actor" type="actor" id={lastActor} />);

                        }

                        return elements;
                    };




  return (
    <div className=" container flex">
        <div className='connectionCardsContent'>
                
                <h2>Verbindingspad</h2>
        

         <div className='flex' >
                {!data.found ? (
                    <p>{data.message || "No connection found."}</p>
                ) : (
                    renderPath()
                )}        
        </div>

        </div>
    </div>
  )
}

export default ConnectionCards