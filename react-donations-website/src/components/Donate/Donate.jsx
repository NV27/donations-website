const Donate = () => {
    return (
        <>
            <div className="main-content main-1">
                <div className="left-content">
                    <h3>OUR MISSION</h3>
                    <p>bunch of text bunch of text bunch of text bunch of text bunch of text bunch of text bunch
                        of text bunch of text bunch of text bunch of text bunch of text bunch of text bunch of
                        text bunch of text
                    </p>
                </div>
                <div className="right-content">
                    <img src={"src/assets/image00.png"} className="family-image" alt={"a family stood together"}/>
                </div>
            </div>
            <h2 className="our-goal">OUR GOAL</h2>
            <div className="main-content main-2">
                <div className="donate-bar-outer">
                    <div className="donate-bar-inner">
                        <div className="donate-bar-fill">
                            <h3>71%</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content main-3">
                <div className="left-content">
                    <h3>Other Ways to Donate</h3>
                    <p>
                        BTC: 1B0000000000000000000000000000000000000000
                    </p>
                    <p>
                        ETH: OX0000000000000000000000000000000000000000
                    </p>
                </div>
            </div>
        </>
    )
}

export default Donate