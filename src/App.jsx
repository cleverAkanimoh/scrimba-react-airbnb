import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Experiences from "./components/Data";

const App = () => {
    return (
        <main>
           <Navbar />
           {/* <Hero /> */}
           <Experiences />
        </main>
    )
}

export default App;