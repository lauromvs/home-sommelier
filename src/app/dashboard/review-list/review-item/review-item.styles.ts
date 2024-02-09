import styled from 'styled-components'

const Container = styled.div`
  border-radius: 16px;
  position: relative;
  width: 330px;
  height: 330px;
  background-image: url('https://www.casadabebida.com.br/img/products/glenlivet-15-anos-750-ml_1_650.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fff;
  padding: 16px;
`

const ReviewItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-block: 8px;
  padding-inline: 12px;

  position: absolute;
  bottom: 16px;
  right: 16px;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`

const ReviewItemLike = styled.button<{ $invert?: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  background-color: ${(props) => (props.$invert ? '#19304F' : '#fff')};
`

export { Container, ReviewItemInfo, ReviewItemLike }
