import React, { useState } from "react";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import { ButtonVariantContactStyled } from "../../../componentsStyle/general/ButtonStyled";
import ModalReviews from "../../modal/ModalReviews";
import { useDispatch } from "react-redux";
import { updateArchived } from "../../../features/contact/contactsSlices";
import { TableContactProps } from "../../../interfaces/propsInterface/propsInterface";
import { AppDispatch } from "../../../app/store";

const TableContact: React.FC<TableContactProps> = ({ contacts }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dataReview, setDataReview] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <TableStyle>
        <TheadStyled>
          <tr>
            <th>Date & ID</th>
            <th>Customer</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </TheadStyled>
        <tbody>
          {contacts &&
            contacts.map((data) => (
              <TrbodyStyled key={data._id}>
                <TdbodyNameStyled>
                  <div>
                    <p>{data.date}</p>
                    <p>{data.hour}</p>
                    <span>#{data._id}</span>
                  </div>
                </TdbodyNameStyled>
                <TdbodyStyled>
                  <p>
                    {data.name} {data.last_name}
                  </p>
                  <span>{data.email}</span>
                  <h6>{data.telephone}</h6>
                </TdbodyStyled>
                <TdbodyStyled
                  onClick={() => {
                    setOpenModal(true);
                    setDataReview(data.review);
                  }}
                >{`${data.review.substring(0, 150)} ...`}</TdbodyStyled>
                <TdbodyStyled>
                  {data.archived ? (
                    <ButtonVariantContactStyled
                      status={"true"}
                      onClick={() => dispatch(updateArchived(data))}
                    >
                      ARCHIVED
                    </ButtonVariantContactStyled>
                  ) : (
                    <ButtonVariantContactStyled
                      status={"false"}
                      onClick={() => dispatch(updateArchived(data))}
                    >
                      PUBLISH
                    </ButtonVariantContactStyled>
                  )}
                </TdbodyStyled>
              </TrbodyStyled>
            ))}
        </tbody>
      </TableStyle>
      {openModal && (
        <ModalReviews review={dataReview} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default TableContact;
