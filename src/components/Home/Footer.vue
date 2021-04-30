<template>
    <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Servicios</h3>
                        <ul>
                            <li><a href="#">Clases</a></li>
                            <li><a href="#">Asesorias</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Acerca de</h3>
                        <ul>
                            <li><a href="#">Compania</a></li>
                            <li><a href="#">Equipo</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Contactos</h3>
                        <ul>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">Telefono</a></li>
                            <li><a href="#">Whatsapp</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                        <p class="copyright">A&A © 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>

.footer-clean{
    background: black;
    position: fixed;
    width: 100%;
    bottom: 0%;
}

.footer-clean h3{
    color:white;
}

.footer-clean ul {
  padding:10%;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-clean ul a {
  color:white;
  text-decoration:none;
  opacity:0.8;
}

.footer-clean ul a:hover {
  opacity:1;
}

.footer-clean .item.social {
  text-align:right;
  color: white;
}

@media (max-width:767px) {
  .footer-clean .item {
    text-align:center;
    padding-bottom:20px;
  }
}

@media (max-width: 768px) {
  .footer-clean .item.social {
    text-align:center;
  }
}

.footer-clean .item.social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin-left:10px;
  margin-top:22px;
  color:inherit;
  opacity:0.75;
}

.footer-clean .item.social > a:hover {
  opacity:0.9;
}

@media (max-width:991px) {
  .footer-clean .item.social > a {
    margin-top:40px;
  }
}

@media (max-width:767px) {
  .footer-clean .item.social > a {
    margin-top:10px;
  }
}

.footer-clean .copyright {
  color: white;
  margin-top:14px;
  margin-bottom:0;
  font-size:13px;
  opacity:0.6;
}


</style>