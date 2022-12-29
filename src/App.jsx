import { useState } from 'react';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experiences from "./Components/Experiences";
import data from "./Components/Data";

const App = () => {

    const [people, setPeople] = useState(data);
    return (
        <main>
           <Navbar />
           <Hero />
           <Experiences people={people} />
        </main>
    )
}

export default App;