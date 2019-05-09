import { connect } from 'react-redux';
import BlogList from '../components/BlogList';

//translate redux state into react props
const mapStateToProps = (state) => {
    return {
        //react: redux
        posts: state.posts,
    };
};

// translate action dispatch into react props
// We don't need this yet :)
const makeBlogListSmart = connect(mapStateToProps);
const SmartBlogList = makeBlogListSmart(BlogList);
export default SmartBlogList;