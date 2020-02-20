import React from 'react';
import LazyPage from './pages/lazy/lazyPage.js';
import Star from './components/starrySky/star.js';
import './styles/common.css';

class App extends React.Component{


    state = {
        loadNow:<Star skip={this.onSkip.bind(this)}></Star>
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({loadNow:<LazyPage></LazyPage>});
        },43000);
    }

    onSkip(){
        setTimeout(()=>{
            this.setState({loadNow:<LazyPage></LazyPage>});
        },0);
    }

    render(){
        return(
            <div className="main-class">
                {this.state.loadNow}
            </div>
        );
    }
}
export default App;

