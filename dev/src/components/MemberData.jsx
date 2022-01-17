import useGoogleSheets from 'use-google-sheets';

const MemberData = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
      console.log(error)
    return <div>Error!</div>;
  }

  return <div>{
    JSON.stringify(data)
    }</div>;
};

export default MemberData;