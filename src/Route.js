import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Example1 from './components/examples/Example1';
import Example2 from './components/examples/Example2';
import Example3 from './components/examples/Example3';
import Example4 from './components/examples/Example4';
import Example5 from './components/examples/Example5';
import Example6 from './components/examples/Example6';
import Example7 from './components/examples/Example7';
import Example8 from './components/examples/Example8';
import Example9 from './components/examples/Example9';
import Example10 from './components/examples/Example10';
import Example11 from './components/examples/Example11';
import Example12 from './components/examples/Example12';

export default class AppRoutes extends Component {
    render() {
        return (
            <Router>
                    <div>
                        <Routes>
                            <Route exact path="/" element={<Example1/>} />
                            <Route path="/login" element={<Example1/>} />
                            <Route path="/example2" element={<Example2/>} />
                            <Route path="/example3" element={<Example3/>} />
                            <Route path="/example4" element={<Example4/>} />
                            <Route path="/example5" element={<Example5/>} />
                            <Route path="/example6" element={<Example6/>} />
                            <Route path="/example7" element={<Example7/>} />
                            <Route path="/example8" element={<Example8/>} />
                            <Route path="/example9" element={<Example9/>} />
                            <Route path="/example10" element={<Example10/>} />
                            <Route path="/example11" element={<Example11/>} />
                            <Route path="/example12" element={<Example12/>} />
                        </Routes>
                    </div>
            </Router>
        )
    }
}