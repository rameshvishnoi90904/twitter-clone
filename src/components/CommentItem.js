import styled from "styled-components";

const CommentContainer = styled.div`
border-bottom: solid 1px #8d8d8d;
`
const CommentName = styled.div`
font-size: 18px;
font-weight: bold;
`
const CommentBody = styled.div`
`

const CommentItem = ({commentData}) => {
    return (
        <CommentContainer className="px-3 py-2">
            <div className="mb-1">
                {commentData.email} :
            </div>
            <div className="mx-3">
                <CommentName>{commentData.name}</CommentName>
                <CommentBody>{commentData.body}</CommentBody>
            </div>
        </CommentContainer>
    )
}

export default CommentItem;