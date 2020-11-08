import {connect } from 'react-redux';
function ViewControls(props){

    const changeView=(view)=>{
        props.changeView(view)
    }

    return(
        <div className="controls">
            <img onClick={()=>changeView("GRID")} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAAwMDCGhoa0tLTCwsJ0dHTo6Oj09PS5ubn7+/vu7u54eHjIyMhZWVmMjIzU1NQUFBSsrKxGRkZSUlKUlJSAgIA2NjZmZmZAQECjo6Obm5teXl4dHR0qKioNDQ1VTXQTAAADcElEQVR4nO3d6XLiMBBFYYU1NqvZyfr+bxkyqVSmXXXHLYWxBHW+/411xtjgiYEQAAAAAOB/m42GL4P3h5I0g9OwerxOXr3Z5s6RdqMr9A1zV3TY/zJwnDugW7P+TeAk9/Jdhsl99Tn32p2WqYGvuVfudk4rvJU9+ClpL97GMfgt4ZRa5V5zpOgzap17xbHeYgtXuVccbXPnu/Dyyh9X+JR7vQmqqMJBe3y+mD52qu35t6q7R77mNmbu4JibLk7tJUa9Ykxbw9uZb84Wjt3bG5k557uwaXs3uDd3Yf9N/W8Zei0M9Ztd5sK9vRAOdtS5B/suDGu7zGf39kKw17wH91zPhWFp5ubuuRCaxL3fd6Gd27rnQrB73/0k7b3QPk2P7rl2of8/fPoutOf8gXuOQo1ChUKFQo1ChUKFQoVCjUKFQoVChUKNQoVChUKFQo1ChUKFQoVCjUKFQoVChUKNQoVCJXdh7Z6bmzn/3//tjZAr99zsSoUTr/nRzC3n3rmdmTt75yb2vqj0wltBIYXlo5DC8lFIYfkopLB86YXV2Glh77veL7xz9jNIJ+/c2F5X3s71of8K+FrXh/d/jU/hDwoVChUKNQoVChUKFQo1ChUKFQoVCjUKFQoVChUKNQoVChUKFQo1ChUKFQoVCjUKFQoVChUKNQoVCpXchff/eYvNyKmyn5tYVd45+22iL965kf0yYO5ro7B8FFJYPgopLB+FFJaPQl14GDqt7A8ondxzL2Zuu/IO2qs1rg//Zgvv/xqfwh8UKhQqFGoUKhQqFCoUahQqFCoUKhRqFCoUKhQqFGoUKhQqFCoUahQqFCoUKhRqFCoUKv0XvpvJqXvudn5b/dVM+v8e33ehnTu750Kw32E5cc/1XZi6zhCGZtL/NO250D5JH/bu7bXv/vAfwv0WPjZ2mf6jqX2fyuUYdu7FXgvX9mwRc9/Pxbk1/HCq1tNOM/t7E6NZ98jXnP3cxNwxt67sMXixjAkMm/b4DfA/Zf7Ivdx4TVxgeM694GibyMLQdD9mUWLesn1Z5F5ypHV0YTh0P2pBnuMDQ9h1P24xTimBIQxyr9ttlxZ4O3sxcQ9+GnY/egGSjsFvi/JfNN4SzqLGPnfBvzVPv+z7VJV7OJ4i34tK9Xg/2R4HJTlu5/uY60EAAAAAAAAAAIBifABPdWvgtPhbHAAAAABJRU5ErkJggg==" className="control" />
            <img onClick={()=>changeView("LIST")} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUAAAD///+MjIzPz8/V1dXc3Nz7+/vz8/OcnJy8vLyZmZmkpKSxsbFzc3PDw8ORkZGqqqpbW1s3NzcNDQ0/Pz/s7Ozk5ORlZWUuLi56enqCgoInJyccHBwVFRVTU1NISEjN2j5UAAAEy0lEQVR4nO2d7XqiMBBGpSKI4ndRq7a9/7vcrbtPC2SGBpIhE33Pz252k7M2BJJ3cJLwVOVqf5ho57BflVWHxYT9k+Mu9Nh7sDv2N3wJPeiebHoaZq+hR9ybz36G59DjHcBrH8OYpuAPJ3vDbeixDqS0NcxCj3Qwtobz0AMdzNbS8Bp6oIOhLjaEYRV6nA7kVoZF6GE6sLYyjHcakldTwjC2+7U6xL3bgxm+wBCG6oEhDPUDQxjqB4Yw1A8MYagfGMJQPzCEoX5gCEP9wBCG+oEhDPUDQxjqB4Yw1A8MYXjnrajyPD8Wq3HG3A93w1tRa9gRQ/1YFNNUgGLeHe51Nrw0W2ZMd3MiQOeNbNtRIeFqaKbGFkSrUybg1YCfII6Ghdk22RitFt6FTEoZQ+JvJ2bofQxBXtHJ8Ez3lTdb7fyasDC/qE6GRDj1TnMqSl5j6jBpexfDq1Vf9G+yBNQ1zs1wzvZ1qrXiC6x8Q6fRXQxnbF+1WX/zqPAbe9+G/ARLfxqtPBr8xsW3Id9V7WrKlsgJQAbuHQwPHX2FMSSXRJnPMOvsQIylb0N+Hs5+GtH1cTJ4n4f8tbRWYzPmtZSscpVZD+s3UOOthzk5ShfDPdtXvdWFbeUbchq63ZdOma6aT/oR35dyhcRJs1XMzxbMk1+7q4ifD+nnJ/POYuldx0ToGZ9SpLbb5G9O39gROu+1tZcMpqut5F5UVr7zA3TfLz3XP8aS39Y7LdfpTID18sT26cdwMnlfpHmWZPlU5ea/t3OLm/xYh4GTGRjqB4Yw1A8MYagfGMJQPzCEoX5gCEP9eNmnuayPSZI9fTZxt1hPJRDfa2tnE5nulqLZPcn9UjO6FyabKLbnbZdNjPjcgg5atH9R+bNin4yZTWwdVcZ8fshlE5vnaxGfAT9zNvFRshjIJt5BNtEnyCZ+j878EbKJbR4lm5iyXT1XNpFfU3zjfz1kbkuTUNlE+r3qyCb+gzHkAqbNVjE/WzxDNpF6xjdv8cd4BB4xm0gtuxHv01hnE0X32oSzidf6xxhiv3Qun028bdLq739kNSXvmkKDcwsY6geGMNQPDGGoHxjCUD8whKF+YAhD/fgyPDx0/eF1kWbJvYa049V3wXA3fK2fXhT8R7mbR1oHrGG/NCk75oiroXn8RG2vywcy+I1MR0PqfM3cFY44m0gfubTPniLOJtq922SsrILE+SF3Btw8for4DNjuHUPjBWr8n+PzF5Aw2cRA701kQ6gCeM8m8os4solCIJv4PTrzR8gmtkE2UQjv2UQ+6xQmm+h/PUQ28T+VVw2ecNnED68ePCLZRHqxa3c1zpLIxbFGySaOEb9k82aPkk0U+34L4/PJmK6Ev6OEH5+PbOKjf8/MF5vp13cFVWtkE4MAQxjqB4Yw1A8MYagfGMJQPzCEoX5gCEP9wBCG+oEhDPUDQxjqB4Yw1A8MYagfGMJQPzB8FkPzVfnxQOQGCUP6O73jYGtlWPz+D6mFiE8ShnSCOg6IiDJVR3EOPc7BUGF0yjDeiUgV2FGGTEo8AggZ0pAvJFZOaW2YdMdUtULXJDEVWzFebJhSbMYwI6uKVPNJm3CGXe/q1Qlbj8TXFc5imownvsS6o3IyqcrVXuMrWpoc9quyq9rqD6xSZqqn/5VnAAAAAElFTkSuQmCC" className="control" />
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
      beers:state.beers,
      view:state.view
    }
  }

const mapDispatchToProps = (dispatch) =>{
return{
    changeView:(payload)=>{dispatch({'type':'CHANGE_VIEW', payload:payload})}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewControls)