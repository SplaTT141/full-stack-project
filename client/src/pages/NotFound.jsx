import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="container">
            <div className="row">
                <div class="custom-bg text-dark">
                    <div class="d-flex align-items-center justify-content-center m-5">
                        <div class="text-center">
                            <h1 class="display-1 fw-bold">404</h1>
                            <p class="fs-2 fw-medium mt-4">Uups! Puslapis nerastas</p>
                            <p class="mt-4 mb-5">Puslapis, kurio ieškote, neegzistuoja arba buvo perkeltas.</p>
                            <Link href="/" class="btn btn-primary fw-semibold rounded-pill px-4 py-2 custom-btn">
                                Grįžti į pagrininį pusalapį
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}