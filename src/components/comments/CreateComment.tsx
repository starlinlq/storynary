import { Formik, Field, ErrorMessage } from "formik";
import { Fragment } from "react";
import { Form } from "semantic-ui-react";
import { useStore } from "../../app/stores/stores";
import * as Yup from "yup";
import { useState } from "react";
import { observer } from "mobx-react-lite";

function CreateComment() {
  const [comment, setComment] = useState({ comment: "" });
  const { post, user } = useStore();

  const validationSchema = Yup.object({
    comment: Yup.string().required("Comment is required"),
  });

  function handlFormSubmit(data: { comment: string }) {
    post.create_comment({ ...data });
  }

  return (
    <Fragment>
      <h4 className="comment_author">{user.name}</h4>
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={comment}
        onSubmit={(values) => handlFormSubmit(values)}
      >
        {({ handleSubmit }) => (
          <Form
            className="ui form comment_form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <ErrorMessage
              className="_required"
              name="comment"
              component="div"
            />
            <Field
              className="_input comment_input"
              component="input"
              name="comment"
              placeholder="Share your thoughts"
            />

            <button className="button b-comment" type="submit">
              Post
            </button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default observer(CreateComment);
