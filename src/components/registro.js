import './../App.css';

function Registro () {
    return(
        <div class="container" >
        <h2>Registro de Usuario</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="name">Nombre Completo: </label> <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
                <label for="email">Correo Electrónico:  </label>
                <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
                <label for="password">Contraseña:  </label>
                <input type="password" id="password" name="password" required />
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirmar Contraseña:  </label>
                <input type="password" id="confirm-password" name="confirm-password" required />
            </div>
            <button>Registrarse</button>
        </form>


        </div>
    )
}

export default Registro