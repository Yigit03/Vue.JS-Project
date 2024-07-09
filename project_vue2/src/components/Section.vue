<template>
    <section>
        <div class="margin"></div>

        <div class="section">
            <div class="section-left">

                <Write />
                <div class="kaydir">
                <Post />
                <Friends />
                <Post_2 />
                <Post_3 />
                <Post />
                <Reklam />
                <Post_6 />
                </div>
            </div>

            <div class="section-right">

                <Aside />

            </div>
        </div>

        <div class="margin"></div>
    </section>
</template>

<script setup>
    import Post from './Post.vue';
    import Post_2 from './Post_2.vue';
    import Post_3 from './Post_3.vue';
    import Reklam from './Reklam.vue';
    import Post_6 from './Post_6.vue';
    import Write from './Write.vue';
    import Friends from './Friends.vue';
    import Aside from './Aside.vue';
</script>

<style scoped>

section{
    margin-top: 46px;
    width: 100%;
    height: auto;
    background-color:#eeeefd ;
    display: grid;
    grid-template-columns: 20% 60% 20%;
}
.section{
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 65% 35%;
}
.margin{
    background-color: #eeeefd;
}
.section-left{
    margin-top: 50px;
    background-color: #eeeefd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.section-left> .kaydir{
    margin-top: -110px;
    background-color: #eeeefd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.section-right{
    background-color: #eeeefd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -3150px;    
}
</style>