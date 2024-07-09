<template>
    <div class="reklam">
        <div class="reklam-top">
                <div class="renkli">
                    <div class="beyaz">
                        <img class="post-img" src="./icons/Logo_Milupa.svg.png" alt="PP">
                    </div>
                </div>
                <div class="name-job">
                    <p class="name" style="margin-top:5px;">Milupa</p>
                    <p class="job"> SPONSORED </p>
                </div>
                <div class="dots">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                </div>
        </div>

        <img  class="paylasım" src="./icons/milupa-reklam.png" alt="Reklam">

        <div class="post-bottom">
            <div class="istatistic">
                <div class="istatistic-in">
                <div class="veri">
                    <svg class="istatistic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                    <div>3</div>
                </div>
                <div class="veri">
                    <svg class="istatistic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
                    <div>1</div>
                </div>
                </div>
                <div class="veri">
                    <svg class="istatistic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
                    <div>5</div>
                </div>
            </div>
            <div class="bottom-information">
                <label class="label"> <b>2</b> Min • <b>1</b> Views • <b>5</b> Comments</label>
                <div class="description">
                    <p>
                       The mom said she struggled with fertility issues and had an ectopic 
                        pregnancy after giving birth to her daughter.
                        
                    </p>
                </div>
                <label class="label">#child #doctor #hospital #fever</label>
            </div>
            <hr>
            <div class="comment">
                <input class="post-input" type="text" name="" placeholder="Comment This">
                <button type="submit" id="post-button"> Post </button>
            </div>
        </div>
        
</div>
</template>

<style scoped>
.post{

width: 85%;
}
.reklam{
    width: 85%;
    height:auto;
    background-color: white;
    border-radius:  0 0 15px 15px;
    border: 1px solid rgb(184, 184, 184);
    margin: 25px 0 25px 0;
}
.reklam-top{
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    background-image: linear-gradient(to right, rgba(255, 0, 255, 0.237),rgba(0, 200, 255, 0.199));
}
</style>