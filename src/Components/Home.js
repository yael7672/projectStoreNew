
import React, { Component } from "react";
import one from '../images/one.JPG'
import two from '../images/two.JPG'
import three from '../images/three.JPG'
import '../Components/Home.css'
import './Home.css'

export default function Home(props) {
    return (
        <>
            <div class="row">
                <div class="col">
                    <div></div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={one} class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                                <img src={two} class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                                <img src={three} class="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>



            {/* <div class="card" style={{
                width: "18rem"
            }} >
                <img src={two} class="card-img-top" alt="..." ></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
        </>
    )
}