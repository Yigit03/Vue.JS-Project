<template>
    <main>
        <div class="mini-post">
        <div class="mini-post-top">
                    <div class="mini-renkli">
                        <div class="mini-beyaz">
                            <img class="mini-post-img" src="./icons/images.jpg" alt="PP">
                        </div>
                    </div>
                    <div class="mini-name-job">
                        <p class="mini-name">Ayşe Palandöken</p>
                    </div>
            </div>


            <img class="mini-paylasım" src="./icons/hiking.jpg" alt="POST">

            <div class="mini-post-bottom"> 
                <div class="mini-bottom-information">
                    <div class="mini-description">
                        <p>
                            <b>Hiking in mountains with my 
                            little baby :)</b>
                        </p>
                    </div>  
                    <div class="label-container"> 
                    <label class="mini-label"> <b>2</b> Likes </label>
                    <label class="mini-label"> <b>324</b> Comments</label>    
                </div>
                </div>
            </div>
    </div>
<!--------------------------------------------------------------------------------->
<div class="mini-post">
        <div class="mini-post-top">
                    <div class="mini-premium">
                        <div class="mini-beyaz">
                            <img class="mini-post-img" src="./icons/images.jpg" alt="PP">
                        </div>
                    </div>
                    <div class="mini-name-job">
                        <p class="mini-name">Merve Yılmaz</p>
                    </div>
            </div>

            <div class="linear"></div>

            <img class="mini-paylasım" src="./icons/anne-bebek.jpg" alt="POST">

            <div class="mini-post-bottom"> 
                <div class="mini-bottom-information">
                    <div class="mini-description">
                        <p>
                            <b>Yoga programs for early 
                                pregnants</b>
                        </p>
                    </div>
                    <div class="label-container">
                        <label class="mini-label"> <b>12</b> Likes</label>
                        <label class="mini-label"> <b>324</b> Comments</label>
                    </div>   
                </div>
            </div>
    </div>
<!--------------------------------------------------------------------------------->
<div class="mini-post slider">
        <div class="aside-slider">
        <div class="text">
            <label>Momsista</label>
            <h3>Family Meeting</h3>
            <label style="color: rgb(148, 148, 148);">July'19</label>
        </div>
        <img class="mini-paylasım" src="./icons/guncel-anne-bebek.jpg" alt="">
        <button class="join" type="submit">Join</button>
    </div>
</div>
</main>
</template>

<style>
.mini-post{
    width: 70%;
    height:auto;
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgb(184, 184, 184);
    margin-bottom: 20px;
    margin-left: 45px;
}
.mini-post-top{
    display: flex;
    flex-direction: row;
    vertical-align: middle;
}
.mini-post-top>div>img{
    width: 40px;
    height: 40px;
    margin:10px;
    border-radius: 50%;
}
.mini-renkli{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(255, 219, 255);
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 5px;
}
.mini-premium{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(180deg, #e0e4d8,#facf1c,#a6cc45,#7fcd67,#7fcd67,#01cec8,#01cec8);
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 5px;
}
.mini-beyaz{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    position: absolute;
    margin: -1px ;
}
.mini-post-img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    position: absolute;
    margin: 2.5px;
    
}
.mini-name-job{
    margin-top:15px;
}
.mini-premium-job{
    color: #facf1c;
}
.linear{
    width: 100%;
    height: 5px;
    background-image: linear-gradient(to right,
    #e1e4e0,#fbd021,
    #a9cc45,#5dcd81,
    #01cec8,#01cec8);
}
.mini-paylasım{
    width: 100%;
    height:120px;
    background-color: #01cec8;
    object-fit: cover;
}

.mini-bottom-information{
    margin:10px 0px 10px 10px;
}
.label-container{
    display: flex;
    justify-content: space-between;
    margin-right: 15px;
}
.mini-label{
    color: rgb(148, 148, 148);
    font-size: small;
    margin-left: 10px;
}
.mini-description{
    width: 100%;
    height: auto;
    margin: 10px 0 10px 10px;
}
b{
    color: black;
}
.aside-slider{
    width: 100%;
    height:auto;
    background-color: white;
    border-radius: 5px;
    margin: 10px 0 10px 35px;
    text-align: center;
    margin-left: -0px;
}
.join{
    width: 40%;
    height: 25px;
    background-color: white ;
    border-radius: 20px;
    margin-top: 5px;
}
.slider{
    margin-top: 150px;
    border: none;
    padding: 5px 0 5px 0;
}
</style>