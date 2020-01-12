import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getcomptes,
  getCompteById,
  getOperations,
  getAbonnee,
  getOffres,
  getOffreById
} from "../../actions/projectActions";
import { Modal, Button } from "react-bootstrap";
class Accueil extends Component {
  componentDidMount() {
    this.props.getAbonnee();
    this.props.getOffres();
  }
  constructor() {
    super();
    this.onClick = this.ClickDetail.bind(this);
    this.state = {
      showModal: false,
      showModal1: false,
      showModal2: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.open1 = this.open1.bind(this);
    this.close1 = this.close1.bind(this);
    this.open2 = this.open2.bind(this);
    this.close2 = this.close2.bind(this);
  }
  ClickDetail = e => {
    e.preventDefault();
    this.props.getOffreById(e.target.value);
  };

  open = e => {
    this.setState({ showModal: true });
    //this.props.getDemandeById(e.target.value, this.props.history);
  };
  close() {
    this.setState({ showModal: false });
  }
  open1 = e => {
    this.setState({ showModal1: true });
    //this.props.getDemandeById(e.target.value, this.props.history);
  };
  close1() {
    this.setState({ showModal1: false });
  }

  open2 = e => {
    this.setState({ showModal2: true });
    //this.props.getDemandeById(e.target.value, this.props.history);
  };
  close2() {
    this.setState({ showModal2: false });
  }

  render() {
    const { abonnee } = this.props.abonnee;
    const code = abonnee.contrat ? abonnee.contrat.codecontrat : "0";
    this.props.getcomptes(code);
    const { comptes } = this.props.compte;
    const { compte } = this.props.compte;
    const { offre } = this.props.offre;
    return (
      <div>
        <div id="right-panel" class="right-panel">
        <aside id="left-panel" class="left-panel">
          <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li class="active">
                  <br />
                  <a href="/Accueil">
                    <i class="menu-icon fa fa-dashboard fa-lg"></i>
                    <strong>Tableau de Bord </strong>
                  </a>
                  <br />
                  <br />
                </li>

                <li class="menu-title">Gérer ma Contrat</li>
                <li>
                  <a href="/Comptes">
                    {" "}
                    <i class="menu-icon fa fa-list-ul fa-lg"></i>
                    <strong>Mes Comptes </strong>
                  </a>
                </li>
                <li>
                  <a href="/Operations">
                    {" "}
                    <i class="menu-icon fa fa-tasks fa-lg"></i>
                    <strong>Mes Opérations </strong>
                  </a>
                </li>
                <li>
                  <a href="/Transactions">
                    {" "}
                    <i class="menu-icon fa fa-plus-square fa-lg"></i>
                    <strong>Nouvelle Opération </strong>
                  </a>
                </li>
                <li>
                  <a href="/CartesBancaires">
                    {" "}
                    <i class="menu-icon fa fa-folder-open fa-lg"></i>
                    <strong>Mes Cartes Bancaires </strong>
                  </a>
                </li>

                <li class="menu-title">Gérer mon Compte</li>
                <li>
                  <a href="/MonCompte">
                    {" "}
                    <i class="menu-icon fa fa-user fa-lg"></i>
                    <strong>Mes Informations </strong>
                  </a>
                </li>
                <li>
                  <a href="/Beneficiares">
                    {" "}
                    <i class="menu-icon fa fa-users fa-lg"></i>
                    <strong>Béneficiares </strong>
                  </a>
                </li>
                <li class="menu-title">Déconnection</li>
                <li>
                  <a href="/Login">
                    {" "}
                    <i class="menu-icon fa fa-sign-out fa-lg"></i>
                    <strong>Se Déconnecter </strong>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        <header id="header" class="header">
          <div class="top-left">
            <div class="navbar-header">
              <a class="navbar-brand" href="./">
                <img
                  src="images/logo.png"
                  alt="Logo"
                  height="63px"
                  width="210px"
                />
              </a>
              <a class="navbar-brand hidden" href="./">
                <img src="images/logo.png" alt="Logo" />
              </a>
            </div>
          </div>
          <div class="top-right">
            <div class="header-menu">
              <div class="user-area dropdown float-right">
                <a
                  href="#"
                  class="dropdown-toggle active"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    class="user-avatar rounded-circle"
                    src="images/admin.jpg"
                    width="180px"
                    height="50px"
                    alt="User Avatar"
                  />
                </a>

                <div class="user-menu dropdown-menu">
                  <a class="nav-link" href="/Login">
                    <i class="fa fa-power -off "></i>Se Déconnecter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="content">
          <div class="animated fadeIn">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <img src="images/wow2.jpg" width="1400px" height="400px" />
                </div>
              </div>
              <br />
              <br />
              <div class="col-md-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/credit1.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title mb-3">
                      SALAF 0%, votre crédit consommation sans intérêt
                    </h4>
                    <p class="card-text">
                      Vous souhaitez profiter d'un crédit consommation sans
                      intérêts?
                      <br />
                      Le credit Salaf 0% de Online Banking répond à vos
                      attentes!
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>{" "}
                    <br></br><br></br>
                    <br></br>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    
                    <button
                      type="button"
                      class="btn btn-bleu"
                      data-toggle="modal"
                      data-target="#mediumModal"
                      onClick={this.ClickDetail}
                      value="1"
                    >
                     
                      <i class="fa fa-lightbulb-o"></i>
                      
                      &nbsp; Détail
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-orange"
                      onClick={this.open}
                    >
                      <i class="fa fa-check"></i>
                      Choisir&nbsp;&nbsp;&nbsp;
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/cap1.jpg"
                    alt="Card image cap"
                    height="240px"
                  />
                  <div class="card-body">
                    <h4 class="card-title mb-3">
                      Salaf Aarboune pour financer l'apport de votre logement
                    </h4>
                    <p class="card-text">
                      Vous avez trouvé la maison de vos rêves et n'avez pas la
                      somme nécessaire pour investir dans votre projet? Faites
                      votre premier pas vers la propriété avec le crédit
                      personnel Salaf Aarboune!
                    </p>
                    <br />
                    <br />
                    <br></br>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-bleu"
                      data-toggle="modal"
                      data-target="#mediumModal1"
                      onClick={this.ClickDetail}
                      value="2"
                    >
                      <i class="fa fa-lightbulb-o"></i>
                      &nbsp;&nbsp;&nbsp; Détail
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-orange"
                      onClick={this.open}
                    >
                      <i class="fa fa-check"></i>
                    Choisir&nbsp;&nbsp;&nbsp;
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/cap2.jpg"
                    alt="Card image cap"
                    height="240px"
                  />
                  <div class="card-body">
                    <h4 class="card-title mb-3">
                      Prêt personnel Salaf Commercants & Profession libérale
                    </h4>
                    <p class="card-text">
                      Vous êtes commerçant ou professionnel libéral et envisagez
                      de souscrire un prêt personnel pour réaliser vos projets
                      personnels ou donner un coup de pouce à votre activité
                      professionnelle? Optez pour le crédit personnel Salaf
                      Commerçant & Artisans
                    </p>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-bleu"
                      data-toggle="modal"
                      data-target="#mediumModal2"
                      onClick={this.ClickDetail}
                      value="3"
                    >
                      <i class="fa fa-lightbulb-o"></i>
                      &nbsp;&nbsp;&nbsp; Détail
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-orange"
                      onClick={this.open}
                    >
                      <i class="fa fa-check"></i>
                       Choisir&nbsp;&nbsp;&nbsp;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="mediumModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mediumModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="mediumModalLabel">
                  Détails sur l'Offre SALAF 0%
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h5 class="card-title mb-3">
                  SALAF 0%, votre crédit consommation sans intérêt
                </h5>
                <p class="card-text">
                  Vous souhaitez profiter d'un crédit consommation sans
                  intérêts? Le credit Salaf 0% de Online Banking répond à vos
                  attentes!
                </p>
                <table className="table table-striped table-bordered">
                  <tbody key={offre.id_Offre}>
                    <tr>
                      <th>Date Début de l'offre</th>
                      <td>{offre.dateFin}</td>
                    </tr>
                    <tr>
                      <th>Date Fin de l'offre</th>
                      <td>{offre.dateDebut}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-orange"
                  data-dismiss="modal"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/**Detail 2 */}
        <div
          class="modal fade"
          id="mediumModal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mediumModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="mediumModalLabel">
                  Détails sur l'Offre Salaf Aarboune
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h5 class="card-title mb-3">
                  Salaf Aarboune pour financer l'apport de votre logement
                </h5>
                <p class="card-text">
                  Vous avez trouvé la maison de vos rêves et n'avez pas la somme
                  nécessaire pour investir dans votre projet? Faites votre
                  premier pas vers la propriété avec le crédit personnel Salaf
                  Aarboune!
                </p>
                <table className="table table-striped table-bordered">
                  <tbody key={offre.id_Offre}>
                    <tr>
                      <th>Date Début de l'offre</th>
                      <td>{offre.dateFin}</td>
                    </tr>
                    <tr>
                      <th>Date Fin de l'offre</th>
                      <td>{offre.dateDebut}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-orange"
                  data-dismiss="modal"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/**Detail 3 */}
        <div
          class="modal fade"
          id="mediumModal2"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mediumModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="mediumModalLabel">
                  Détails sur l'Offre Prêt Personnel
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h5 class="card-title mb-3">
                  Prêt personnel Salaf Commercants & Profession libérale
                </h5>
                <p class="card-text">
                  Vous êtes commerçant ou professionnel libéral et envisagez de
                  souscrire un prêt personnel pour réaliser vos projets
                  personnels ou donner un coup de pouce à votre activité
                  professionnelle? Optez pour le crédit personnel Salaf
                  Commerçant & Artisans
                </p>
                <table className="table table-striped table-bordered">
                  <tbody key={offre.id_Offre}>
                    <tr>
                      <th>Date Début de l'offre</th>
                      <td>{offre.dateFin}</td>
                    </tr>
                    <tr>
                      <th>Date Fin de l'offre</th>
                      <td>{offre.dateDebut}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-orange"
                  data-dismiss="modal"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Modal
            className="modal-container"
            show={this.state.showModal}
            onHide={this.close}
            animation={true}
            bsSize="small"
          >
            <div class="modal-header">
              <h5 class="modal-title" id="smallmodalLabel">
                Demande Envoyé!
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <Modal.Body>
              <p>
                Demande Envoyé à votre Chargé de Cientèle pour qui la traite
              </p>
            </Modal.Body>

            <Modal.Footer>
              <button onClick={this.close} class="btn btn-danger">
                Fermer
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        </div>
      </div>
    );
  }
}

Accueil.propTypes = {
  compte: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired,
  getCompteById: PropTypes.func.isRequired,
  getAbonnee: PropTypes.func.isRequired,
  getOffres: PropTypes.func.isRequired,
  getOffreById: PropTypes.func.isRequired,
  offre: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  compte: state.compte,
  abonnee: state.abonnee,
  offre: state.offre
});
export default connect(mapStateToProps, {
  getcomptes,
  getCompteById,
  getAbonnee,
  getOffres,
  getOffreById
})(Accueil);
