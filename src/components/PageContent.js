import './styles/Content.css';

function PageContent (props) {
    return (
        <div>
            { props.children }
        </div>
    );
}; 

export default PageContent;