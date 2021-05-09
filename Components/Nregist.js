export default function Nregist() {
    return(
        <div>
            <form method="POST">
                제목 : <input type="text" name="title" /><br/>
                진행기간 : <input type="text" name="period" /><br/>
                내용 : <input type="text" name="contents" />

                <input type="submit" />
            </form>
        </div>
    )
}