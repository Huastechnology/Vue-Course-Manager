<template>
  <div class="limiter">
	<div class="container-login100">
		<div class="login100-more" style="background-image: url('../img/Tarea.jpg');"></div>
      <img class="img-cuadro" src="../img/Tarea.jpg" alt="">
			<div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-59">
						Registro
					</span>

					<div class="wrap-input100 validate-input">
						<span class="label-input100">Nombre completo</span>
						<input class="input100" type="text" name="name" placeholder="Nombre">
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input">
						<span class="label-input100">Correo</span>
						<input class="input100" type="text" name="email" placeholder="Correo">
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input">
						<span class="label-input100">Teléfono</span>
						<input class="input100" type="text" name="username" placeholder="Teléfono">
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input">
						<span class="label-input100">Contraseña</span>
						<input class="input100" type="text" name="pass" placeholder="*************">
						<span class="focus-input100"></span>
					</div>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								Registrar
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Form'
}
</script>

<style scoped>
	.img-cuadro{
    width: 50%;
		height: 50%;
		margin: 20px;
		border-radius: 200px;
	}
	input {
		outline: none;
		border: none;
	}

	textarea {
		outline: none;
		border: none;
	}
	
	textarea:focus, input:focus {
  border-color: transparent !important;
	}

	.txt1 {
  font-size: 15px;
  color: #999999;
  line-height: 1.4;
	}

	.txt2 {
  font-size: 15px;
  color: #666666;
  line-height: 1.4;
	}

	.txt3 {
  font-size: 16px;
  color: #666666;
  line-height: 1.4;
	}

	.hov1:hover {
		color: #c87ef0;
	}

	.limiter {
  width: 90%;
	margin-top: 35px;
	margin-left: 200px;
	}

	.container-login100 {
		width: 100%;  
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		flex-wrap: wrap;
	}


	.wrap-login100 {
		width: 520px;
		min-height: 100vh;
		background: #fff;
		border-radius: 2px;
		position: relative;
	}

	.login100-more {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		width: calc(100% - 520px);
		position: relative;
		z-index: 1;
	}

	.login100-form {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.login100-form-title {
		display: block;
		width: 100%;
		font-size: 39px;
		color: #333333;
		line-height: 1.2;
		text-align: left;
	}

	.wrap-input100 {
		width: 100%;
		position: relative;
		border-bottom: 2px solid #dbdbdb;
		margin-bottom: 45px;
	}

	.label-input100 {
		font-size: 18px;
		color: #999999;
		line-height: 1.2;
		padding-left: 2px;
	}

	.input100 {
		display: block;
		width: 100%;
		height: 50px;
		background: transparent;
		font-size: 22px;
		color: #555555;
		line-height: 1.2;
		padding: 0 2px;
	}

	.focus-input100 {
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		pointer-events: none;
	}

	.input-checkbox100 {
		display: none;
	}

	.label-checkbox100 {
		margin: 0;
		display: block;
		position: relative;
		padding-left: 26px;
		cursor: pointer;
	}

	.container-login100-form-btn {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	.wrap-login100-form-btn {
			display: block;
			position: relative;
			z-index: 1;
			border-radius: 25px;
	}
	.login100-form-bgbtn {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 300%;
		bottom: -100%;
		left: 0;

		-webkit-transition: all 0.4s;
		-o-transition: all 0.4s;
		-moz-transition: all 0.4s;
		transition: all 0.4s;
	}

	.login100-form-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
		min-width: 244px;
		height: 50px;
		font-size: 16px;
		line-height: 1.2;
	}

</style>