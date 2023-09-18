import { Div, BoxLoading } from "./LoadingStyled";

const Loading = () => {
  return (
    <Div>
      <BoxLoading>
        <div className="loader" />
        <div className="LoadingTitle">
          <h1>Cargando...</h1>
          <div className="spinner center">
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
          </div>
        </div>
      </BoxLoading>
    </Div>
  );
};

export default Loading;
