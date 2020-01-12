import axios from "axios";
import {
  GET_COMPTES,
  GET_COMPTEBYID,
  GET_OPERATIONS,
  GET_OPERATIONBYID,
  GET_CARTESBANCAIRES,
  GET_CARTEBANCAIREBYID,
  GET_ABONNEE,
  GET_BENEFICIARES,
  GET_BENEFICIARE,
  GET_VIREMENTS,
  GET_VIREMENTSBYID,
  GET_TYPEVIREMENT,
  GET_OFFRES,
  GET_OFFREBYID
} from "./types";
import { async } from "q";

export const getAbonnee = () => async dispatch => {
  const res = await axios.get("https://contratservice.herokuapp.com/api/abonne/31");

  dispatch({
    type: GET_ABONNEE,
    payload: res.data
  });
};

export const getcomptes = id => async dispatch => {
  const res = await axios.get(
    `https://compteservice.herokuapp.com/api/compte/AllAccountsAbonne/${id}`
  );

  dispatch({
    type: GET_COMPTES,
    payload: res.data
  });
};

export const getCompteById = (id, history) => async dispatch => {
  const res = await axios.get(`https://compteservice.herokuapp.com/api/compte/Account/${id}`);

  dispatch({
    type: GET_COMPTEBYID,
    payload: res.data
  });
};

export const getOperationByIdOperation = (id, history) => async dispatch => {
  const res = await axios.get(
    `https://compteservice.herokuapp.com/api/compte/Operation/${id}`
  );

  dispatch({
    type: GET_OPERATIONBYID,
    payload: res.data
  });
};

export const getOperations = (id, history) => async dispatch => {
  const res = await axios.get(
    `https://compteservice.herokuapp.com/api/compte/AccountOperation/${id}`
  );

  dispatch({
    type: GET_OPERATIONS,
    payload: res.data
  });
};

export const getCartesBancaires = (id, history) => async dispatch => {
  const res = await axios.get(
    `https://compteservice.herokuapp.com/api/compte/AccountCarteBancaire/${id}`
  );

  dispatch({
    type: GET_CARTESBANCAIRES,
    payload: res.data
  });
};

export const getCarteByIdCarte = (id, history) => async dispatch => {
  const res = await axios.get(
    `https://compteservice.herokuapp.com/api/compte/CarteBancaire/${id}`
  );

  dispatch({
    type: GET_CARTEBANCAIREBYID,
    payload: res.data
  });
};

export const desactiverCarteBancaire = (id, history) => async dispatch => {
  const res = await axios.get(
    `https://compteservice.herokuapp.com/api/compte/DesactiverEtatCarteBancaire/${id}`
  );

  dispatch({
    type: GET_CARTESBANCAIRES,
    payload: res.data
  });
  history.push("/CartesBancaires");
};

export const activerCarteBancaire = (id, history) => async dispatch => {
  const res = await axios.get(
    `https://compteservice.herokuapp.com/api/compte/ActiverEtatCarteBancaire/${id}`
  );

  dispatch({
    type: GET_CARTESBANCAIRES,
    payload: res.data
  });
  history.push("/CartesBancaires");
};

export const updateAbonnee = (abonnee, history) => async dispatch => {
  const res = await axios.post(
    "https://contratservice.herokuapp.com/api/abonne/update",
    abonnee
  );
};

export const getBeneficiares = () => async dispatch => {
  const res = await axios.get(
    "https://transaservice.herokuapp.com/api/beneficiare/allAbonne/31"
  );

  dispatch({
    type: GET_BENEFICIARES,
    payload: res.data
  });
};
export const getBeneficiare = id => async dispatch => {
  const res = await axios.get(
    `https://transaservice.herokuapp.com/api/beneficiare/byId/${id}`
  );

  dispatch({
    type: GET_BENEFICIARE,
    payload: res.data
  });
};

export const deleteBeneficiare = (id, history) => async dispatch => {
  const res = await axios.delete(
    `https://transaservice.herokuapp.com/api/beneficiare/delete/${id}`
  );
  const res1 = await axios.get(
    "https://transaservice.herokuapp.com/api/beneficiare/allAbonne/31"
  );
  dispatch({
    type: GET_BENEFICIARES,
    payload: res1.data
  });
  history.push("/Beneficiares");
};

export const addBeneficiare = (beneficiare, history) => async dispatch => {
  const res = await axios.post(
    "https://transaservice.herokuapp.com/api/beneficiare/save",
    beneficiare
  );
  const res1 = await axios.get(
    "https://transaservice.herokuapp.com/api/beneficiare/allAbonne/31"
  );
  dispatch({
    type: GET_BENEFICIARES,
    payload: res1.data
  });
  history.push("/Beneficiares");
};

export const getVirements = id => async dispatch => {
  const res = await axios.get(
    `https://transaservice.herokuapp.com/api/transaction/byCompte/${id}`
  );

  dispatch({
    type: GET_VIREMENTS,
    payload: res.data
  });
};

export const getVirementsByType = type => async dispatch => {
  const res = await axios.get(
    `https://transaservice.herokuapp.com/api/transaction/byType/${type}`
  );

  dispatch({
    type: GET_VIREMENTS,
    payload: res.data
  });
};

export const getVirementsById = id => async dispatch => {
  const res = await axios.get(
    `https://transaservice.herokuapp.com/api/transaction/byId/${id}`
  );

  dispatch({
    type: GET_VIREMENTSBYID,
    payload: res.data
  });
};

export const getTypeVirementBeneficiare = type => async dispatch => {
  const res = await axios.get(
    "https://transaservice.herokuapp.com/api/beneficiare/allAbonne/31"
  );

  dispatch({
    type: GET_TYPEVIREMENT,
    payload: res.data
  });
};

export const addTransaction = (transaction, history) => async dispatch => {
  const res = await axios.post(
    "https://transaservice.herokuapp.com/api/transaction/save",
    transaction
  );

 
};

export const addTransactionBeneficiare = (
  transaction,
  history
) => async dispatch => {
  const res = await axios.post(
    "https://transaservice.herokuapp.com/api/transaction/saveVirementBeneficiare",
    transaction
  );

};

export const getOffres = () => async dispatch => {
  const res = await axios.get("https://transaservice.herokuapp.com/api/transaction/allOffre");

  dispatch({
    type: GET_OFFRES,
    payload: res.data
  });
};

export const getOffreById = id => async dispatch => {
  const res = await axios.get(
    `https://transaservice.herokuapp.com/api/transaction/OffreById/${id}`
  );

  dispatch({
    type: GET_OFFREBYID,
    payload: res.data
  });
};
