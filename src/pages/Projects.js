const Projects = () => {

    return (
    <>
    <div className="content">
    <h1>Some samples of my work:</h1>
    <div className="projectCard">
        <h2>Cask Music</h2>
        <img src={ require('../assets/CASKMusic.PNG') } />
        <p>An application that searches for songs or artists via various music provider APIs</p>
    </div>
    <div className="projectCard">
        <h2>RecipePop</h2>
        <img src={ require('../assets/RecipePOP.PNG') } />
        <p>An in-progress application allows for search for and sharing recipes and allows basic social media capabilities</p>
    </div>    
    </div>
    </>
    );
};

export default Projects;