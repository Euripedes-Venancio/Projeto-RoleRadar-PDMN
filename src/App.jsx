export default () => {
    return (
        <div className="min-vh-100 d-flex flex-column">

            <div className="row justify-content-center mt-4">

                <div className="col-12 col-md-8 d-flex justify-content-center align-items-center text-primary">
                    <i className="fa-solid fa-location-dot text-danger me-2 fs-1"></i>
                    <h1 className="mb-0">RolêRadar</h1>
                </div>

                <div className="col-12 col-md-8 d-flex justify-content-center align-items-center mt-2">
                    <p>DESCUBRA O QUE EXISTE PERTO DE VOCE</p>
                </div>

                <div className="col-12 col-md-8 d-flex justify-content-center align-items-center text-primary">
                    <p className="mx-4">
                        <a href="https://www.geoapify.com" target="_blank" rel="noreferrer">
                            Powered by Geoapify
                        </a>
                    </p>

                    
                        <p>
                        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
                            &copy; OpenStreetMap Contributors
                        </a>
                    </p>
                </div>

            </div>

            <footer className="mt-auto text-center py-3">
                RolêRadar &copy; 2026
            </footer>

        </div>
    )
}