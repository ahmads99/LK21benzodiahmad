class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            nav{
                background-color: #343a40;
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                z-index: 999;
            }
            nav .navbar-brand{
                font-family: 'Roboto Serif', serif;
                font-weight: 700;
                font-size: 24px;
                color: white;
            }
            nav .navbar-nav .nav-link {
                font-weight: 500;
                font-size: 18px;
                color: white;
                transition: color 0.3s ease;
            }
            nav .navbar-nav .nav-link:hover {
                color: #ffc107;
            }
            nav .navbar-brand span{
                font-weight: 900;
            }
        </style>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="index.html">LK<span>23</span>NEW</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Beranda<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Comedy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Dokumenter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
  }
}

customElements.define("app-bar", AppBar);
