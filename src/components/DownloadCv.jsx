const DownloadCV = () => {
  return (
    <a href="/Matias-Aguirre-2025(Dev).docx" download="Matias-Aguirre-2025(Dev).docx">
      <button className="btn-download">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M.5 9.9v4.6a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V9.9a.5.5 0 0 0-1 0v4.1H1V9.9a.5.5 0 0 0-1 0zm7.5.6a.5.5 0 0 0 .5-.5V1.7a.5.5 0 0 0-1 0v8.3a.5.5 0 0 0 .5.5zm-3.146-3.146a.5.5 0 0 0 .708.708L8 5.207l2.438 2.439a.5.5 0 0 0 .707-.708l-3-3a.5.5 0 0 0-.707 0l-3 3z"/>
        </svg>
        Descargar CV
      </button>
    </a>
  );
};

export default DownloadCV;
