import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query Posts {
    posts(order_by: {created_at: desc}) {
      id
      image
      text
      likes
      created_at
      user {
        id
        image
        name
      }
      comments {
        comment
        user {
          name
        }
      }
    }
  }

`