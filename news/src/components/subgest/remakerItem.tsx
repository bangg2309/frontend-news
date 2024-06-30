const RemakerItem: React.FC<RemakerItemProps> = ({ remaker }) => {
return (
        <div className="remaker-item">
            <img src={remaker.src} alt="Image" style={{ width: '100%' }} />
            <div className="remaker-item-content">
                <h3>{remaker.title}</h3>
                <p>{remaker.description}</p>
            </div>
        </div>
    );

}