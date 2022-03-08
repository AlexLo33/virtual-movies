import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../store/store";

const mapStateToProps = (state: AppState) => {
  return {
    query: state.searchStore.query,
  }
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface MainTitleProps extends PropsFromRedux {
  query: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ query }) => {
  return (
    <h1>{query.length ? `Search result for ${query}` : 'Latest movies'}</h1>
  );
}

export default connector(MainTitle);
