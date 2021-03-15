<template>
        <footer> 
            <div class="footer2">
                <a href="#" class="logo">A&A</a>
                <div class="text-area">
                    <h2>Enviamos tus comentarios</h2>
                    <button class="btn-feedback">Feedback</button>
                </div>
                <div class="text-area">
                    <h3>Contact us</h3>
                    <h2 class="" >+52 9994996922</h2>
                    <h2>A&A@gmail.com</h2>
                </div>
            </div>
            <div class="footer2">
                <div class="text-area">
                    <h3>A&A Derechos recervados 2021</h3>
                </div>
            </div>
        </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>

    .footer2{
        display:  -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        background-color: #000;
        margin-top: 5px;
        width: 100%;
        height: 180px;
    }

    .footer2:nth-child(2n){
        margin-top: 0px;
        justify-content: center;
        text-decoration-line: overline;
        color: #90afc5;
        text-align: center;

    }

    .logo{
        color:#fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 30px;
        text-decoration: none;
        padding: 0px 30px;
    }
    .btn-area{
        cursor: pointer;
        color: #fff;
        font-size: 16px;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding: 20px 30px;
        border-radius: 5px;
        background: #d22938;
        margin-right: 20px;
        text-decoration: none;
    }
    .btn-area:hover:hover{
        background: #c51120;
    }
    .nav-button{
        padding: 0px 20px;
    }
    .text-area{
        color: #336B87;

    }
    .mensaje{
        height: 6rem;
    }
    .input-area{
        width: 14.5rem;
    }

    .btn-feedback{
        background: #90afc5;
        border-radius: 20%;
        height: 50px;
        width: 200px;
    }

    .btn-feedback:hover{
        background: #336B87;
    }

</style>