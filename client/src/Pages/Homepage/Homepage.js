import React, {Component} from "react";
import ScrapeButton from "../../Components/ScrapeButton";
import { Col, Row, Container } from "../../Components/Grid";
import Card from "../../Components/Card";
import API from "../../Utils/API"
import ClearButton from "../../Components/clearButton"
import ShowButton from "../../Components/ShowButton";
import SaveButton from "../../Components/SaveButton";
import "./style.css"

class HomePage extends Component{
    state={
        Articles: [],
        Headline: "",
        Summary: "",
        URL: ""
    }

    componentDidMount(){
        this.loadArticles();
    };

    loadArticles = () => {
        API.getArticles()
          .then(res =>{

            this.setState({ Articles: res.data})
          })
          .catch(err => err);
    };
    
    scrapePage = () =>{
        API.getSome()
        .then(this.loadArticles())
        .catch(err => err)
    };

    saveArticle = event =>{
        event.preventDefault();

       let newArticle = this.state.Articles.filter(el => el._id === event.target.name);
        
        API.saveArticle(newArticle)
        .then(res => res)
        .catch(err => err)
    };

    CleanPage = () =>{
        API.deleteArticles()
            .then(res =>{
  
                this.setState({Articles: []})
            })
            .catch(err => err)
    };

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col size="col md 12">
                    {/* needs to be displayed inline */}
                        <ScrapeButton onClick={this.scrapePage} />
                        <ClearButton onClick={this.CleanPage}/>
                        <ShowButton onClick={this.loadArticles}/>
                    </Col>
                </Row>
                <Row>
                    {
                        this.state.Articles.map( article => (
        
                        <Col key={article._id} size="col m12">
                            <Card 
                                key=        {article._id}
                                Summary=    {article.Summary || "No Summary"} 
                                Headline=   {article.Headline} 
                            ><SaveButton name={article._id} click={this.saveArticle}/></Card>
                        </Col>

                        ))
                    }
                </Row>
            </Container>
        );
    }

}
export default HomePage;